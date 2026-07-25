import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiUpload,
  FiUsers,
  FiCode,
  FiTrendingUp,
  FiHeart,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiCode,
    title: "Build Real Products",
    text: "Work on meaningful software and future-focused digital products.",
  },
  {
    icon: FiTrendingUp,
    title: "Grow With Us",
    text: "Learn modern technologies and grow in a fast-moving startup environment.",
  },
  {
    icon: FiUsers,
    title: "Collaborative Culture",
    text: "Work with people who believe in sharing ideas and building together.",
  },
  {
    icon: FiHeart,
    title: "Make an Impact",
    text: "Your ideas can directly influence the products and company we build.",
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

export default function Careers() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
    resume: null,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/career`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Application failed");
      }

      setStatus("Application submitted successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        coverLetter: "",
        resume: null,
      });
    } catch (error) {
      setStatus(error.message || "Something went wrong.");
    }
  };

  return (
    <main className="overflow-hidden">

      {/* HERO */}
      <section className="relative px-6 pb-24 pt-40">
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm theme-color uppercase tracking-[0.3em] text-blue-400">
              Careers at REGUL
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight sm:text-7xl lg:text-8xl">
              Build the future
              <br />
              <span className="gradient-text">
                with us.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              We are building an ambitious technology company from the
              ground up. Join us and become part of the journey.
            </p>

            <a
              href="#apply"
              className="mt-10 btn-theme inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500"
            >
              Join Our Team
              <FiArrowUpRight />
            </a>
          </Reveal>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="bg-white/[0.02] px-6 py-15">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-sm uppercase theme-color tracking-[0.3em] text-blue-400">
              Why REGUL?
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold sm:text-6xl">
              Do meaningful work.
              <br />
              <span className="text-gray-500">
                Grow with the journey.
              </span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <Reveal key={benefit.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="glass h-full rounded-3xl p-7"
                  >
                    <Icon className="text-4xl theme-color text-blue-500" />

                    <h3 className="mt-8 text-xl font-semibold">
                      {benefit.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-400">
                      {benefit.text}
                    </p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section className="px-6 py-15">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-sm theme-color uppercase tracking-[0.3em] text-blue-400">
              Current Openings
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-6xl">
              Find your place
              <span className="text-gray-500">
                {" "}at REGUL.
              </span>
            </h2>
          </Reveal>

          <div className="mt-16 space-y-4">

            {[
              {
                title: "Frontend Developer",
                type: "Full Time",
                tech: "React • JavaScript • Tailwind CSS",
              },
              {
                title: "Backend Developer",
                type: "Full Time",
                tech: "Node.js • Express • MongoDB",
              },
              {
                title: "UI/UX Designer",
                type: "Full Time",
                tech: "Figma • Product Design • Prototyping",
              },
            ].map((job, index) => (
              <Reveal key={job.title} delay={index * 0.1}>
                <div className="group flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-500/40 md:flex-row md:items-center">

                  <div>
                    <h3 className="text-xl font-semibold">
                      {job.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      {job.tech}
                    </p>
                  </div>

                  <div className="flex items-center gap-5">
                    <span className="rounded-full theme-color bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                      {job.type}
                    </span>

                    <a
                      href="#apply"
                      className="flex items-center gap-2 text-gray-400 transition"
                    >
                      Apply
                      <FiArrowUpRight />
                    </a>
                  </div>

                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section
        id="apply"
        className="bg-white/[0.02] px-6 py-15"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

          <Reveal>
            <p className="text-sm uppercase theme-color tracking-[0.3em] text-blue-400">
              Apply Now
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-6xl">
              Don't see your
              <br />
              <span className="gradient-text">
                perfect role?
              </span>
            </h2>

            <p className="mt-7 max-w-lg leading-8 text-gray-400">
              We are always interested in meeting talented people.
              Send us your application and tell us how you can contribute
              to the REGUL journey.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8"
            >

              <div className="grid gap-4 md:grid-cols-2">

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="rounded-xl opacity-60 theme-input border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-blue-500"
                />

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="rounded-xl opacity-60 theme-input border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-blue-500"
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="rounded-xl border opacity-60 theme-input border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-blue-500"
                />

                <select
                  name="position"
                  value={form.position}
                  onChange={handleChange}
                  required
                  className="rounded-xl border opacity-60 theme-input border-white/10 bg-white/5 px-5 py-4 text-gray-400 outline-none focus:border-blue-500"
                >
                  <option value="">Select Position</option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>Full Stack Developer</option>
                  <option>UI/UX Designer</option>
                  <option>AI Developer</option>
                  <option>Other</option>
                </select>

              </div>

              <input
                name="experience"
                value={form.experience}
                onChange={handleChange}
                placeholder="Experience (e.g. Fresher, 1 year)"
                required
                className="mt-4 w-full opacity-60 theme-input rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition"
              />

              <label className="mt-4 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-white/20 bg-white/5 px-5 py-4 text-gray-400 transition theme-input opacity-60">
                <FiUpload className="text-xl theme-color text-blue-400 " />

                <span>
                  {form.resume
                    ? form.resume.name
                    : "Upload Resume (PDF/DOC)"}
                </span>

                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                  className="hidden"
                />
              </label>

              <textarea
                name="coverLetter"
                value={form.coverLetter}
                onChange={handleChange}
                placeholder="Tell us about yourself"
                rows="6"
                required
                className="mt-4 w-full theme-input opacity-60 rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
              />

              <button
                type="submit"
                className="mt-5 btn-theme flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-semibold transition"
              >
                Submit Application
                <FiArrowUpRight />
              </button>

              {status && (
                <p className="mt-5 text-center text-sm text-blue-400">
                  {status}
                </p>
              )}

            </form>
          </Reveal>

        </div>
      </section>

    </main>
  );
}