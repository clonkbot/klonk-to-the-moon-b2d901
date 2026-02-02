import { useState, useEffect } from 'react';
import './styles.css';

function Star({ delay, size, x, y, speed }: { delay: number; size: number; x: number; y: number; speed: number }) {
  return (
    <div
      className="star"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${speed}s`,
      }}
    />
  );
}

function ShootingStar({ delay }: { delay: number }) {
  const startY = Math.random() * 40;
  return (
    <div
      className="shooting-star"
      style={{
        top: `${startY}%`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

function Klonk() {
  return (
    <div className="klonk-container">
      <div className="rocket">
        {/* Rocket body */}
        <div className="rocket-body">
          <div className="rocket-window">
            <div className="klonk-face">
              <div className="klonk-eyes">
                <div className="klonk-eye left"></div>
                <div className="klonk-eye right"></div>
              </div>
              <div className="klonk-mouth"></div>
            </div>
          </div>
          <div className="rocket-fins left-fin"></div>
          <div className="rocket-fins right-fin"></div>
          <div className="rocket-tip"></div>
        </div>

        {/* Exhaust flames */}
        <div className="exhaust">
          <div className="flame flame-1"></div>
          <div className="flame flame-2"></div>
          <div className="flame flame-3"></div>
          <div className="spark spark-1"></div>
          <div className="spark spark-2"></div>
          <div className="spark spark-3"></div>
          <div className="spark spark-4"></div>
        </div>
      </div>
    </div>
  );
}

function Moon() {
  return (
    <div className="moon">
      <div className="moon-surface">
        <div className="crater crater-1"></div>
        <div className="crater crater-2"></div>
        <div className="crater crater-3"></div>
        <div className="crater crater-4"></div>
      </div>
      <div className="moon-glow"></div>
    </div>
  );
}

function App() {
  const [stars, setStars] = useState<Array<{ id: number; delay: number; size: number; x: number; y: number; speed: number }>>([]);
  const [shootingStars] = useState(() =>
    Array.from({ length: 5 }, (_, i) => ({ id: i, delay: i * 4 + Math.random() * 2 }))
  );

  useEffect(() => {
    const generatedStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      delay: Math.random() * 3,
      size: Math.random() * 2.5 + 0.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: Math.random() * 2 + 1,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="app">
      <div className="space-background">
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
        <div className="star-field">
          {stars.map((star) => (
            <Star key={star.id} {...star} />
          ))}
        </div>
        {shootingStars.map((star) => (
          <ShootingStar key={star.id} delay={star.delay} />
        ))}
      </div>

      <Moon />
      <Klonk />

      <div className="content">
        <h1 className="title">
          <span className="title-klonk">KLONK</span>
          <span className="title-to">TO THE</span>
          <span className="title-moon">MOON</span>
        </h1>
        <p className="tagline">When the market recovers, we ride together.</p>
        <div className="flight-data">
          <div className="data-item">
            <span className="data-label">ALTITUDE</span>
            <span className="data-value altitude-counter">384,400 KM</span>
          </div>
          <div className="data-item">
            <span className="data-label">DESTINATION</span>
            <span className="data-value">LUNAR ORBIT</span>
          </div>
          <div className="data-item">
            <span className="data-label">STATUS</span>
            <span className="data-value status-active">EN ROUTE</span>
          </div>
        </div>
      </div>

      <footer className="footer">
        <span>Requested by <a href="https://twitter.com/AnatoliyFrol" target="_blank" rel="noopener noreferrer">@AnatoliyFrol</a></span>
        <span className="footer-dot">·</span>
        <span>Built by <a href="https://twitter.com/clonkbot" target="_blank" rel="noopener noreferrer">@clonkbot</a></span>
      </footer>
    </div>
  );
}

export default App;
