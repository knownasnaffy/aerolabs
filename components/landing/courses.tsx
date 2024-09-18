import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";

enum KitIncluded {
  YES = 1,
  NO = 0,
}

interface CoursesProps {
  title: string;
  kitIncluded: KitIncluded;
  description: string;
  price: number;
  duration: string;
}

const CoursesList: CoursesProps[] = [
  {
    title: "Tech Foundations",
    description:
      "Get started with our free introductory course covering the basics of robotics, technology, and engineering. Understand what our full courses offer and how they can benefit you.",
    kitIncluded: 0,
    price: 0,
    duration: "1 Hour",
  },
  {
    title: "Basic Robotics",
    description:
      "Explore the fundamentals of robotics, including building and programming simple robots. Perfect for beginners looking to dive into the world of robotics.",
    kitIncluded: 1,
    price: 5000,
    duration: "6 Weeks",
  },
  {
    title: "Advanced Robotics",
    description:
      "Dive into more complex robotics concepts with hands-on projects and advanced techniques. Ideal for those with a basic understanding who want to take their skills to the next level.",
    kitIncluded: 1,
    price: 6000,
    duration: "8 Weeks",
  },
  {
    title: "Drone Engineering",
    description:
      "Learn about drone design, construction, and flying. Gain practical experience with different types of drones and their applications in various fields.",
    kitIncluded: 1,
    price: 6000,
    duration: "8 Weeks",
  },
];

export const CoursesSection = () => {
  return (
    <section id="courses" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Courses
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Learn Something New
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Dive into robotics with our engaging courses, perfect for all skill
        levels. Discover, create, and innovate with hands-on learning.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {CoursesList.map(
          ({ title, description, kitIncluded, price, duration }) => (
            <Card
              key={title}
              className="bg-muted/60 dark:bg-card h-full relative group hover:bg-muted/90 dark:hover:bg-card/50 dark:border-muted flex flex-col justify-between hover:cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{title}</CardTitle>
                  <SquareArrowOutUpRight className="size-5 text-muted-foreground group-hover:text-primary transition-all" />
                </div>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardFooter className="-mt-2">
                <CardDescription>
                    <strong className="text-foreground">Price:</strong>{" "}
                    {price === 0 ? "Free" : `₹${price}`}
                </CardDescription>
                <CardDescription className="ml-auto">
                    <strong className="text-foreground">Duration:</strong>{" "}
                    {duration}
                </CardDescription>
              </CardFooter>
              <Badge
                data-pro={KitIncluded.YES === kitIncluded}
                variant="default"
                className="absolute -top-2 -right-3 data-[pro=false]:hidden"
              >
                Hardware Kit Included
              </Badge>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
