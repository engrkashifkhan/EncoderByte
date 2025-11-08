import Image from "next/image";

export default function ProjectSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">

        {/* LEFT SIDE IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-[550px]">
            <Image
              src="/image_25.png" // Replace your image
              alt="Project Preview"
              width={1000}
              height={700}
              className="w-full h-auto object-contain rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="w-full lg:w-1/2  text-center lg:text-left">
          <h3 className="text-[28px] sm:text-[34px] font-semibold text-gray-900">
            <span className="border-b-4 border-blue-500 ">Induz.</span>
          </h3>

          <h2 className="text-2xl sm:text-2xl font-bold text-gray-900 leading-snug">
            AN INDUSTRY'S EMPLOYEES <br />
            <span className="text-blue-600">MANAGEMENT APPLICATION.</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed pt-3">
            We have delivered numerous web, mobile, UI/UX, and AI projects recently,
            and the most recent project we have completed is detailed below.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-1">
            <button className="bg-blue-400 hover:bg-transparent border hover:text-blue-400 text-white px-6 py-7 rounded-md font-medium transition">
              READ CASE STUDY
            </button>

            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-md font-medium transition">
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
