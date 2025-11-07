"use client";

export default function StatsSection() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-20 px-6 md:px-16"
      style={{ backgroundImage: "url('/Group32.png')" }}
    >
      <div className="w-full h-full">

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 text-center text-white md:divide-x md:divide-white/60">

          <div className="px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">100+</h2>
            <p className="mt-3 text-base sm:text-lg lg:text-xl">Projects Delivered</p>
          </div>

          <div className="px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">300</h2>
            <p className="mt-3 text-base sm:text-lg lg:text-xl">Happy Clients</p>
          </div>

          <div className="px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">01</h2>
            <p className="mt-3 text-base sm:text-lg lg:text-xl">Global Office</p>
          </div>

          <div className="px-4 md:pt-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">04</h2>
            <p className="mt-3 text-base sm:text-lg lg:text-xl">Years In Business</p>
          </div>

          <div className="px-4 md:pt-4 ">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">50</h2>
            <p className="mt-3 text-base sm:text-lg lg:text-xl">Expert Team</p>
          </div>

        </div>

      </div>
    </section>
  );
}
