import { useEffect, useState } from "react";

export default function Autoplay() {
  const [state, setState] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setState(true);
    }, 5000);
  }, []);

  return state ? (
    <div style={{ opacity: 0 }}>
      <audio
        controls
        autoPlay
        src="http://localhost:3000/voiceover.mp3"
      ></audio>
    </div>
  ) : null;
}
