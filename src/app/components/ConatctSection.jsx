"use client";

export default function ContactSection() {
  return (
    <section className="w-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-[60%_40%] min-h-[600px] md:px-7 px-4 ">
      
      {/* LEFT PANEL */}
      <div className="bg-[#3f3f3f] text-white px-8 md:px-16 py-14 flex flex-col justify-start">
        
        {/* USERNAME */}
        <div className="mb-10">
          <label className="block text-[#c5ced7] text-lg mb-2">Username</label>
          <input
            type="text"
            className="w-full bg-transparent border-b border-[#c5ced7] py-2 focus:outline-none"
          />
        </div>

        {/* EMAIL + PHONE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
          <div>
            <label className="block text-[#c5ced7] text-lg mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-[#c5ced7] py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[#c5ced7] text-lg mb-2">Phone</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-[#c5ced7] py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* MESSAGE */}
        <div className="mb-10">
          <label className="block text-[#c5ced7] text-lg mb-3">Message</label>
          <textarea
            rows="8"
            className="w-full bg-transparent border border-[#c5ced7] p-4 resize-none focus:outline-none"
          ></textarea>
        </div>

        {/* BUTTON */}
        <button className="bg-[#4a83d7] hover:bg-[#3b6db5] transition px-10 py-3 rounded-md text-lg font-medium w-fit">
          Send Message
        </button>

      </div>

      {/* RIGHT PANEL */}
      <div
        className="relative bg-cover bg-center flex items-center p-10 md:p-16"
        style={{ backgroundImage: "url('/Rectangle-17.png')" }}
      >
        <div className="absolute inset-0 bg-[#3b6db5]/30"></div>

        <div className="relative text-white max-w-xl">
          <h2 className="text-3xl font-bold leading-tight">HAVE A PROJECT?</h2>
          <h2 className="text-3xl font-bold mt-2">GET IN TOUCH.</h2>

          <p className="text-2xl font-semibold mt-4">THINK WE DO NEXT.</p>

          <ul className="mt-8 space-y-2 text-lg">
            <li>• Our team contacts you within one business day</li>
            <li>• We engage in an initial discussion to understand your requirements</li>
            <li>• Analysts & developers assess scope and propose a mutual way forward</li>
            <li>• All information exchange is protected via NDA</li>
          </ul>
        </div>
      </div>

    </section>
  );
}
