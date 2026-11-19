
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Images,
  X,
  ChevronLeft,
  ChevronRight,
  Expand,
  Download,
  Smartphone,
  Monitor,
  LayoutGrid,
} from "lucide-react";

import galleryImages from "../data/Gallery";
import "./Gallery.css";

function Gallery() {
  const [activeImage, setActiveImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("ALL");

  // Wallpaper type can be defined individually in gallery data.
  const wallpaperImages = galleryImages.map((image, index) => ({
    ...image,
    wallpaperType:
      image.wallpaperType ||
      (index < 3 ? "MOBILE" : "DESKTOP"),
  }));

  const filteredImages =
    activeFilter === "ALL"
      ? wallpaperImages
      : wallpaperImages.filter(
          (image) => image.wallpaperType === activeFilter
        );

  const showNext = () => {
    setActiveImage((current) => {
      if (!current || !filteredImages.length) return current;

      const index = filteredImages.findIndex(
        (image) => image.id === current.id
      );

      return filteredImages[(index + 1) % filteredImages.length];
    });
  };

  const showPrevious = () => {
    setActiveImage((current) => {
      if (!current || !filteredImages.length) return current;

      const index = filteredImages.findIndex(
        (image) => image.id === current.id
      );

      return filteredImages[
        (index - 1 + filteredImages.length) % filteredImages.length
      ];
    });
  };

  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveImage(null);
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeImage, activeFilter]);

  const downloadImage = (image) => {
    const link = document.createElement("a");
    link.href = image.image;
    link.download = `KING-${image.id}.jpg`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filters = [
    { name: "ALL", label: "ALL WALLPAPERS", icon: LayoutGrid },
    { name: "MOBILE", label: "MOBILE", icon: Smartphone },
    { name: "DESKTOP", label: "DESKTOP", icon: Monitor },
  ];

  return (
    <section className="gallery-section section-padding" id="gallery">

      {/* SECTION HEADER */}

      <motion.div
        className="gallery-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-eyebrow">
          <Images size={16} />
          KING | DIGITAL WALLPAPER COLLECTION
        </span>

        <h2>
          KING <span>GALLERY</span>
        </h2>

        <p>
          A collection of KING-inspired artwork for your mobile
          and desktop screens. Preview and save your favourites.
        </p>
      </motion.div>

      {/* WALLPAPER FILTERS */}

      <motion.div
        className="wallpaper-filters"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {filters.map((filter) => {
          const Icon = filter.icon;

          return (
            <button
              key={filter.name}
              className={`wallpaper-filter ${
                activeFilter === filter.name ? "active" : ""
              }`}
              onClick={() => {
                setActiveFilter(filter.name);
                setActiveImage(null);
              }}
              aria-pressed={activeFilter === filter.name}
            >
              <Icon size={17} />
              {filter.label}
            </button>
          );
        })}
      </motion.div>

      {/* WALLPAPER GRID */}

      <motion.div layout className="gallery-grid wallpaper-grid">

        <AnimatePresence mode="popLayout">
          {filteredImages.map((image, index) => (
            <motion.div
              layout
              key={image.id}
              className={`gallery-card wallpaper-card ${
                image.wallpaperType === "MOBILE"
                  ? "mobile-wallpaper"
                  : "desktop-wallpaper"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.4,
                delay: index * 0.04,
              }}
              onClick={() => setActiveImage(image)}
              role="button"
              tabIndex={0}
              aria-label={`Preview ${image.title}`}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveImage(image);
                }
              }}
            >
              <img
                src={image.image}
                alt={image.title}
                loading="lazy"
              />

              <div className="gallery-card-overlay">
                <span>{image.wallpaperType} WALLPAPER</span>
                <h3>{image.title}</h3>

                <div className="gallery-card-actions">
                  <button
                    className="gallery-download-btn"
                    onClick={(event) => {
                      event.stopPropagation();
                      downloadImage(image);
                    }}
                    aria-label={`Download ${image.title}`}
                  >
                    <Download size={19} />
                  </button>

                  <Expand size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

      </motion.div>

      {/* DOWNLOAD INFORMATION */}

      <div className="gallery-download-info">
        <Download size={18} />
        <span>
          PREVIEW YOUR FAVOURITE ARTWORK AND SAVE IT TO YOUR DEVICE.
        </span>
      </div>

      {/* LIGHTBOX */}

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <button
              className="lightbox-close"
              onClick={() => setActiveImage(null)}
              aria-label="Close gallery"
            >
              <X />
            </button>

            <button
              className="lightbox-nav lightbox-prev"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>

            <motion.div
              className="lightbox-content"
              key={activeImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={activeImage.image}
                alt={activeImage.title}
              />

              <div className="lightbox-caption">
                <div>
                  <span>{activeImage.wallpaperType} WALLPAPER</span>
                  <h3>{activeImage.title}</h3>
                </div>

                <button
                  className="lightbox-download"
                  onClick={() => downloadImage(activeImage)}
                >
                  <Download size={18} />
                  DOWNLOAD
                </button>
              </div>
            </motion.div>

            <button
              className="lightbox-nav lightbox-next"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
            >
              <ChevronRight />
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Gallery;
