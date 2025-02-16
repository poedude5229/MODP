import { useState } from "react";

const audio = document.getElementById("audio");

function App() {
  const [modeSelect, setModeSelect] = useState(0);

  return (
    <div className="player">
      <input type="file" accept="audio/mp3" />
    </div>
  );
}

export default App;
