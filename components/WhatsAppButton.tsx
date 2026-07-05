"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "918780595775"; // Replace with your actual WhatsApp number

  const message = encodeURIComponent(
    "Hi DecorFlow! I'm interested in your wedding decoration services."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 group">

      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-lg">
        Chat with us
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-4xl shadow-2xl hover:scale-110 hover:bg-green-600 transition-all duration-300 animate-bounce"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}