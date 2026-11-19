
import { useMemo } from "react";
import "./Atmosphere.css";

function Atmosphere() {
  const snowflakes = useMemo(
    () =>
      Array.from({ length: 100 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 9 + Math.random() * 16,
        delay: Math.random() * 25,
        size: 1 + Math.random() * 4,
        opacity: 0.25 + Math.random() * 0.65,
        drift: Math.random() * 140 - 70,
        blur: Math.random() * 1.5,
        sway: 2 + Math.random() * 5,
      })),
    []
  );

  const redParticles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 8 + Math.random() * 10,
        delay: Math.random() * 8,
      })),
    []
  );

  const kingCards = useMemo(() => {
    const suits = [
      { symbol: "♥", name: "hearts" },
      { symbol: "♠", name: "spades" },
      { symbol: "♦", name: "diamonds" },
      { symbol: "♣", name: "clubs" },
    ];

    return Array.from({ length: 20 }, (_, i) => {
      const suit = suits[i % suits.length];

      return {
        id: i,
        rank: ["K", "A", "Q", "J"][i % 4],
        suit: suit.symbol,
        suitName: suit.name,
        left: (i * 37.7) % 100,
        duration: 18 + Math.random() * 18,
        delay: Math.random() * 30,
        size: 0.65 + Math.random() * 0.4,
        rotation: Math.random() * 50 - 25,
        drift: Math.random() * 140 - 70,
      };
    });
  }, []);

  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="ice-glow ice-glow-one"></div>
      <div className="ice-glow ice-glow-two"></div>
      <div className="blood-glow"></div>

      {/* REALISTIC SNOWFALL */}
      <div className="snow-container">
        {snowflakes.map((flake) => (
          <span
            key={flake.id}
            className="snowflake"
            style={{
              left: `${flake.left}%`,
              animationDuration: `${flake.duration}s`,
              animationDelay: `-${flake.delay}s`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              opacity: flake.opacity,
              "--snow-drift": `${flake.drift}px`,
              "--snow-blur": `${flake.blur}px`,
              "--snow-sway": `${flake.sway}s`,
            }}
          />
        ))}
      </div>

      {/* RED PARTICLES */}
      <div className="red-particle-container">
        {redParticles.map((particle) => (
          <span
            key={particle.id}
            className="red-particle"
            style={{
              left: `${particle.left}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `-${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* KING PLAYING CARDS */}
      <div className="king-card-container">
        {kingCards.map((card) => (
          <div
            key={card.id}
            className={`falling-king-card ${card.suitName}`}
            style={{
              left: `${card.left}%`,
              animationDuration: `${card.duration}s`,
              animationDelay: `-${card.delay}s`,
              "--card-size": card.size,
              "--card-rotation": `${card.rotation}deg`,
              "--card-drift": `${card.drift}px`,
            }}
          >
            <div className="falling-card-inner">
              <div className="falling-card-corner falling-card-top">
                <strong>{card.rank}</strong>
                <span>{card.suit}</span>
              </div>

              <div className="falling-card-center">
                <span className="falling-card-crown">♛</span>
                <strong>{card.rank}</strong>
                <span>{card.suit}</span>
              </div>

              <div className="falling-card-corner falling-card-bottom">
                <strong>{card.rank}</strong>
                <span>{card.suit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Atmosphere;
