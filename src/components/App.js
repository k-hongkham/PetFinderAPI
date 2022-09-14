import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Main from "./MAIN/Main";

const App = () => {
  return (
    <Router>
      <main>
        <h1>hello world</h1>
        <Main />
      </main>
    </Router>
  );
};

export default App;
