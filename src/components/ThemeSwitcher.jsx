import {
  FiMoon,
  FiSun,
  FiCheck,
} from "react-icons/fi";

import { useTheme } from "../context/ThemeContext";

const colors = [
  {
    name: "blue",
    value: "#2563eb",
  },
  {
    name: "purple",
    value: "#9333ea",
  },
  {
    name: "cyan",
    value: "#0891b2",
  },
  {
    name: "green",
    value: "#16a34a",
  },
  {
    name: "orange",
    value: "#ea580c",
  },
];

export default function ThemeSwitcher() {
  const {
    mode,
    color,
    setColor,
    toggleMode,
  } = useTheme();

  return (
    <div className="relative">

      {/* THEME BUTTON */}

      <button
        onClick={toggleMode}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] transition hover:scale-110"
        aria-label="Toggle theme"
      >
        {mode === "dark" ? (
          <FiSun />
        ) : (
          <FiMoon />
        )}
      </button>

      {/* COLOR OPTIONS */}

      <div className="mt-4 flex items-center gap-2">

        {colors.map((themeColor) => (
          <button
            key={themeColor.name}
            onClick={() =>
              setColor(themeColor.name)
            }
            className="relative h-6 w-6 rounded-full transition hover:scale-125"
            style={{
              backgroundColor: themeColor.value,
            }}
            aria-label={`Use ${themeColor.name} theme`}
          >
            {color === themeColor.name && (
              <FiCheck
                className="absolute inset-0 m-auto text-white"
                size={14}
              />
            )}
          </button>
        ))}

      </div>

    </div>
  );
}