import "./Intro.scss";
import { LockKeyhole } from "lucide-react";

function Intro({ nombre, setNombre, edad, setEdad, onEmpezar }) {
  return (
    <div className="app">
      <div className="app__puntos" aria-hidden="true" />
      <span className="app__pulso" aria-hidden="true" />
      <h1 className="app__title">Still Project</h1>

      <div className="app__campos">
        <input
          type="text"
          className="app__input"
          value={nombre}
          placeholder="TU NOMBRE"
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="number"
          className="app__input app__input--edad"
          value={edad}
          min={1}
          max={80}
          placeholder="TU EDAD"
          onChange={(e) => setEdad(e.target.value)}
        />
      </div>

      <button
        className="app__boton"
        onClick={onEmpezar}
        disabled={nombre.trim() === "" || edad === ""}
      >
        Empezar
      </button>

      <p className="app__aviso">
        <LockKeyhole size={15} className="app__aviso--icono" />
        Tus datos no salen de tu dispositivo ni se guardan en ningún servidor.
      </p>
    </div>
  );
}

export default Intro;
