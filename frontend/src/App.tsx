import React, { useState, useEffect } from "react";

import PainelTweets from "./page/PainelTweets";
import GlobalStyles from "./styles/global";
import Dashboard from "./page/Dashboard";

function App() {
  return (
    <>
      <Dashboard />
      <GlobalStyles />
    </>
  );
}

export default App;
