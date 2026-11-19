
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { announcements } from "../data/announcements";
import "./Announcements.css";

export default function Announcements() {
  return (
    <section className="announcements-section section-padding" id="announcements">
      <div className="announcements-container">

        <motion.div
          className="announcements-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>STAY IN THE WORLD OF KING</span>
          <h2>LATEST <strong>UPDATES</strong></h2>
          <p>Every reveal. Every announcement. Every moment.</p>
        </motion.div>

        <div className="announcement-grid">
          {announcements.map((item, index) => (
            <motion.article
              className="announcement-card"
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <a
                className="announcement-image"
                href={`https://www.youtube.com/watch?v=${item.videoId}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Watch ${item.title}`}
              >
                <img
                  src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                  alt={item.title}
                  loading="lazy"
                />
                <span className="announcement-play">
                  <Play size={23} fill="currentColor" />
                </span>
                <span className="announcement-status">{item.status}</span>
              </a>

              <div className="announcement-content">
                <div className="announcement-meta">
                  <span>{item.category}</span>
                  <span>{item.date}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <a
                  className="announcement-link"
                  href={`https://www.youtube.com/watch?v=${item.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WATCH VIDEO <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
