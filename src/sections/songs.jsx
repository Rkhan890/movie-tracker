
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Music2,
  AudioWaveform,
  Pause,
  Disc3,
  Headphones,
  ExternalLink,
} from "lucide-react";

import { songs } from "../data/songs";
import "./Songs.css";

export default function Songs() {
  const [activeSong, setActiveSong] = useState(songs[0]);
  const [playing, setPlaying] = useState(false);

  const playSong = (song) => {
    if (activeSong.id === song.id) {
      setPlaying((previous) => !previous);
      return;
    }

    setActiveSong(song);
    setPlaying(true);
  };

  const openOnYouTube = () => {
    if (!activeSong?.id) return;

    window.open(
      `https://www.youtube.com/watch?v=${activeSong.id}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="songs-section section-padding" id="songs">
      <div className="songs-container">

        {/* SECTION HEADING */}

        <motion.div
          className="songs-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="songs-eyebrow">
            <Music2 size={16} />
            KING | MUSIC COLLECTION
          </span>

          <h2>
            THE SOUND OF <span>KING</span>
          </h2>

          <p>
            Explore the music and audio releases associated with
            Shah Rukh Khan's KING.
          </p>
        </motion.div>

        {/* MUSIC PLAYER */}

        <motion.div
          className="music-player"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          {/* PLAYER SCREEN */}

          <div className="music-player-screen">

            <AnimatePresence mode="wait">
              {playing ? (
                <motion.iframe
                  key={activeSong.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  src={`https://www.youtube.com/embed/${activeSong.id}?autoplay=1&rel=0`}
                  title={activeSong.title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <motion.div
                  key="music-placeholder"
                  className="music-placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >

                  <div className="music-placeholder-glow" />

                  <div className="music-icon">
                    <Disc3 size={48} />
                  </div>

                  <span>THE KING SOUNDTRACK EXPERIENCE</span>

                  <h3>{activeSong?.title || "SELECT A TRACK"}</h3>

                  <p>
                    Choose a track from the collection to begin listening.
                  </p>

                  <button
                    onClick={() => setPlaying(true)}
                    disabled={!activeSong?.id}
                  >
                    <Play size={18} fill="currentColor" />
                    PLAY TRACK
                  </button>

                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* PLAYER INFORMATION */}

          <div className="music-player-info">

            <div className="music-track-info">
              <span className="music-label">
                NOW SELECTED
              </span>

              <h3>{activeSong?.title || "No track selected"}</h3>

              <p>{activeSong?.subtitle || "KING MUSIC COLLECTION"}</p>
            </div>

            <div className="music-player-actions">

              <div className="music-status">
                <span
                  className={
                    playing
                      ? "playing-dot active"
                      : "playing-dot"
                  }
                />

                {playing ? "PLAYING" : "READY"}
              </div>

              <button
                className="music-toggle-btn"
                onClick={() => setPlaying((previous) => !previous)}
                disabled={!activeSong?.id}
                aria-label={playing ? "Pause track" : "Play track"}
                title={playing ? "Pause track" : "Play track"}
              >
                {playing ? (
                  <Pause size={17} />
                ) : (
                  <Play size={17} fill="currentColor" />
                )}
              </button>

              <button
                className="music-youtube-btn"
                onClick={openOnYouTube}
                disabled={!activeSong?.id}
                aria-label="Open selected track on YouTube"
                title="Open on YouTube"
              >
                <ExternalLink size={17} />
              </button>

            </div>

          </div>

          {/* PLAYLIST */}

          <div className="music-playlist">

            <div className="playlist-heading">
              <div>
                <Headphones size={17} />
                <h3>TRACKLIST</h3>
              </div>

              <span>
                {String(songs.length).padStart(2, "0")} TRACKS
              </span>
            </div>

            {songs.length > 0 ? (
              songs.map((song, index) => {

                const isSelected = activeSong?.id === song.id;

                return (
                  <button
                    className={`track-item ${
                      isSelected ? "selected" : ""
                    }`}
                    key={song.id}
                    onClick={() => playSong(song)}
                    aria-label={`${playing && isSelected ? "Pause" : "Play"} ${song.title}`}
                    aria-pressed={isSelected}
                  >

                    <span className="track-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="track-details">
                      <strong>{song.title}</strong>
                      <small>{song.type}</small>
                    </span>

                    <span className="track-play">
                      {isSelected && playing ? (
                        <AudioWaveform size={19} />
                      ) : (
                        <Play size={18} />
                      )}
                    </span>

                  </button>
                );
              })
            ) : (
              <div className="playlist-empty">
                No tracks are available yet.
              </div>
            )}

          </div>

          {/* PLAYER FOOTER */}

          <div className="music-player-footer">
            <Music2 size={15} />

            <span>
              LISTEN TO THE KING COLLECTION
            </span>

            <span className="music-footer-line" />
          </div>

        </motion.div>

      </div>
    </section>
  );
}
