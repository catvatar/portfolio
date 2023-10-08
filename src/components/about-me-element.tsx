"use client";
import Image from "next/image";

export default function AboutMeElement() {
  return (
    <div className="grid grid-cols-5 rounded-xl border-4 border-b-0 border-r-0 border-accent-400 bg-primary-400 p-4 lg:max-xl:grid-cols-2">
      <div className="col-span-2 pr-2 ">
        <Image
          src="/profile.png"
          width={9999}
          height={0}
          alt="test"
          className="rounded-xl border-0"
        />
      </div>

      <div className="col-span-3 flex flex-col justify-center pl-2">
        <p>Jestem studentem Mechaniki.</p>
        <p>Czas wolny wypełniam tworzeniem ciekawych projektów.</p>
      </div>
    </div>
  );
}
