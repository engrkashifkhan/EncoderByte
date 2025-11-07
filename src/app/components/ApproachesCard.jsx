"use client";
import Image from "next/image";

export default function ServiceCard({ number, image, title, highlight, description }) {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-10 relative flex flex-col">
      
      {/* Number */}
      <span className="text-7xl font-bold text-gray-200 absolute top-6 left-6">
        {String(number).padStart(2, "0")}
      </span>

      {/* Icon */}
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="absolute top-6 right-6 opacity-90"
      />

      {/* Content */}
      <div className="mt-24">
        <h3 className="text-2xl font-bold">{title}</h3>
        <h3 className="text-2xl font-bold">
          <span className="text-blue-600">{highlight}</span>
        </h3>
        <p className="text-gray-600 mt-4">{description}</p>
      </div>
    </div>
  );
}
