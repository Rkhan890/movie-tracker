
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  ArrowDown,
  Crown,
  CalendarDays,
} from "lucide-react";

import "./Hero.css";
import heroImage from "../assets/king-hero.jpg";

const RELEASE_DATE = new Date("2026-12-24T00:00:00+05:30");

function Hero() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const updateCountdown = () => {
      const difference = RELEASE_DATE.getTime() - Date.now();

      if (difference <= 0) {
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = timeLeft
    ? [
        { label: "DAYS", value: timeLeft.days },
        { label: "HOURS", value: timeLeft.hours },
        { label: "MINUTES", value: timeLeft.minutes },
        { label: "SECONDS", value: timeLeft.seconds },
      ]
    : [];

  return (
    <section
      className="hero-section"
      id="home"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* BACKGROUND EFFECTS */}
      <div className="hero-overlay" />
      <div className="hero-vignette" />
      <div className="hero-red-glow" />
      <div className="hero-grain" />

      <div className="hero-content">

        {/* PRODUCTION CREDIT */}
        <motion.div
          className="hero-label"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Crown size={17} />
          <span>RED CHILLIES ENTERTAINMENT PRESENTS</span>
          <span className="hero-label-line" />
        </motion.div>

        {/* DIRECTOR CREDIT */}
        <motion.p
          className="hero-pretitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
        >
          A SIDDHARTH ANAND FILM
        </motion.p>

        {/* MAIN TITLE */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 65, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.1,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          K <span>I </span> N G
        </motion.h1>

        <motion.div
          className="hero-title-underline"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "110px", opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        />

        {/* FILM IDENTITY */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
        >

          A NEW  SHAH RUKH KHAN
         
          <br />
          EXPERIENCE
         
        </motion.p>

        {/* RELEASE INFORMATION */}
        <motion.div
          className="hero-release"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="hero-release-icon">
            <CalendarDays size={20} />
          </div>

          <div>
            <span>IN CINEMAS</span>
            <h2>
              24 <i>•</i> 12 <i>•</i> 2026
            </h2>
          </div>
        </motion.div>

        {/* CALL TO ACTION */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8 }}
        >
          <a
            href="https://youtu.be/Uu2QK9Z9X5E"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-trailer-btn"
          >
            <Play size={17} fill="currentColor" />
            WATCH TITLE REVEAL
          </a>

          <a
            href="#youtube-tracker"
            className="hero-explore-btn"
          >
            EXPLORE FILM UPDATES
            <ArrowDown size={17} />
          </a>
        </motion.div>

        {/* RELEASE COUNTDOWN */}
        <motion.div
          className="hero-countdown"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.8 }}
        >
          <div className="countdown-heading">
            <span className="countdown-indicator" />
            <p>COUNTDOWN TO THEATRICAL RELEASE</p>
          </div>

          <div className="countdown-items">
            {timeLeft ? (
              countdownItems.map(({ label, value }) => (
                <div className="countdown-item" key={label}>
                  <strong>
                    {String(value).padStart(2, "0")}
                  </strong>
                  <span>{label}</span>
                </div>
              ))
            ) : (
              <h3 className="countdown-arrived">
                NOW IN CINEMAS
              </h3>
            )}
          </div>
        </motion.div>

      </div>

      {/* BOTTOM SCROLL INDICATOR */}
      <div className="hero-bottom">
        <span>DISCOVER THE FILM</span>

        <motion.div
          className="scroll-line"
          animate={{
            scaleX: [0.5, 1, 0.5],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <span>01 / KING</span>
      </div>

    </section>
  );
}

export default Hero;
