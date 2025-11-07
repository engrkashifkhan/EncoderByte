"use client";
import ImageTextBlock from "./Industries";

export default function ImageTextSection() {
  const items = [
    {
      subHeading: "HEALTH",
      description:
        "We are helping and educating doctors and other people through our applications. Our app is ranked in the top five in the health category in Pakistan. We provide management systems to the health industry.",
      image: "/image_22.png",
      reverse: false,
    },
    {
      subHeading: "FINANCE",
      description:
        "We build secure and scalable fintech platforms to help organizations manage payments and finances efficiently.",
      image: "/image_22.png",
      reverse: true,
    },
    {
      subHeading: "EDUCATION",
      description:
        "We create modern learning solutions to empower students and institutions for a better learning environment.",
      image: "/image_22.png",
      reverse: false,
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-16">
      {/* Header Section */}
      <div className="relative flex flex-col md:flex-row md:items-start mb-12">
        <div className="flex flex-col items-center text-center md:items-start md:text-left w-full relative md:pr-48">
          <h2 className="text-2xl md:text-2xl font-semibold leading-snug">
            WE PROVIDE THE EXEMPLARY <br />
            <span className="text-blue-800">IT SOLUTIONS.</span>
          </h2>

          <button className="mt-4 w-fit whitespace-nowrap border border-blue-800 text-blue-800 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
            View All Services
          </button>

          <p className="text-gray-600 mt-4 max-w-sm lg:max-w-2xl">
            Encoder Bytes (Pvt.) Ltd. is a leading software development company.
            We build robust software for startups and established businesses
            since 2019.
          </p>
        </div>
      </div>

      {/* Reusable Blocks */}
      {items.map((item, index) => (
        <ImageTextBlock key={index} {...item} />
      ))}
    </section>
  );
}
