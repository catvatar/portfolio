"use client";
import Image from "next/image";
import { useSelectedLayoutSegments } from "next/navigation";

export default function AboutMeElement() {
  const selectedLayoutSegments = useSelectedLayoutSegments();
  const isBlog = selectedLayoutSegments.includes("blog");
  const source = isBlog ? "/profile-pies.png" : "/profile.png";
  return (
    <div className="grid grid-cols-5 rounded-xl border-4 border-b-0 border-r-0 border-accent-400 bg-primary-400 p-4 lg:max-xl:grid-cols-2">
      <div className="col-span-2 pr-2 ">
        <Image
          src={source}
          width={9999}
          height={0}
          alt="test"
          className="rounded-xl border-0"
        />
      </div>

      <div className="col-span-3 flex flex-col justify-center pl-2">
        <p className="text-sm">
          Podchodzę z entuzjazmem do każdego pomysłu. Wyznaję zasadę
          nieustannego rozwoju, chcę z każdym projektem wiedzieć i umieć trochę
          więcej.
        </p>
      </div>
    </div>
  );
}
