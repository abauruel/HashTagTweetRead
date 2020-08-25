import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import PainelTweets from "./page/PainelTweets";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/painel" component={PainelTweets} />
    </Switch>
  );
}
