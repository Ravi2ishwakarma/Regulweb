import { motion } from "framer-motion";
import {
  FiTarget,
  FiEye,
  FiHeart,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const values = [
  {
    icon: FiTarget,
    title: "Our Mission",
    text: "To make powerful and innovative technology accessible to businesses, startups, and individuals.",
  },
  {
    icon: FiEye,
    title: "Our Vision",
    text: "To become a globally recognized product-first technology company building solutions that shape the future.",
  },
  {
    icon: FiHeart,
    title: "Our Values",
    text: "Innovation, transparency, quality, ownership, continuous learning, and customer success.",
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

export default function About() {
  return (
    <main className="overflow-hidden">

      {/* HERO */}
      <section className="relative px-6 pb-24 pt-40">
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm theme-color uppercase tracking-[0.3em] text-blue-400">
              About REGUL
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight sm:text-7xl lg:text-8xl">
              We are building
              <br />
              <span className="gradient-text">
                what comes next.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
              Regul Softech Solution Private Limited is an ambitious
              technology startup focused on software development,
              product development, AI solutions, and digital innovation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 py-15">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

          <Reveal>
            <div className="relative min-h-[400px] overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-blue-600/20 to-transparent">

              <div className="absolute left-1/2 top-1/2 flex h-52 w-52 opacity-50 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-500/30 bg-blue-600/10 text-8xl font-black shadow-[0_0_100px_rgba(37,99,235,0.3)]">
                Regul
              </div>

              <div className="absolute left-10 top-10 h-3 w-3 rounded-full bg-blue-500" />
              <div className="absolute right-20 top-20 h-2 w-2 rounded-full bg-white" />
              <div className="absolute bottom-20 left-20 h-2 w-2 rounded-full bg-blue-400" />

            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex h-full flex-col justify-center">

              <p className="text-sm uppercase tracking-[0.3em] theme-color text-blue-400">
                Our Story
              </p>

              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                From ideas
                <span className="text-gray-500">
                  {" "}to innovation.
                </span>
              </h2>

              <p className="mt-7 leading-8 text-gray-400">
                REGUL was created with a simple belief: technology
                should not only solve today's problems, but also create
                opportunities for tomorrow.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                We are building a product-focused technology company
                while helping businesses turn their ideas into reliable,
                scalable, and modern digital solutions.
              </p>

              <Link
                to="/services"
                className="mt-8 btn-theme inline-flex w-fit items-center gap-3 rounded-full bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
              >
                Explore Our Services
                <FiArrowRight />
              </Link>

            </div>
          </Reveal>

        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="bg-white/[0.02] px-6 py-15">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.3em] theme-color text-blue-400">
                What Drives Us
              </p>

              <h2 className="mt-5 text-4xl font-bold sm:text-6xl">
                Built with
                <span className="gradient-text">
                  {" "}purpose.
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="glass h-full rounded-3xl p-8"
                  >
                    <Icon className="text-4xl theme-color text-blue-500" />

                    <h3 className="mt-8 text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-7 text-gray-400">
                      {item.text}
                    </p>
                  </motion.div>
                </Reveal>
              );
            })}

          </div>
        </div>
      </section>

      {/* WHY REGUL */}
      <section className="px-6 py-15">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] theme-color text-blue-400">
              Why REGUL
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold sm:text-6xl">
              Small enough to care.
              <br />
              <span className="text-gray-500">
                Ambitious enough to build big.
              </span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Modern Architecture",
              "Innovation First",
              "Scalable Solutions",
              "Clean User Experience",
              "Fast Delivery",
              "Long-Term Partnership",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.08}>
                <div className="glass rounded-2xl p-6 transition hover:border-blue-500/40">
                  <div className="mb-5 theme-color text-2xl text-blue-500">
                    0{index + 1}
                  </div>

                  <h3 className="text-xl font-semibold">
                    {item}
                  </h3>
                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}