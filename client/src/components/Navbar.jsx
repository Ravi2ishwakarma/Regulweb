import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import whiteLogo from "../assets/Logo1.png";
import blackLogo from "../assets/Logo.png";
import black from "../assets/black.png";
import white from "../assets/white.png";

import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiSun,
  FiMoon,
  FiCheck,
  FiChevronDown,
} from "react-icons/fi";

import { useTheme } from "../context/ThemeContext";


const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Careers",
    path: "/careers",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const colors = [
  {
    name: "blue",
    label: "Electric Blue",
    value: "#2563EB",
  },
  {
    name: "purple",
    label: "Purple",
    value: "#9333EA",
  },
  {
    name: "cyan",
    label: "Cyan",
    value: "#0891B2",
  },
  {
    name: "green",
    label: "Green",
    value: "#16A34A",
  },
  {
    name: "orange",
    label: "Orange",
    value: "#EA580C",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showThemes, setShowThemes] = useState(false);
  const { theme } = useTheme();

  const {
    mode,
    color,
    setColor,
    toggleMode,
  } = useTheme();

  const closeMenu = () => {
    setIsOpen(false);
    setShowThemes(false);
  };

  const handleColorChange = (colorName) => {
    setColor(colorName);
    setShowThemes(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)]/80 backdrop-blur-xl">

      <nav className="mx-auto flex h-20 w-8xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* LOGO */}

        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >

          {/* Replace this R with your actual REGUL logo image if available */}

          {/* <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)] font-bold text-white shadow-lg shadow-[var(--accent)]/20">
            <img src="Public/Logo.png" className="" alt="R" />
          </div> */}
          {/* 
           */}
          <Link to="/" className="flex items-center">
            <img
              src={ mode === "dark" ?  white: black}
              alt="REGUL"
              className="hidden fixed left-20 h-12 min-[1025px]:block w-auto"
            />

            <img
              src={ mode === "dark" ? whiteLogo: blackLogo}
              alt="REGUL"
              className="block h-12 min-[1025px]:hidden  w-auto"
            />
          </Link>{/* <div className="hidden  sm:block">
            <span className="text-lg font-bold tracking-[0.2em] text-[var(--text-primary)]">
              REGUL
            </span>

            <p className="text-[9px] tracking-[0.2em] text-[var(--text-secondary)]">
              SOFTECH SOLUTION
            </p>
          </div> */}

        </Link>


        {/* DESKTOP NAVIGATION */}

        <div className="hidden items-center gap-5 lg:flex">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm transition ${isActive
                  ? "text-[var(--text-primary)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--accent)]" />
                  )}
                </>
              )}
            </NavLink>
          ))}

        </div>


        {/* DESKTOP ACTIONS */}

        <div className="hidden items-center gap-4 lg:flex">

          {/* THEME COLOR SELECTOR */}

          <div className="relative">

            <button
              onClick={() => setShowThemes(!showThemes)}
              className="flex h-10 items-center gap-3 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 text-[var(--text-primary)] transition hover:scale-105"
              aria-label="Choose color theme"
            >

              <span
                className="h-4 w-4 rounded-full"
                style={{
                  backgroundColor:
                    colors.find(
                      (item) => item.name === color
                    )?.value,
                }}
              />

              <FiChevronDown
                className={`transition ${showThemes ? "rotate-180" : ""
                  }`}
              />

            </button>


            {showThemes && (
              <div className="absolute right-0 top-14 w-52 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3 shadow-2xl">

                <p className="mb-3 px-2 text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                  Accent Color
                </p>

                <div className="space-y-1">

                  {colors.map((themeColor) => (
                    <button
                      key={themeColor.name}
                      onClick={() =>
                        handleColorChange(
                          themeColor.name
                        )
                      }
                      className="flex w-full items-center justify-between  rounded-xl px-3 py-2 text-sm text-[var(--text-primary)] transition hover:bg-[var(--accent)]/10"
                    >

                      <span className="flex items-center gap-3">

                        <span
                          className="h-5 w-5 rounded-full"
                          style={{
                            backgroundColor:
                              themeColor.value,
                          }}
                        />

                        {themeColor.label}

                      </span>

                      {color === themeColor.name && (
                        <FiCheck className="text-[var(--accent)]" />
                      )}

                    </button>
                  ))}

                </div>

              </div>
            )}

          </div>


          {/* DARK / LIGHT MODE */}

          <button
            onClick={toggleMode}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] transition hover:scale-110"
            aria-label="Toggle dark and light mode"
          >

            {mode === "dark" ? (
              <FiSun />
            ) : (
              <FiMoon />
            )}

          </button>


          {/* CTA */}

          <Link
            to="/contact"
            className=" flex items-center min-[1025px]:mr-11 rounded-full  bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)] hover:shadow-lg hover:shadow-[var(--accent)]/20"
          ><p>
            Book Consultation
          </p>
            <FiArrowUpRight />
          </Link>

        </div>


        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-xl text-[var(--text-primary)] transition hover:border-[var(--accent)] lg:hidden"
          aria-label="Toggle navigation menu"
        >

          {isOpen ? <FiX /> : <FiMenu />}

        </button>

      </nav>


      {/* MOBILE MENU */}

      <div
        className={`overflow-hidden border-t border-[var(--border-color)] bg-[var(--bg-primary)]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${isOpen
          ? "max-h-[700px] opacity-100"
          : "max-h-0 opacity-0"
          }`}
      >

        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">


          {/* MOBILE NAV LINKS */}

          <div className="flex flex-col gap-2">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base transition ${isActive
                    ? "bg-[var(--accent)] text-white"
                    : "text-[var(--text-secondary)] hover:bg-[var(--accent)]/10 hover:text-[var(--text-primary)]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          </div>


          {/* MOBILE THEME CONTROLS */}

          <div className="mt-6 border-t border-[var(--border-color)] pt-6">

            <p className="mb-4 text-sm font-medium text-[var(--text-secondary)]">
              Customize Theme
            </p>


            {/* MODE TOGGLE */}

            <button
              onClick={toggleMode}
              className="flex w-full items-center justify-between rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-3 text-[var(--text-primary)]"
            >

              <span className="flex items-center gap-3">

                {mode === "dark" ? (
                  <FiSun className="text-[var(--accent)]" />
                ) : (
                  <FiMoon className="text-[var(--accent)]" />
                )}

                {mode === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"}

              </span>

              <span className="text-xs text-[var(--text-secondary)]">
                {mode === "dark"
                  ? "Dark"
                  : "Light"}
              </span>

            </button>


            {/* COLOR OPTIONS */}

            <div className="mt-4 flex flex-wrap gap-3">

              {colors.map((themeColor) => (
                <button
                  key={themeColor.name}
                  onClick={() =>
                    handleColorChange(
                      themeColor.name
                    )
                  }
                  className={`relative flex h-10 w-10 items-center justify-center rounded-full transition hover:scale-110 ${color === themeColor.name
                    ? "ring-2 ring-[var(--text-primary)] ring-offset-2 ring-offset-[var(--bg-primary)]"
                    : ""
                    }`}
                  style={{
                    backgroundColor:
                      themeColor.value,
                  }}
                  aria-label={`Use ${themeColor.label} theme`}
                >

                  {color === themeColor.name && (
                    <FiCheck className="text-white" />
                  )}

                </button>
              ))}

            </div>

          </div>


          {/* MOBILE CTA */}

          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-4 font-semibold text-white transition hover:bg-[var(--accent-hover)]"
          >
            Book Consultation
            <FiArrowUpRight />
          </Link>

        </div>

      </div>

    </header>
  );
}