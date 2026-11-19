
import { motion } from "framer-motion";
import {
  Crown,
  CalendarDays,
  Clapperboard,
  Film,
  Building2,
  Zap,
  Ticket,
  ArrowUpRight,
  Play,
} from "lucide-react";

import "./About.css";

const movieFacts = [
  {
    label: "LEAD ACTOR",
    value: "Shah Rukh Khan",
    icon: Crown,
  },
  {
    label: "DIRECTOR",
    value: "Siddharth Anand",
    icon: Clapperboard,
  },
  {
    label: "PRODUCTION",
    value: "Red Chillies & Marflix",
    icon: Building2,
  },
  {
    label: "GENRE",
    value: "Action Entertainer",
    icon: Zap,
  },
];

const productionPartners = [
  "RED CHILLIES ENTERTAINMENT",
  "MARFLIX PICTURES",
];

export default function About() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="about-watermark" aria-hidden="true">
        KING
      </div>

      <div className="about-container">
        {/* LEFT: CINEMATIC POSTER */}

        <motion.div
          className="about-visual"
          initial={{ opacity: 0, scale: 0.94, x: -35 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="about-visual-overlay" />

          <div className="about-poster-top">
            <Crown size={19} />
            <span>A NEW SHAH RUKH KHAN EXPERIENCE</span>
          </div>

          <div className="about-poster-content">
            <span className="poster-kicker">
              SIDDHARTH ANAND PRESENTS
            </span>

            <h2>KING</h2>

            <div className="about-poster-line" />

            <p>THE WAIT IS ALMOST OVER</p>

            <span className="poster-release">
              24 DECEMBER 2026
            </span>
          </div>

          <div className="about-poster-bottom">
            <span>ONE NAME</span>
            <span>ONE LEGACY</span>
            <span>KING</span>
          </div>

          <span className="about-poster-side">
            THE KINGDOM AWAITS
          </span>
        </motion.div>

        {/* RIGHT: FILM INFORMATION */}

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-eyebrow">
            <span />
            THE FILM
          </div>

          <h2 className="about-title">
            NOT JUST A NAME.
            <span> IT'S KING.</span>
          </h2>

          <p className="about-description">
            Shah Rukh Khan enters a new cinematic world with KING,
            an action entertainer directed by Siddharth Anand.
            Backed by Red Chillies Entertainment and Marflix Pictures,
            the film promises a larger-than-life theatrical experience.
          </p>

          <div className="about-film-tag">
            <Film size={17} />
            <span>AN ACTION-PACKED CINEMATIC EXPERIENCE</span>
          </div>

          {/* FILM DETAILS */}

          <div className="about-facts">
            {movieFacts.map((fact, index) => {
              const Icon = fact.icon;

              return (
                <motion.div
                  className="about-fact"
                  key={fact.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="about-fact-icon">
                    <Icon size={20} />
                  </div>

                  <div className="about-fact-info">
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>

                  <ArrowUpRight
                    className="about-fact-arrow"
                    size={17}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* PRODUCTION */}

          <div className="about-production">
            <span className="production-label">
              PRESENTED BY
            </span>

            <div className="production-names">
              {productionPartners.map((partner) => (
                <span key={partner}>{partner}</span>
              ))}
            </div>
          </div>

          {/* RELEASE */}

          <div className="about-release">
            <div className="about-release-icon">
              <CalendarDays size={22} />
            </div>

            <div className="about-release-details">
              <span>COMING TO CINEMAS</span>
              <h3>24.12.2026</h3>
            </div>

            <div className="release-status">
              <span />
              UPCOMING
            </div>
          </div>

          {/* ACTIONS */}

          <div className="about-actions">
            <a
              href="https://www.youtube.com/watch?v=Uu2QK9Z9X5E"
              target="_blank"
              rel="noopener noreferrer"
              className="about-primary-btn"
            >
              <Play size={17} fill="currentColor" />
              WATCH TITLE REVEAL
              <ArrowUpRight size={16} />
            </a>

            <a
              href="https://in.bookmyshow.com/movies/mall/king/ET00455480"
              target="_blank"
              rel="noopener noreferrer"
              className="about-secondary-btn"
            >
              <Ticket size={17} />
              FILM UPDATES
            </a>
          </div>

          <p className="about-note">
            This is an unofficial fan-made website. Film information
            is subject to official announcements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
