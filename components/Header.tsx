"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X, Github, Linkedin, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const active = (document.documentElement.getAttribute("data-theme") as "light" | "dark") ||
      (localStorage.getItem("theme") as "light" | "dark") || 
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(active);
    document.documentElement.setAttribute("data-theme", active);
  }, []);

  const toggleTheme = () => {
    const current = (document.documentElement.getAttribute("data-theme") as "light" | "dark") || theme;
    const nextTheme = current === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  const navLinks = [
    { label: "Work", href: "/work" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
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
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <span
              className="display-font"
              style={{
                fontSize: "24px",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "var(--ink)",
                lineHeight: 1,
              }}
            >
              bnabeen
            </span>
          </Link>

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
                const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`header-nav-link ${isActive ? "active" : ""}`}
                      style={{
                        color: isActive ? "var(--ink)" : "var(--muted)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Social Icons */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", borderLeft: "1px solid var(--line)", paddingLeft: "32px" }}>
              <a href="https://github.com/bnabeen" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }}><Github size={18} /></a>
              <a href="https://linkedin.com/in/bnabeen" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }}><Linkedin size={18} /></a>
              <a href="https://instagram.com/nabeen.me" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }}><Instagram size={18} /></a>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                onClick={toggleTheme}
                aria-label="Toggle color theme"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--muted)",
                  cursor: "pointer",
                  display: "grid",
                  placeItems: "center",
                  padding: "4px"
                }}
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Toggle & Theme */}
          <div className="mobile-only" style={{ alignItems: "center", gap: "16px" }}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--muted)",
                cursor: "pointer",
                display: "grid",
                placeItems: "center"
              }}
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </motion.button>
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
                    color: isActive ? "var(--ink)" : "var(--muted)",
                    display: "block",
                    padding: "12px 16px",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "16px", paddingTop: "16px", borderTop: "1px solid var(--line)" }}>
              <a href="https://github.com/bnabeen" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ink)" }}><Github size={20} /></a>
              <a href="https://linkedin.com/in/bnabeen" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ink)" }}><Linkedin size={20} /></a>
              <a href="https://instagram.com/nabeen.me" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ink)" }}><Instagram size={20} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
