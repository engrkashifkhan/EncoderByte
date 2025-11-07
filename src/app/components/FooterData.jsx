"use client";

import Footer from "./Footer";
import { Facebook, Linkedin, Github, Twitter, Phone, Mail, Globe } from "lucide-react";

export default function Page() {
  return (
    <Footer
      logo="/logo.png"

      description="Encoder Bytes is on a mission to provide the highest level of quality software products and services across the globe."

      socials={[
        { icon: Facebook, href: "#" },
        { icon: Linkedin, href: "#" },
        { icon: Github, href: "#" },
        { icon: Twitter, href: "#" },
      ]}

      exploreLinks={[
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "How Do We Work", href: "/how-we-work" },
        { label: "Blog", href: "/blog" },
        { label: "Career", href: "/career" },
        { label: "Portfolio", href: "/portfolio" },
      ]}

      contacts={[
        { icon: Phone, text: "+92 333 9921388" },
        { icon: Mail, text: "info@encoderbytes.com" },
        { icon: Globe, text: "www.encoderbytes.com" },
      ]}

      address="EncoderBytes, IT Park, PTCL Training Center, Peshawar, KP, Pakistan"

      mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.874923703307!2d71.485148!3d34.015043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa56712e6f7e5%3A0xd2074b1a5a1a6c89!2sPTCL%20Training%20Center%2C%20Peshawar!5e0!3m2!1sen!2s!4v1710001122334"

      copyRightText="© EncoderBytes 2025 | All Rights Reserved"
    />
  );
}
