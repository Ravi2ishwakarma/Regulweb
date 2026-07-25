import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="theme-footer px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">

        <div>
          <h2 className="text-2xl font-bold tracking-wider">
            REGUL
          </h2>

          <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
             Engineering digital innovation through software,
            AI, and next-generation digital products.
          </p> 
        </div>

        <div className="flex justify-center mt-4.5 gap-4 h-10 ">
          <a
            href="mailto:regulsoftechsolution@gmail.com"
            className="rounded-full border theme-hover border-white/10 p-3 text-gray-400 transition hover:border-blue-500 hover:text-blue-400"
          >
            <FiMail/>
          </a>

          <a
            href="tel:+918121636436"
            className="rounded-full border theme-hover border-white/10 p-3 text-gray-400 transition hover:border-blue-500 hover:text-blue-400"
          >
            <FiPhone />
          </a>

          <a
            href="https://www.linkedin.com/in/regul-softechsolution-private-limited-800495300"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border theme-hover border-white/10 p-3 text-gray-400 transition hover:border-blue-500 hover:text-blue-400"
          >
            <FiLinkedin />
          </a>
        </div>

      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t theme-footer pt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Regul Softech Solution Private Limited.
        All rights reserved.
      </div>
    </footer>
  );
}