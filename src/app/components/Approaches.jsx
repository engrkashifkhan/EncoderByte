"use client";

import ServiceCard from "./ApproachesCard";
import { services } from "./ApproachesData";

export default function Approaches() {
  return (
    <section className="w-full bg-[#F5F7FA] py-20 px-6 md:px-16">
      
      {/* Heading */}
      <div className="relative flex flex-col md:flex-row md:items-start mb-12">
        <div className="flex flex-col items-center text-center md:items-start md:text-left w-full relative md:pr-48">
          <h2 className="text-2xl md:text-2xl font-semibold leading-snug">
            OUR APPROACHES <br />
            <span className="text-blue-800">TO SOLVE A PROBLEM.</span>
          </h2>

          {/* Hydration-safe button */}
          <button
            className={`
              mt-4 w-fit whitespace-nowrap border border-blue-800 text-blue-800 px-6 py-3 rounded-lg
              hover:bg-blue-600 hover:text-white transition-colors duration-300
              md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2
            `}
          >
            Read Details
          </button>

          <p className="text-gray-600 mt-4 max-w-sm lg:max-w-2xl">
            We at Encoderbytes follow every possible method to solve problems for our clients and help them in their businesses.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, index) => (
          <ServiceCard
            key={index}
            number={item.number}
            image={item.image}
            title={item.title}
            highlight={item.highlight}
            description={item.description}
          />
        ))}
      </div>

    </section>
  );
}
