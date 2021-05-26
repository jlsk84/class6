import React from "react";
import Menu from "./components/Menu";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Pnf from "./components/Pnf";
import Update from "./components/Update";
import Create from "./components/Create";

export default function App(){
  return (
      <BrowserRouter>
        <Menu />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/details/:id" component={Details}/>
        <Route exact path="/create" component={Create} />
        <Route exact path="/update" component={Update} />
        <Route component={Pnf}/>
      </Switch>
      </BrowserRouter>
  );
}