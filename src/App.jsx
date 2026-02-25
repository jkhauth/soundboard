import { useRef } from "react";
import "./App.css";

const sounds = [
  { name: "Airhorn", file: "airhorn.mp3", emoji: "📢" },
  { name: "Boo", file: "boo.mp3", emoji: "👎" },
  { name: "Applause", file: "applause.mp3", emoji: "👏" },
  { name: "Lets Go", file: "letsgo.mp3", emoji: "🔥" },
];

export default function App() {
  const audioRef = useRef(null);

  const playSound = (file) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const audio = new Audio(`/sounds/${file}`);
    audioRef.current = audio;
    audio.play();
  };

return (
  <div className="app">
    <div className="shell">
      <h1>🔥 Bachelor Board 🔥</h1>
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
  </div>
);
}