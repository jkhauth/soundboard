import { useRef } from "react";
import "./App.css";

const sounds = [
  { name: "Any Pride!", file: "any_pride.mp3", emoji: "🔥" },
  { name: "Chance Time!", file: "chance-time-music.mp3", emoji: "🔥" },
  { name: "FAAAAH", file: "faaah.mp3", emoji: "🔥" },
  { name: "Emotional", file: "emotional.mp3", emoji: "🔥" },
  { name: "UHHHH?", file: "home-improvement-huh.mp3", emoji: "🔥" },
  { name: "DOH", file: "homer-simpson-doh-hd.mp3", emoji: "🔥" },
  { name: "Gonna Come", file: "im-gonna-come_6HehWm4.mp3", emoji: "🔥" },
  { name: "MISS", file: "miss_2G4oN9I.mp3", emoji: "🔥" },
  { name: "Tearing me apart", file: "tearingmeapart.mp3", emoji: "🔥" },
  { name: "WHAT KIND OF DRUGS", file: "what-kind-of-drugs-denny.mp3", emoji: "🔥" },
  { name: "YOU MARK", file: "you_mark.mp3", emoji: "🔥" },
  { name: "THE LIST", file: "you-just-made-the-list.mp3", emoji: "🔥" },
];

export default function App() {
  const audioRef = useRef(null);

const playSound = (file) => {
  // 1. Get the base path (e.g., '/' locally or '/your-repo-name/' on GitHub)
  const base = import.meta.env.BASE_URL;
  
  // 2. Stop the previous sound immediately
  if (audioRef.current) {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }

  // 3. Create new instance using the base path
  // We ensure there's exactly one slash between the base and the sounds folder
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const audio = new Audio(`${cleanBase}sounds/${file}`); 
  
  audioRef.current = audio;

  // 4. Play and handle errors
  audio.play().catch((err) => {
    // This usually happens if the user hasn't interacted with the page yet
    console.error("Playback failed. Ensure you've clicked the page first!", err);
  });
};

return (
  <div className="app">
    <div className="shell">
      <h1>🔥 Pete's Bachelor Board 🔥</h1>
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