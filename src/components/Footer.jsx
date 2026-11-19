
import { motion } from "framer-motion";

import {
  Crown,
  ArrowUp,
  ArrowUpRight,
  Heart,
  CalendarDays,
  Clapperboard,
  Film,
  Zap,
  Building2,
  Play,
  Gamepad2,
} from "lucide-react";

import { FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const links = [
  ["Home", "#home"],
  ["Gallery", "#gallery"],
  ["YouTube Tracker", "#youtube-tracker"],
  ["Game Zone", "#game-zone"],
  ["Songs", "#songs"],
  ["Announcements", "#announcements"],
  ["About", "#about"],
];

const filmDetails = [
  {
    icon: Crown,
    label: "LEAD STAR",
    value: "SHAH RUKH KHAN",
  },
  {
    icon: Clapperboard,
    label: "DIRECTOR",
    value: "SIDDHARTH ANAND",
  },
  {
    icon: Building2,
    label: "PRODUCTION",
    value: "RED CHILLIES × MARFLIX",
  },
  {
    icon: Zap,
    label: "GENRE",
    value: "ACTION ENTERTAINER",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="king-footer">
      <div className="footer-glow" />
      <div className="footer-red-glow" />

      <div className="footer-watermark" aria-hidden="true">
        KING
      </div>

      <div className="footer-container">

        {/* MAIN FOOTER */}

        <motion.div
          className="footer-main"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* BRAND */}

          <motion.div
            className="footer-brand"
            variants={itemVariants}
          >
            <a href="#home" className="footer-logo">
              <div className="footer-crown">
                <Crown size={29} />
              </div>

              <div className="footer-logo-text">
                <span>KING</span>
                <small>THE LEGEND</small>
              </div>
            </a>

            <p className="footer-description">
              THE ULTIMATE KING FAN TRACKER.
              <br />
              Every reveal. Every update.
              <br />
              Every moment closer to the throne.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.instagram.com/iamsrk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shah Rukh Khan Instagram"
              >
                <FaInstagram size={19} />
                <span>Instagram</span>
              </a>

              <a
                href="https://www.youtube.com/@RedChilliesEntertainment"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Red Chillies Entertainment YouTube"
              >
                <FaYoutube size={19} />
                <span>YouTube</span>
              </a>
            </div>
          </motion.div>

          {/* NAVIGATION */}

          <motion.div
            className="footer-navigation"
            variants={itemVariants}
          >
            <h3>
              <Clapperboard size={17} />
              EXPLORE
            </h3>

            <div className="footer-nav-links">
              {links.map(([label, href]) => (
                <a href={href} key={href}>
                  <span>{label}</span>
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RELEASE CARD */}

          <motion.div
            className="footer-release"
            variants={itemVariants}
          >
            <div className="release-card-top">
              <span className="release-status">
                <span className="status-dot" />
                THE COUNTDOWN CONTINUES
              </span>

              <CalendarDays size={22} />
            </div>

            <div className="release-card-content">
              <span className="release-label">
                MARK YOUR CALENDAR
              </span>

              <h2>
                24<span>.</span>12<span>.</span>2026
              </h2>

              <div className="release-divider" />

              <p>COMING TO CINEMAS</p>
            </div>

            <div className="release-card-bottom">
              <span>THE KING IS COMING</span>
              <Crown size={18} />
            </div>
          </motion.div>
        </motion.div>

        {/* ABOUT THE FILM */}

        <motion.div
          className="footer-film"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="footer-film-heading">
            <div>
              <span className="footer-section-kicker">
                A NEW SHAH RUKH KHAN EXPERIENCE
              </span>

              <h2>
                THE WORLD OF <span>KING.</span>
              </h2>
            </div>

            <div className="footer-film-icon">
              <Film size={27} />
            </div>
          </div>

          <p className="footer-film-description">
            Shah Rukh Khan steps into a new cinematic world with
            KING, an action entertainer directed by Siddharth Anand.
            Produced by Red Chillies Entertainment and Marflix Pictures,
            the film is set for a grand theatrical arrival.
          </p>

          <div className="footer-film-facts">
            {filmDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="footer-film-fact"
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <div className="footer-film-fact-icon">
                    <Icon size={18} />
                  </div>

                  <div>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="footer-film-bottom">
            <div className="footer-film-tagline">
              <Crown size={17} />
              <span>REMEMBER, THERE IS ONLY ONE KING.</span>
            </div>

            <a
              href="https://www.youtube.com/watch?v=Uu2QK9Z9X5E"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-film-button"
            >
              <Play size={15} fill="currentColor" />
              WATCH TITLE REVEAL
              <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>

        {/* GAME ZONE PROMOTION */}

        <motion.a
          href="#game-zone"
          className="footer-game-banner"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className="footer-game-icon">
            <Gamepad2 size={27} />
          </div>

          <div className="footer-game-content">
            <span>TEST YOUR SRK KNOWLEDGE</span>
            <h3>ENTER THE KING GAME ZONE</h3>
            <p>
              Play trivia, guess the movies and challenge yourself.
            </p>
          </div>

          <div className="footer-game-arrow">
            <ArrowUpRight size={23} />
          </div>
        </motion.a>

        {/* FOOTER BOTTOM */}

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} KING FAN TRACKER.

            <span className="footer-made">
              MADE WITH
              <Heart size={13} fill="currentColor" />
              FOR CINEMA LOVERS.
            </span>
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            BACK TO TOP

            <span className="back-to-top-icon">
              <ArrowUp size={16} />
            </span>
          </motion.button>
        </div>

        {/* DISCLAIMER */}

        <p className="footer-disclaimer">
          This is an unofficial fan-made website. Not affiliated with
          Shah Rukh Khan, Red Chillies Entertainment, Marflix Pictures
          or the film's official production team.
        </p>

      </div>
    </footer>
  );
}
