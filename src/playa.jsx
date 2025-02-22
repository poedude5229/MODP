import { useState, useRef, useEffect } from "react";

function Playa() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  function playAudio() {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }

  function pauseAudio() {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }

  function updateProgress() {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((currentTime / duration) * 100);
    }
  }

  function seekAudio(event) {
    if (audioRef.current) {
      const newTime = (event.target.value / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress(event.target.value);
    }
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", updateProgress);
      return () => {
        audio.removeEventListener("timeupdate", updateProgress);
      };
    }
  }, []);

  return (
    <div id="bG">
      <div className="player">
        <img
          src="https://jumblrbucket.s3.us-east-1.amazonaws.com/ab67616d0000b27361b7e027205d656d5b14b473.jpg"
          alt="Feel Like That (Album Cover)"
        />
        <audio
          src="https://bandfishbucket.s3.us-east-1.amazonaws.com/Sublime+X+Stick+Figure++Feel+Like+That+feat+Bradley+Nowell.mp3"
          controls
          ref={audioRef}
        ></audio>
        <br />
        <button onClick={isPlaying ? pauseAudio : playAudio}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        {/* <button onClick={pauseAudio}>Pause</button> */}

        {/* Progress Bar */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={seekAudio}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

export default Playa;
