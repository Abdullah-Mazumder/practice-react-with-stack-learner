import React from "react";

import "./app.css";

import Game from "./game";

const App = () => {
  return (
    <div className="container card card-body mt-5 p-5">
      <div className="app">
        <h2 className="text-center">Tic Tac Toe</h2>
        <Game />
      </div>
    </div>
  );
};

export default App;
