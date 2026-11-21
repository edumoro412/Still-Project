import "./App.scss";
import { LockKeyhole } from "lucide-react";
import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  console.log(nombre, " este es el nombre");
  return (
    <div className="app">
      <h1 className="app__title">Still Project</h1>
      <input
        className="app__input"
        value={nombre}
        placeholder="TU NOMBRE"
        onChange={(e) => {
          setNombre(e.target.value);
        }}
      />
      <p className="app__aviso">
        <LockKeyhole size={15} className="app__aviso--icono" />
        Tus datos no salen de tu dispositivo ni se guardan en ningún servidor.
      </p>
    </div>
  );
}

export default App;
