import { useState, useEffect, useRef } from "react";
import "./App.css";

const sounds = [
  { name: "Any Pride!", file: "any_pride.mp3", emoji: "🫘" },
  { name: "Chance Time!", file: "chance-time-music.mp3", emoji: "🫛" },
  { name: "FAAAAH", file: "faaah.mp3", emoji: "🌱" },
  { name: "Emotional", file: "emotional.mp3", emoji: "🥣" },
  { name: "UHHHH?", file: "home-improvement-huh.mp3", emoji: "🫘" },
  { name: "DOH", file: "homer-simpson-doh-hd.mp3", emoji: "☕" },
  { name: "Gonna Come", file: "im-gonna-come_6HehWm4.mp3", emoji: "🫛" },
  { name: "MISS", file: "miss_2G4oN9I.mp3", emoji: "🍃" },
  { name: "Tearing me apart", file: "tearingmeapart.mp3", emoji: "🫘" },
  { name: "WHAT KIND OF DRUGS", file: "what-kind-of-drugs-denny.mp3", emoji: "💊" },
  { name: "YOU MARK", file: "you_mark.mp3", emoji: "🫛" },
  { name: "THE LIST", file: "you-just-made-the-list.mp3", emoji: "📝" },
];

export default function App() {
  const audioRef = useRef(null);
  
  // Load initial count from local storage or default to 0
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("beanCount")) || 0;
  });

  // Save count whenever it changes
  useEffect(() => {
    localStorage.setItem("beanCount", count);
  }, [count]);

  const playSound = (file) => {
    setCount(prev => prev + 1);

    const base = import.meta.env.BASE_URL;
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(`${cleanBase}sounds/${file}`);
    audioRef.current = audio;
    audio.play().catch(e => console.error(e));
  };

  return (
    <div className="app">
      <h1>Pete's Bachelor Bean Board 🫘</h1>

      <div className="counter-container">
        <span>TOTAL BEANS FLICKED:</span>
        <span className="counter-number">{count}</span>
      </div>

      <div className="grid">
        {sounds.map((sound) => (
          <button
            key={sound.file}
            onClick={() => playSound(sound.file)}
            className="soundBtn"
          >
            <span className="emoji">{sound.emoji}</span>
            <span className="label">{sound.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}