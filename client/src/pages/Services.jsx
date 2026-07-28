import { motion } from "framer-motion";
import {
  FiCode,
  FiSmartphone,
  FiCpu,
  FiLayers,
  FiCloud,
  FiDatabase,
  FiArrowUpRight,
} from "react-icons/fi";

const services = [
  {
    icon: FiCode,
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites and web applications designed for speed, scalability, and exceptional user experiences.",
    technologies: "React • Vite • Node.js • Express",
  },
  {
    icon: FiSmartphone,
    number: "02",
    title: "Mobile App Development",
    description:
      "Modern mobile experiences that help businesses connect with users across devices and platforms.",
    technologies: "React Native • APIs • Cloud Services",
  },
  {
    icon: FiCpu,
    number: "03",
    title: "AI Solutions",
    description:
      "AI-powered applications and intelligent features that help businesses automate processes and make better decisions.",
    technologies: "AI APIs • Automation • Intelligent Systems",
  },
  {
    icon: FiLayers,
    number: "04",
    title: "UI/UX Design",
    description:
      "Clean, intuitive, and modern digital experiences designed around real users and business goals.",
    technologies: "Research • Wireframes • Prototyping",
  },
  {
    icon: FiCloud,
    number: "05",
    title: "Cloud Solutions",
    description:
      "Reliable and scalable cloud infrastructure that helps your applications perform securely at scale.",
    technologies: "AWS • Docker • Deployment",
  },
  {
    icon: FiDatabase,
    number: "06",
    title: "Custom Software Development",
    description:
      "Tailored software solutions built specifically around your unique business requirements and workflows.",
    technologies: "Node.js • MongoDB • REST APIs",
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

export default function Services() {
  return (
    <main className="overflow-hidden">

      {/* HERO */}
      <section className="relative px-6 pb-24 pt-40">
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-sm uppercase theme-color tracking-[0.3em] text-blue-400">
              Our Services
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight sm:text-7xl lg:text-8xl">
              We turn
              <br />
              <span className="gradient-text">
                ideas into software.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              From concept to launch, we design and develop modern
              digital solutions that help businesses grow, operate,
              and innovate.
            </p>
          </Reveal>

        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="px-6 py-15">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 0.08}>

                  <motion.div
                    whileHover={{ y: -12 }}
                    className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-blue-500/40"
                  >

                    {/* Glow */}
                    <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-600/10 blur-3xl transition group-hover:bg-blue-600/20" />

                    <div className="relative">

                      <div className="flex items-start justify-between">

                        <div className="flex h-14 w-14 items-center theme-color justify-center rounded-2xl bg-blue-600/10 text-3xl text-blue-500">
                          <Icon />
                        </div>

                        <span className="text-sm text-gray-600">
                          {service.number}
                        </span>

                      </div>

                      <h2 className="mt-10 text-2xl font-semibold">
                        {service.title}
                      </h2>

                      <p className="mt-5 leading-7 text-gray-400">
                        {service.description}
                      </p>

                      <div className="mt-8 border-t theme-color border-white/10 pt-5 text-sm text-blue-400">
                        {service.technologies}
                      </div>

                      <div className="mt-8 flex items-center gap-2 text-sm text-gray-400 transition group-hover:text-white">
                        Learn more
                        <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>

                    </div>

                  </motion.div>

                </Reveal>
              );
            })}

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white/[0.02] px-6 py-15">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-sm theme-color uppercase tracking-[0.3em] text-blue-400">
              Our Process
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold sm:text-6xl">
              Simple process.
              <br />
              <span className="text-gray-500">
                Powerful results.
              </span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-4">

            {[
              ["01", "Discover", "Understand the problem, goals, and vision."],
              ["02", "Design", "Create a clear and intuitive user experience."],
              ["03", "Build", "Develop scalable and reliable technology."],
              ["04", "Launch", "Deploy, optimize, and continue improving."],
            ].map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.1}>

                <div className="relative border-l border-white/10 pl-6">

                  <span className="text-sm theme-color text-blue-500">
                    {number}
                  </span>

                  <h3 className="mt-5 text-2xl font-semibold">
                    {title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {text}
                  </p>

                </div>

              </Reveal>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-15">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-blue-500/20 bg-gradient-to-br from-blue-600/20 to-transparent p-10 text-center sm:p-20">

          <h2 className="text-4xl font-bold sm:text-6xl">
            Have a project
            <br />
            <span className="gradient-text">
              in mind?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-gray-400">
            Let's discuss your idea and explore how we can turn it
            into a powerful digital solution.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center btn-theme gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-blue-500 hover:text-white"
          >
            Start a Conversation
            <FiArrowUpRight />
          </a>

        </div>
      </section>

    </main>
  );
}