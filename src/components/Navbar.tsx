import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { AiFillLinkedin } from "react-icons/ai";
//@ts-ignore
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Hamburger from "hamburger-react";
import { useTheme } from "../ThemeContext";

const navLinks = [
  { label: "PORTFOLIO", to: "/" },
  { label: "FILM ESSAYS", to: "/films" },
  { label: "CAREER", to: "/career" },
];

const Navbar = () => {
  const { light, toggle } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Close on scroll
  useEffect(() => {
    const close = () => setIsOpen(false);
    window.addEventListener("scroll", close);
    return () => window.removeEventListener("scroll", close);
  }, []);

  return (
    <>
      {/* Desktop */}
      <nav className="hidden sm:flex max-w-[80rem] mx-auto items-center justify-between p-2 px-4">
        <DarkModeSwitch
          checked={!light}
          onChange={(checked: boolean) => {
            if (checked !== !light) toggle();
          }}
          size={24}
          sunColor="rgb(120 113 108)"
          moonColor="rgb(120 113 108)"
        />

        <div className="flex gap-20">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="font-mono text-sm tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              activeProps={{
                className:
                  "font-mono text-sm tracking-widest text-stone-900 dark:text-stone-100",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
        <a
          href="https://www.linkedin.com/in/anees-haroon/"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin
            size="28px"
            className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-200"
          />
        </a>
      </nav>

      {/* Mobile */}
      <nav className="sm:hidden flex items-center justify-between p-2 px-4">
        <div className="text-stone-500">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={20}
            color="rgb(120 113 108)"
          />
        </div>

        <div className="flex items-center gap-3">
          <DarkModeSwitch
            checked={!light}
            onChange={(checked: boolean) => {
              if (checked !== !light) toggle();
            }}
            size={24}
            sunColor="rgb(120 113 108)"
            moonColor="rgb(120 113 108)"
          />
          <a
            href="https://www.linkedin.com/in/anees-haroon/"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin
              size="28px"
              className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-200"
            />
          </a>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col divide-y divide-stone-200 dark:divide-stone-800 border-t border-stone-200 dark:border-stone-800">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setIsOpen(false)}
              className="font-mono text-sm tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors px-4 py-4"
              activeProps={{
                className:
                  "font-mono text-sm tracking-widest text-stone-900 dark:text-stone-100 px-4 py-4",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
