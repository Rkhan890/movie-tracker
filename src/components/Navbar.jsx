
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
import {
  Crown,
  House,
  Images,
  Music2,
  Bell,
  Info,
  Ticket,
  Menu,
  X,
  Gamepad2,
} from "lucide-react";

import "./Navbar.css";

const navLinks = [
  { name: "Home", icon: House, href: "#home" },
  { name: "Gallery", icon: Images, href: "#gallery" },
  { name: "YouTube Tracker", icon: FaYoutube, href: "#youtube-tracker" },
  { name: "Games", icon: Gamepad2, href: "#game-zone" },
  { name: "Songs", icon: Music2, href: "#songs" },
  { name: "Announcements", icon: Bell, href: "#announcements" },
  { name: "About", icon: Info, href: "#about" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="navbar-container">

        {/* LOGO */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={() => setMenuOpen(false)}
        >
          <Crown className="logo-crown" />
          <div className="logo-text">
            <span>KING</span>
            <small>TRACKER</small>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                <Icon size={17} />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* BOOKMYSHOW BUTTON */}
        <a
          href="https://in.bookmyshow.com/"
          target="_blank"
          rel="noreferrer"
          className="bookmyshow-btn"
        >
          <Ticket size={17} />
          <span>BookMyShow</span>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon size={19} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}

export default Navbar;
