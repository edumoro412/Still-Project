import "./Parents.scss";
function Parents({ nombre, edad, onSemanas }) {
  // eslint-disable-next-line no-useless-assignment
  let horas = null;
  if (edad <= 18) {
    horas = edad * 1825;
  } else if (edad <= 30) {
    horas = 32850 + (edad - 18) * 900;
  } else {
    horas = 43650 + (edad - 30) * 150;
  }

  const porcentaje = (horas / 47500) * 100;
  return (
    <div className="parents">
      <h2 className="parents__title">
        <span className="parents__title--span">{nombre.toUpperCase()}</span> ,
        tienes <span className="parents__title--span">{edad}</span> años.
      </h2>
      <h2 className="parents__title">
        Desde que naciste, has pasado unas{" "}
        <span className="parents__title--span">{horas}</span> horas con tus
        padres.
      </h2>
      <h2 className="parents__title">
        Eso es, más o menos, el{" "}
        <span className="parents__title--span"> {porcentaje.toFixed(2)}%</span>{" "}
        de todo el tiempo que vais a pasar juntos.
      </h2>
      <button className="parents__button" onClick={onSemanas}>
        Siguiente
      </button>
      <small className="parents__advertencia">
        Estimación basada en promedios en España. No es una predicción.
      </small>
    </div>
  );
}

export default Parents;
