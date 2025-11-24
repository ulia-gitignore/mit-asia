import React from "react";
import "./WhatsappButton.css";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/77001090923"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/whatsapp.png"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
}
