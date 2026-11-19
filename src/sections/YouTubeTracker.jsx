
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Play,
  ExternalLink,
  X,
} from "lucide-react";

import { FaYoutube, FaXTwitter } from "react-icons/fa6";

import videos from "../data/videos";
import "./YouTubeTracker.css";

function YouTubeTracker() {
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (!activeVideo) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  const featuredVideo = videos[0];

  if (!featuredVideo) return null;

  return (
    <section
      className="youtube-section section-padding"
      id="youtube-tracker"
    >
      <div className="youtube-container">

        {/* SECTION HEADER */}
        <motion.div
          className="youtube-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="youtube-heading-content">

            <span className="section-eyebrow">
              <FaYoutube size={19} />
              KING | OFFICIAL VIDEO UPDATES
            </span>

            <h2 className="youtube-title">
              VIDEO <span>UPDATES</span>
            </h2>

            <p className="youtube-description">
              Title reveals, promotional videos and the latest releases
              surrounding Shah Rukh Khan's KING.
            </p>

            <div className="youtube-social-links">

              <a
                href="https://www.youtube.com/@RedChilliesEntertainment"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-social-link youtube-icon"
                aria-label="Red Chillies Entertainment YouTube"
              >
                <FaYoutube />
              </a>

              <a
                href="https://x.com/RedChilliesEnt"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-social-link x-icon"
                aria-label="Red Chillies Entertainment on X"
              >
                <FaXTwitter />
              </a>

            </div>
          </div>

          <a
            href="https://www.youtube.com/@RedChilliesEntertainment"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-channel-btn"
          >
            <FaYoutube size={20} />
            RED CHILLIES CHANNEL
            <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* FEATURED VIDEO */}
        <motion.div
          className="video-featured"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
        >
          <div className="featured-video-image">

            <img
              src={`https://img.youtube.com/vi/${featuredVideo.id}/maxresdefault.jpg`}
              alt={featuredVideo.title}
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src =
                  `https://img.youtube.com/vi/${featuredVideo.id}/hqdefault.jpg`;
              }}
            />

            <div className="featured-image-overlay" />

            <button
              className="featured-play"
              onClick={() => setActiveVideo(featuredVideo)}
              aria-label={`Play ${featuredVideo.title}`}
            >
              <Play fill="currentColor" size={27} />
            </button>

            <span className="featured-badge">
              EDITOR'S PICK
            </span>

            <span className="featured-image-caption">
              FROM THE WORLD OF KING
            </span>

          </div>

          <div className="featured-content">

            <span className="video-category">
              {featuredVideo.category}
            </span>

            <h3>{featuredVideo.title}</h3>

            <p>{featuredVideo.description}</p>

            <div className="featured-video-meta">
              <span>
                <FaYoutube size={15} />
                KING VIDEO COLLECTION
              </span>
            </div>

            <button
              className="watch-featured-btn"
              onClick={() => setActiveVideo(featuredVideo)}
            >
              <Play size={17} fill="currentColor" />
              PLAY VIDEO
              <ExternalLink size={15} />
            </button>

          </div>
        </motion.div>

        {/* VIDEO LIST HEADER */}
        <div className="video-list-header">

          <div>
            <span className="video-list-eyebrow">
              FILM PROMOTION & ANNOUNCEMENTS
            </span>

            <h3>VIDEO ARCHIVE</h3>
          </div>

          <span className="video-count">
            {videos.length} VIDEOS
          </span>

        </div>

        {/* VIDEO GRID */}
        <div className="video-grid">

          {videos.slice(1).map((video, index) => (
            <motion.article
              key={video.id}
              className="video-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12
              }}
            >
              <div className="video-thumbnail">

                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={`${video.title} ${video.subtitle || ""}`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src =
                      `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                  }}
                />

                <div className="video-thumbnail-overlay" />

                <button
                  className="video-play-btn"
                  onClick={() => setActiveVideo(video)}
                  aria-label={`Play ${video.title}`}
                >
                  <Play fill="currentColor" size={20} />
                </button>

                <span className="video-number">
                  {String(index + 2).padStart(2, "0")}
                </span>

              </div>

              <div className="video-card-content">

                <span className="video-category">
                  {video.category}
                </span>

                <h4>{video.title}</h4>

                {video.subtitle && <h5>{video.subtitle}</h5>}

                <p>{video.description}</p>

                <button
                  className="video-watch-link"
                  onClick={() => setActiveVideo(video)}
                >
                  PLAY VIDEO
                  <ExternalLink size={14} />
                </button>

              </div>
            </motion.article>
          ))}

        </div>

        {/* VIDEO MODAL */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              className="video-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              role="presentation"
            >
              <motion.div
                className="video-modal-content"
                initial={{ opacity: 0, scale: 0.92, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ duration: 0.25 }}
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={activeVideo.title}
              >

                <button
                  className="video-modal-close"
                  onClick={() => setActiveVideo(null)}
                  aria-label="Close video"
                >
                  <X size={22} />
                </button>

                <div className="video-player-wrapper">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                    title={`${activeVideo.title} - ${activeVideo.subtitle || "KING"}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>

                <div className="modal-video-info">

                  <span>{activeVideo.category}</span>

                  <h3>
                    {activeVideo.title}
                    {activeVideo.subtitle
                      ? ` — ${activeVideo.subtitle}`
                      : ""}
                  </h3>

                  <p>{activeVideo.description}</p>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

export default YouTubeTracker;
