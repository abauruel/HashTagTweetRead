import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./route";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
