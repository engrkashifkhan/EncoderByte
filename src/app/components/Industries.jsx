"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ImageTextBlock({
  heading = "Industry .",
  subHeading,
  description,
  image,
  reverse = false, // if true → swap image & text
  buttonText = "Get Started",
}) {
  return (
    <div
      className={`max-w-6xl mx-auto flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-x-5 pt-20`}
    >
      {/* TEXT SECTION */}
      <div className="w-full md:w-1/2 flex flex-col gap-y-2 text-center items-center md:text-start md:items-start">
        <h2 className="text-2xl font-semibold">{heading}</h2>
        {subHeading && (
          <h2 className="text-2xl font-semibold text-blue-700">{subHeading}</h2>
        )}

        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>

        <button className="mt-3 bg-transparent hover:bg-blue-500 border px-4 py-2 rounded-md font-semibold text-blue-500 hover:text-white flex items-center gap-2">
          {buttonText}
          <ArrowRight size={18} />
        </button>
      </div>

      {/* IMAGE SECTION */}
      <div className="w-full md:w-1/2 pt-10 md:pt-0">
        <Image
          src={image}
          alt="section image"
          width={600}
          height={400}
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
