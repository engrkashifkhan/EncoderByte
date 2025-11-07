// "use client";
import ServiceCard from "./Services";

export default function ServicesSection() {

  const services = [
    {
      image: "/image.png",
      title: "MOBILE APP",
      highlight: "DEVELOPMENT",
      description:
        "We build stunning Mobile Apps that work across different devices to increase engagement with security & scalability.",
    },
    {
      image: "/image_3.png",
      title: "WEB APPLICATION",
      highlight: "DEVELOPMENT",
      description:
        "Using the latest technologies, we build robust and scalable web applications with seamless user experiences.",
    },
    {
      image: "/image_16.png",
      title: "UI / UX",
      highlight: "DESIGNING",
      description:
        "We design user-centered interfaces that improve usability, accessibility, and overall digital experience.",
    },
    {
      image: "/image_19.png",
      title: "SOFTWARE",
      highlight: "CONSULTATION",
      description:
        "We analyze business needs and provide the best technology solutions to enhance workflow and performance.",
    },
  ];

  return (
    <section className="w-full bg-[#F5F7FA] py-20 px-6 md:px-16">
      
      {/* Top Heading */}
      <div className="relative flex flex-col md:flex-row md:items-start mb-12">

        <div className="flex flex-col items-center text-center md:items-start md:text-left w-full relative md:pr-48">

          <h2 className="text-2xl md:text-2xl font-semibold leading-snug">
            WE PROVIDE THE EXEMPLARY <br />
            <span className="text-blue-600">IT SOLUTIONS.</span>
          </h2>

          <button className="mt-4 w-fit whitespace-nowrap border border-blue-800 text-blue-800 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300
            md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
            View All Services
          </button>

          <p className="text-gray-600 mt-4 max-w-sm lg:max-w-2xl">
            Encoder Bytes (Pvt.) Ltd. is a leading software development company. We build
            robust software for startups and established businesses since 2019.
          </p>

        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((item, index) => (
          <ServiceCard key={index} index={index + 1} {...item} />
        ))}
      </div>

    </section>
  );
}
