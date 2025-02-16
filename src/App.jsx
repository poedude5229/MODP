import { useState } from "react";

const audio = document.getElementById("audio");
function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function setVolume() {
  audio.volume = document.getElementById("volume").value;
}

function App() {
  // const [modeSelect, setModeSelect] = useState(0);

  return (
    <div className="player">
      <input type="file" id="fileInput" accept="audio/mp3" />
      <audio src="https://bandfishbucket.s3.us-east-1.amazonaws.com/Sublime+X+Stick+Figure++Feel+Like+That+feat+Bradley+Nowell.mp3"></audio>
      <br />
      <button
        onClick={() => {
          playAudio();
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          pauseAudio();
        }}
      >
        Pause
      </button>
      <input
        type="range"
        id="volume"
        min="0"
        max="1"
        step="0.1"
        value="1"
        onChange={() => setVolume()}
      />
    </div>
  );
}

export default App;
