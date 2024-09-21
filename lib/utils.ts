import { clsx, type ClassValue } from "clsx";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const matchQueryList = window.matchMedia(query);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleChange(e: any) {
      setMatches(e.matches);
    }
    matchQueryList.addEventListener("change", handleChange);
    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);
  return matches;
}
