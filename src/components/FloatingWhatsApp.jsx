import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/+2349070868414"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      title="Chat with me on WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}

export default FloatingWhatsApp;
