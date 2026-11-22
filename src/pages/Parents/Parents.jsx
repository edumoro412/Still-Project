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

  const porcentaje = Math.min(100, Math.round((horas / 47500) * 100));
  const superaLaMedia = horas >= 47500;
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
      {superaLaMedia ? (
        <>
          {" "}
          <h2 className="parents__title">
            Ya habéis pasado juntos más tiempo del que la estadística esperaba.
          </h2>
          <h2 className="parents__title">
            Todo lo que venga ahora es{" "}
            <span className="parents__title--span">tiempo extra</span>.
          </h2>
        </>
      ) : (
        <h2 className="parents__title">
          Eso es, más o menos, el{" "}
          <span className="parents__title--span">{porcentaje}%</span> de todo el
          tiempo que vais a pasar juntos.
        </h2>
      )}
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
