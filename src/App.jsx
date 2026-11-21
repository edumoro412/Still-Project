import "./App.scss";
import { useState, useRef } from "react";
import Intro from "./pages/Intro/Intro";
function App() {
  const audioRef = useRef(null);
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [escena, setEscena] = useState("intro");

  const empezar = () => {
    const audio = audioRef.current;
    audio.volume = 0.3;
    audio.play().catch((error) => console.log("No se pudo reproducir:", error));
    setEscena(null);
  };

  return (
    <>
      <audio ref={audioRef} src="/music/piano.mp3" loop />
      {escena === "intro" && (
        <Intro
          nombre={nombre}
          setNombre={setNombre}
          edad={edad}
          setEdad={setEdad}
          onEmpezar={empezar}
        />
      )}
    </>
  );
}

export default App;
