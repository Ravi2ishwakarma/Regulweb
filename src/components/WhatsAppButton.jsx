import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const message =
    "Hello Regul Softech Solution Team, I would like to know more about your services.";

  const url = `https://wa.me/8121636436?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-xl transition hover:scale-110"
    >
      <FaWhatsapp />
    </a>
  );
}