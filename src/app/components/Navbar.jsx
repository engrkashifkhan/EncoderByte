"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ navLinks = [], services = [] }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full z-50 sticky top-0">
      <nav className="relative lg:px-22 md:px-20 px-4 py-4 flex justify-between items-center bg-black text-white border-b shadow-sm">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={170}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 font-medium">
          {navLinks.map((item, index) =>
            item.dropdown ? (
              <li key={index}>
                <button
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="flex items-center gap-1 hover:text-blue-600"
                >
                  {item.label} <ChevronDown size={16} />
                </button>
              </li>
            ) : (
              <li key={index}>
                <Link href={item.href} className="hover:text-blue-600">
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Contact Btn Desktop */}
        <Link
          href="/contact"
          className="hidden lg:flex hover:bg-blue-300 text-white px-3 py-1 rounded-md bg-transparent border hover:border transition"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU WITH CLICK OUTSIDE CLOSE */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="fixed top-[72px] left-0 w-full bg-white shadow-lg lg:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-4 py-4 px-6 bg-gray-700 font-medium text-white">

              {navLinks.map((item, index) =>
                item.dropdown ? (
                  <li key={index}>
                    <button
                      onClick={() => setOpenDropdown(!openDropdown)}
                      className="flex items-center gap-1"
                    >
                      {item.label} <ChevronDown size={16} />
                    </button>

                    {openDropdown && (
                      <div className="ml-4 mt-2 space-y-4 p-4 bg-gray-900 rounded-md">
                        <h4 className="font-bold text-lg text-blue-400 text-center">
                          SERVICES WE PROVIDE
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {services.map((service, i) => (
                            <div key={i} className="text-white">
                              <h5 className="font-semibold">{service.title}</h5>
                              <p className="text-sm text-gray-300">{service.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={index}>
                    <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                )
              )}

              <Link
                href="/contact"
                className="bg-blue-600 text-white text-center py-2 rounded-md mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

            </ul>
          </div>
        </div>
      )}

      {/* Desktop Services Dropdown */}
      {openDropdown && (
        <div className="hidden lg:flex absolute left-0 w-full bg-black/95 backdrop-blur-sm border-t border-gray-700 shadow-xl py-8 text-white z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-blue-400">
              SERVICES WE PROVIDE
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div key={index} className="space-y-2 sm:space-y-3 px-4">
                  <h4 className="font-semibold text-base sm:text-lg text-white">
                    {service.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
