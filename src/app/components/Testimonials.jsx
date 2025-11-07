"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const people = [
  {
    img: "/image_26.png",
    name: "Markus Stripf",
    profession: "UI/UX Designer",
    description:
      "I can highly recommend EncoderBytes as an app development company. They are great to work with, highly responsive, and knowledgeable when it comes to building custom apps on flutter/firebase. Would use them again for future projects without thinking twice",
  },
  {
    img: "/image_26.png",
    name: "Sarah Ahmed",
    profession: "Frontend Developer",
    description:
      "I love how everything works smoothly. Highly intuitive UI.I can highly recommend EncoderBytes as an app development company. They are great to work with, highly responsive, and knowledgeable when it comes to building custom apps on flutter/firebase.",
  },
  {
    img: "/image_26.png",
    name: "Michael Smith",
    profession: "Product Manager",
    description:
      "Outstanding work and great attention to detail. I can highly recommend EncoderBytes as an app development company. They are great to work with, highly responsive, and knowledgeable when it comes to building custom apps on flutter/firebase.",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="w-full py-12 px-4 md:px-16 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        What Our Clients Say
      </h2>

      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          effect="fade"
          style={{ paddingBottom: 20 }}
        >
          {people.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center text-center">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />

                <p className="text-gray-700 mb-4">"{p.description}"</p>

                <h3 className="text-lg text-blue-600 font-semibold">{p.name}</h3>

                <span className="text-sm">{p.profession}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
