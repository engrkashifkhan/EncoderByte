import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/hero-bg.jpg.png')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto w-full px-6 md:pl-18 lg:pl-28">
        <div className="text-center  md:text-left max-w-xl text-white">
          <h1 className="text-3xl md:text-2xl  font-bold leading-tight drop-shadow-lg">
            a bespoke
          </h1>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight drop-shadow-lg whitespace-nowrap">
            SOFTWARE DEVELOPMENT
          </h1>

          <h1 className="text-3xl text-blue-300 md:text-5xl font-semibold leading-tight drop-shadow-lg">
            COMPANY
          </h1>

          <p className="mt-4 text-lg opacity-90 drop-shadow-md">
            Software Development That Ensures Growth Of Your Business.
          </p>

          {/* Button fix */}
          <button className="mt-6 bg-blue-300 hover:bg-transparent hover:border transition px-7 py-3 rounded-md font-semibold text-white flex items-center gap-2 mx-auto md:mx-0">
            Get Started
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
