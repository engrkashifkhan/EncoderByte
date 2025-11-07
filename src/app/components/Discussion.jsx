"use client";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[50vh] bg-cover bg-center bg-no-repeat object-fit flex items-center px-6 md:px-16"
      style={{ backgroundImage: "url('/Rectangle2.png')" }} // put your image in /public
    >
      {/* Overlay (optional) */}
      <div className="absolute inset-0 w-full h-full object-cover"></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center w-full justify-around text-white gap-6">
        
        {/* Left Text Centered */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">
            Your Heading Goes Here
          </h1>
          <p className="mt-4 text-md opacity-90">
            Add short description here. This section is centered but slightly aligned left on large screens.
          </p>
        </div>

        {/* Right Button */}
        <div>
          <button className="w-40 px-6 py-3 bg-blue-400 text-white font-semibold rounded-md hover:bg-transparent hover:border transition">
            Lets Discuss
          </button>
        </div>

      </div>
    </section>
  );
}
