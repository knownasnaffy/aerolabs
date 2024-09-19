import EssenceIllustration from "@/components/assets/essence.svg";
import Image from "next/image";

const EssenceSection = () => {
  return (
    <>
      <section id="benefits" className="container py-24 sm:py-32 bg-muted/60 rounded-[3rem]">
        <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
          <div>
            <h2 className="text-lg text-white mb-2 tracking-wider">
              Essence
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Commitment to You
            </h2>
            <p className="text-xl text-muted mb-8">
              We are committed to providing a high-quality educational
              experience that meets the promises we&apos;ve made. If our course does
              not deliver the outcomes we&apos;ve outlined, we will offer a 100%
              refund.<span className="align-super mr-1 text-sm">(1)</span>
              We strive to create an engaging and supportive learning
              environment for every student.
            </p>
          </div>

          <Image src={EssenceIllustration} alt="Yo buddy" className="fill-primary bg-card p-8 rounded-3xl" />
        </div>
      </section>
    </>
  );
};

export default EssenceSection;
