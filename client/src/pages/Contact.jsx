import { useState } from "react";
import {FiLinkedin} from "react-icons/fi"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setStatus("Thanks! We will get back to you soon.");

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

    } catch (error) {
      setStatus(error.message || "Something went wrong.");
    }
  };

  return (
    <section className="min-h-screen px-6 pb-32 pt-40">

      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

        <div>
          <p className="text-sm uppercase theme-color tracking-[0.3em] text-blue-400">
            Contact Us
          </p>

          <h1 className="mt-5 text-5xl font-bold sm:text-7xl">
            Let's build
            <span className="gradient-text">
              {" "}something great.
            </span>
          </h1>

          <div className="mt-12 space-y-5 text-gray-400">
            <p>
              📞 +91 81216 36436
            </p>

            <p>
              ✉️ regulsoftechsolution@gmail.com
            </p>

            <a
              href="https://www.linkedin.com/in/regul-softechsolution-private-limited-800495300"
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-blue-400  flex"
            >
              <FiLinkedin className="mt-0.5"/><span  className="ml-2">LinkedIn</span>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass rounded-3xl p-8"
        >

          {[
            ["name", "Name"],
            ["email", "Email"],
            ["phone", "Phone"],
          ].map(([name, placeholder]) => (
            <input
              key={name}
              name={name}
              value={form[name]}
              onChange={handleChange}
              placeholder={placeholder}
              required
              className="mb-4 w-full theme-input opacity-60 rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-blue-500"
            />
          ))}

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="mb-4 w-full opacity-60 theme-input rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-gray-400 outline-none focus:border-blue-500"
          >
            <option value="">Select Service</option>
            <option>Web Development</option>
            <option>Mobile App Development</option>
            <option>AI Solutions</option>
            <option>UI/UX Design</option>
            <option>Custom Software</option>
          </select>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project"
            rows="6"
            required
            className="mb-5 w-full theme-input opacity-60 rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none focus:border-blue-500"
          />

          <button
            className="w-full btn-theme rounded-xl bg-blue-600 py-4 font-semibold transition"
          >
            Send Message
          </button>

          {status && (
            <p className="mt-5 text-center text-sm text-blue-400">
              {status}
            </p>
          )}

        </form>

      </div>
    </section>
  );
}