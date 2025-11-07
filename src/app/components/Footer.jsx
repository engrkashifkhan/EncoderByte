"use client";
import Link from "next/link";

export default function Footer({
  logo,
  description,
  socials = [],
  exploreLinks = [],
  contacts = [],
  address,
  mapSrc,
  copyRightText,
}) {
  return (
    <footer className="bg-[#5D87C0] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Column 1 */}
        <div>
          {logo && <img src={logo} alt="Company Logo" className="w-56 mb-6" />}

          {description && (
            <p className="text-[15px] leading-6">{description}</p>
          )}

          <div className="flex gap-5 mt-6">
            {socials.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link key={index} href={item.href} className="hover:opacity-80">
                  <Icon size={22} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-1 text-[15px] list-disc pl-3">
            {exploreLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-[15px]">
            {contacts.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index} className="flex items-center gap-2 whitespace-nowrap">
                  <Icon size={18} /> {item.text}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Address</h3>

          {address && (
            <p className="text-[15px] leading-6 mb-4">{address}</p>
          )}

          {mapSrc && (
            <div className="w-full h-36 rounded overflow-hidden border border-white/40 shadow-lg">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#3D4956] text-center py-3 text-sm">
        {copyRightText}
      </div>
    </footer>
  );
}
