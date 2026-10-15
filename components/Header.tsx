"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X, Github, Linkedin, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "@/registry/magicui/animated-theme-toggler";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Next-themes requires mounting to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = (newTheme?: string | React.MouseEvent) => {
    const target = (typeof newTheme === "string" && (newTheme === "dark" || newTheme === "light"))
      ? newTheme
      : (resolvedTheme === "dark" ? "light" : "dark");
    setTheme(target);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", target);
      if (target === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
    }
  };

  const navLinks = [
    { label: "Work", href: "/#work" },
    { label: "Projects", href: "/#projects" },
    { label: "Blogs", href: "/#blogs" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "var(--bg)",
      borderBottom: "1px solid var(--line)"
    }}>
      <div className="wrap">
        <nav style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px"
        }} aria-label="Main Navigation">
          
          {/* Logo / Wordmark */}
          <Logo />

          {/* Desktop Navigation */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-only">
            <ul style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              listStyle: "none",
              margin: 0,
              padding: 0
            }}>
              {navLinks.map((link) => {
                const href = link.label === "Blogs" ? "/#blogs-desktop" : link.href;
                const isActive = pathname === href || (href !== "/" && pathname?.startsWith(href));
                return (
                  <li key={link.label}>
                    <Link
                      href={href}
                      className={`header-nav-link ${isActive ? "active" : ""}`}
                      style={{
                        color: isActive ? "var(--ink)" : "var(--ink)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Theme Toggle */}
            <div style={{ display: "flex", alignItems: "center", borderLeft: "1px solid var(--line)", paddingLeft: "24px" }}>
              {mounted ? (
                <AnimatedThemeToggler
                  theme={resolvedTheme}
                  onThemeChange={toggleTheme}
                />
              ) : (
                <button
                  type="button"
                  onClick={() => toggleTheme()}
                  aria-label="Toggle color theme"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--ink)",
                    display: "grid",
                    placeItems: "center",
                    width: "42px",
                    height: "42px",
                    cursor: "pointer",
                  }}
                >
                  <Sun size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle & Theme */}
          <div className="mobile-only" style={{ alignItems: "center", gap: "16px" }}>
            {mounted ? (
              <AnimatedThemeToggler
                theme={resolvedTheme}
                onThemeChange={toggleTheme}
              />
            ) : (
              <button
                type="button"
                onClick={() => toggleTheme()}
                aria-label="Toggle color theme"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--ink)",
                  display: "grid",
                  placeItems: "center",
                  width: "42px",
                  height: "42px",
                  cursor: "pointer",
                }}
              >
                <Sun size={18} />
              </button>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--ink)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: menuOpen ? "var(--line)" : "transparent"
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={menuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "72px",
              left: 0,
              right: 0,
              background: "var(--bg)",
              borderBottom: "1px solid var(--line)",
              padding: "24px 32px",
              boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              zIndex: 100
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`header-nav-link ${isActive ? "active" : ""}`}
                  style={{
                    fontSize: "16px",
                    color: isActive ? "var(--ink)" : "var(--ink)",
                    display: "block",
                    padding: "12px 16px",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            {/* Removed mobile social icons */}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
