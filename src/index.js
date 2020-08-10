import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const tren = [
  {
    pregunta: "Which gene is the involved on Replication of SHH-1",
    incisos: [" A: Uno", " B: Dos", " C: Tres"]
  },
  {
    pregunta: "What does OBGYN means?",
    incisos: [" A: Uno-2", " B: Dos-3", " C: Tres-4"]
  },

  {
    pregunta: "Mention Cushing Triad",
    incisos: [" A: Uno-3", " B: Dos-3", " C: Tres-3"]
  },
  {
    pregunta: "How many glucose a 1ml of blood of a new-born baby has?",
    incisos: [" A: Uno-4", " B: Dos-4", " C: Tres-4", "D: Cuatro-4"]
  }
];

const Prueba = () => {
  const [contador, cambiarC] = useState(0);

  var mapear = (contador) => {
    var count = contador;

    var incisos = tren[count].incisos.map((item, index) => {
      return <li>{item}</li>;
    });

    return incisos;
  };

  return (
    <div>
      <div>Hola</div>
      <p>{tren[contador].pregunta}</p>
      <ul>{mapear(contador)}</ul>
      {/* {The function above works automatically, because, each
      time that you re-render, that function will trigger automatically,
      rememeber that his happens because we put the function name and the parenthesis
      So, this is one of the few cases were you'd exploit this automatic
      behavior} */}

      {contador === tren.length - 1 ? (
        <article> </article>
      ) : (
        <button onClick={() => cambiarC((prevC) => prevC + 1)}>
          Siguiente
        </button>
      )}

      <button onClick={() => cambiarC((prevC) => prevC * 0)}>
        {" "}
        Reiniciar{" "}
      </button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Prueba />
  </React.StrictMode>,
  rootElement
);
