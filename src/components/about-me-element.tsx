"use client";
import Image from "next/image";

export default function AboutMeElement() {
  return (
    <div className="grid grid-cols-5 lg:max-xl:grid-cols-2 ">
      <div className="col-span-2 p-2">
        <Image
          src="/profile.png"
          width={9999}
          height={0}
          alt="test"
          className="border-4 border-detail-700"
        />
      </div>

      <div className="col-span-3 flex flex-col justify-center px-3">
        <p>
          Jestem studentem Mechaniki. Czas wolny wypełniam tworzeniem ciekawych
          projektów z dziedzin którymi w tym momencie się interesuję.
        </p>
      </div>
    </div>
  );
}
