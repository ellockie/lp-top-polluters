import React from "react";

import { ReactComponent as Continents } from "./svg/continents.svg";
import { ReactComponent as Header } from "./svg/header.svg";
import { HeadQuarters } from "./features/headQuarters/HeadQuarters";
import { PolluterNames } from "./features/polluterNames/PolluterNames";
import { HQConnectors } from "./features/hqConnectors/HQConnectors";
import { InfoBox } from "./features/infoBox/InfoBox";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="container">
          <Header />
          <PolluterNames />
          <Continents />
          <HeadQuarters />
          <HQConnectors />
          <InfoBox />
        </div>
      </header>
    </div>
  );
}

export default App;
