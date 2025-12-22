"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "skills", href: "#skills" },
  { label: "achievements", href: "#achievements" },
  { label: "education", href: "#education" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-terminal-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            className="flex items-center space-x-2 text-terminal-green font-bold text-lg"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-terminal-muted">~/</span>
            <span>kautik</span>
            <span className="animate-cursor-blink text-terminal-green">_</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="px-3 py-2 text-sm text-terminal-muted hover:text-terminal-green transition-colors relative group"
              >
                <span className="text-terminal-green opacity-0 group-hover:opacity-100 transition-opacity">
                  ./
                </span>
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-terminal-green group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-terminal-green"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-terminal-green"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-terminal-green"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-terminal-green"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2 border-t border-terminal-border">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2 text-terminal-muted hover:text-terminal-green hover:bg-terminal-gray/50 transition-colors"
              >
                <span className="text-terminal-green">$ </span>
                cd {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
