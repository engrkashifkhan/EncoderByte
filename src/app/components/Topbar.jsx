import React from 'react'
import { Phone, Mail,  } from "lucide-react";

function Topbar() {
  return (
      <div className="hidden lg:flex bg-blue-400 text-white text-sm py-1 px-22 justify-between items-center">
        <div className="flex items-center gap-1">
          <span>IT Park, PTCL Training Center, Board Bazar, Peshawar, KP, Pakistan</span>
        </div>

        <div className="hidden sm:flex items-center gap-6">
          <div className="flex items-center gap-1">
            <Phone size={16} />
            <a href="tel:+92 333 9921398" className="hover:text-blue-600">
              +92 333 9921398
            </a>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={16} />
            <a href="mailto:info@encoderbytes.com" className="hover:text-blue-600">
              info@encoderbytes.com
            </a>
          </div>
        </div>
      </div>
   
  )
}

export default Topbar
