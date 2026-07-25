import { motion } from "framer-motion";
import whiteLogo from "../assets/Logo1.png";
import blackLogo from "../assets/Logo.png";
import { useTheme } from "../context/ThemeContext";

import {
  FiArrowRight,
  FiCode,
  FiCpu,
  FiSmartphone,
  FiLayers,
} from "react-icons/fi";

const services = [
  {
    icon: FiCode,
    title: "Web Development",
    text: "High-performance web applications built for scale.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Applications",
    text: "Modern mobile experiences for the next generation.",
  },
  {
    icon: FiCpu,
    title: "AI Solutions",
    text: "AI-powered software that solves real business problems.",
  },
  {
    icon: FiLayers,
    title: "Product Development",
    text: "From idea to scalable digital product.",
  },
];

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { mode } = useTheme();

  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-6 pt-32">

        <div className="absolute inset-0 -z-10 grid-bg opacity-40" />

        <div className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[150px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <Reveal>
            <div className="mb-6 theme-color inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              Building the future of digital innovation
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              Engineering
              <br />
              <span className="gradient-text">
                Digital Innovation
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              We build scalable web applications, mobile apps,
              AI-powered software, and next-generation digital products.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#services"
                className="group btn-theme flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500"
              >
                Get Started
                <FiArrowRight className="transition group-hover:translate-x-1" />
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white/10 px-7 py-4 font-semibold transition hover:border-white/30"
              >
                Contact Us
              </a>

            </div>
          </Reveal>

          {/* 3D VISUAL */}
          <Reveal delay={0.2}>
            <div className="relative flex min-h-[500px] items-center justify-center">

              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 4, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex ml-40  h-72 w-72 items-center justify-center rounded-[40px] border border-blue-400/30 bg-gradient-to-br from-blue-400/30 to-purple-400/10 shadow-[0_0_100px_rgba(37,99,235,0.35)] backdrop-blur-xl"
              >
                <div className="text-2xl rounded-full text-white/90 ">
                  <img src={ mode === "dark" ? whiteLogo : blackLogo} alt="logo" className="theme-logo rounded-full opacity-50" />
                </div>

                <div className="absolute -right-16 top-10 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <FiCode className="text-3xl theme-color text-blue-400" />
                </div>

                <div className="absolute -bottom-10 -left-12 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <FiCpu className="text-3xl theme-color text-blue-400" />
                </div>
              </motion.div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-15">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="theme-color text-sm uppercase tracking-[0.3em] text-blue-400">
              Who We Are
            </p>

            <h2 className="max-w-4xl text-4xl font-bold sm:text-6xl">
              We are building technology
              <span className="text-gray-500">
                {" "}for what comes next.
              </span>
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
              Regul Softech Solution is an ambitious technology startup
              focused on building innovative products and delivering
              high-quality software solutions for modern businesses.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-6 md:grid-cols-3">

            {[
              ["Mission", "Our mission is to design and develop secure, scalable, and user-centric software solutions that solve real-world problems. We strive to deliver exceptional digital experiences while fostering innovation, continuous learning, and long-term partnerships with our clients."],
              ["Vision", "To become a globally trusted technology company that transforms ideas into innovative digital products, empowering businesses and individuals through cutting-edge software solutions."],
              ["Values", "We value innovation, integrity, excellence, collaboration, and continuous learning to build trusted solutions and lasting customer relationships."],
             ].map(([title, text], index) => (
              <Reveal delay={index * 0.1} key={title}>
                <div className="glass rounded-3xl h-80 p-8 transition hover:-translate-y-2 hover:border-blue-500/40">
                  <h3 className="text-2xl font-semibold">
                    {title}
                  </h3>

                  <p className="mt-5 leading-7 text-gray-400">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white/[0.02] px-6 py-15">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-sm uppercase theme-color tracking-[0.3em] text-blue-400">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-6xl">
              Technology that moves
              <span className="text-gray-500">
                {" "}business forward.
              </span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="group glass h-full rounded-3xl p-7"
                  >
                    <Icon className="text-4xl theme-color text-blue-500 transition group-hover:scale-110" />

                    <h3 className="mt-8 text-xl font-semibold">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-400">
                      {service.text}
                    </p>

                    <div className="mt-8 text-blue-400 theme-color">
                      →
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}

          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 py-15">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] theme-color text-blue-400">
              Our Products
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-6xl">
              The future is
              <span className="gradient-text"> under construction.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-2  lg:grid-cols-3">

            {[
              "AI Product",
              "HR Management System",
              "CRM Platform",
              "School ERP",
              "Inventory Management",
              "Project Management Tool",
            ].map((product, index) => (
              <Reveal key={product} delay={index * 0.08}>
                <div className="glass group rounded-3xl p-8 transition hover:border-blue-500/40">

                  <span className="rounded-full bg-blue-500/10 px-3 theme-color py-1 text-xs text-blue-400">
                    COMING SOON
                  </span>

                  <h3 className="mt-8 text-2xl font-semibold" >
                    {product}
                  </h3>

                  <div className="mt-10 h-1 w-0 bg-blue-500 transition-all product-orb duration-500 group-hover:w-full" />

                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="px-6 py-15">
        <div className="mx-auto max-w-4xl text-center">

          <Reveal>
            <p className="text-6xl">“</p>

            <h2 className="mt-4 text-4xl font-bold sm:text-6xl">
              Building Success
              <span className="gradient-text">
                {" "}Stories Together
              </span>
            </h2>

            <p className="mt-8 text-gray-400">
              Every successful product starts with a great partnership. We're excited to work with visionary businesses and turn innovative ideas into impactful digital solutions. Your success story could be the first featured here.
            </p>
          </Reveal>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-15">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-blue-500/20 bg-gradient-to-br from-blue-600/20 to-transparent p-10 text-center sm:p-20">

          <h2 className="text-4xl font-bold sm:text-6xl">
            Have an idea?
            <br />
            Let's build it.
          </h2>

          <a
            href="/contact"
            className="mt-10 btn-theme inline-flex rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-blue-500 hover:text-white"
          >
            Book a Consultation
          </a>

        </div>
      </section>

    </div>
  );
}