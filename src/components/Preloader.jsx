
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Crown } from "lucide-react";
import "./Preloader.css";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let currentProgress = 0;
    let hideTimer;

    const progressTimer = setInterval(() => {
      currentProgress += 1;

      setProgress(Math.min(currentProgress, 100));

      if (currentProgress >= 100) {
        clearInterval(progressTimer);

        hideTimer = setTimeout(() => {
          setLoading(false);
        }, 650);
      }
    }, 25);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="king-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 0.85,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          {/* BACKGROUND */}

          <div className="preloader-bg" />
          <div className="preloader-grain" />
          <div className="preloader-red-glow" />

          <div className="preloader-grid" />

          {/* TOP BAR */}

          <div className="preloader-top">
            <span className="preloader-brand">
              <Crown size={15} />
              KING
            </span>

            <span className="preloader-edition">
              CINEMATIC EXPERIENCE
            </span>
          </div>

          {/* MAIN CONTENT */}

          <div className="preloader-content">

            {/* CARD REVEAL */}

            <motion.div
              className="preloader-card-wrap"
              initial={{
                opacity: 0,
                y: 35,
                rotateY: -35,
                rotateZ: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotateY: 0,
                rotateZ: 0,
              }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.div
                className="preloader-card"
                animate={{
                  y: [0, -9, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="card-corner card-top">
                  <strong>K</strong>
                  <span>♥</span>
                </div>

                <div className="card-center">
                  <Crown size={52} strokeWidth={1.2} />
                  <span>THE KING</span>
                  <strong>♥</strong>
                </div>

                <div className="card-corner card-bottom">
                  <strong>K</strong>
                  <span>♥</span>
                </div>
              </motion.div>

              <div className="preloader-card-shadow" />
            </motion.div>

            {/* TITLE */}

            <motion.div
              className="preloader-title-wrap"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.45,
                duration: 0.9,
              }}
            >
              <span className="preloader-kicker">
                A NEW SHAH RUKH KHAN EXPERIENCE
              </span>

              <h1 className="preloader-title">
                K<span>I</span>NG<span className="title-dot"></span>
              </h1>

              <div className="preloader-title-line" />

              <p className="preloader-tagline">
                REMEMBER, THERE IS ONLY ONE KING.
              </p>
            </motion.div>
          </div>

          {/* BOTTOM LOADING */}

          <div className="preloader-bottom">
            <div className="preloader-loading-info">
              <span>INITIALIZING THE KINGDOM</span>

              <strong>
                {String(progress).padStart(2, "0")}%
              </strong>
            </div>

            <div className="preloader-progress-track">
              <motion.div
                className="preloader-progress-fill"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.12 }}
              />
            </div>

            <div className="preloader-footer">
              <span>THE KINGDOM AWAITS</span>
              <span>24.12.2026</span>
            </div>
          </div>

          {/* DECORATIVE CORNERS */}

          <div className="preloader-corner corner-left" />
          <div className="preloader-corner corner-right" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
