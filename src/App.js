import React from "react";
import Menu from "./components/Menu";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Pnf from "./components/Pnf";
import Update from "./components/Update";
import Create from "./components/Create";
import { GlobalState } from "./GlobalState";

export default function App(){
  return (
      <BrowserRouter>
      <GlobalState.Consumer>
        {
          value => {
            console.log(value);
            return(
              <Switch>
              <Route exact path="/" render={(props) => <Menu><Home {...props} userAPI={value.userAPI} /> </Menu>} />
              <Route exact path="/home" render={(props) => <Menu><Home {...props} userAPI={value.userAPI} /> </Menu>} />
              <Route exact path="/details/:id" render={(props) => <Menu><Details {...props} userAPI={value.userAPI} /> </Menu>}/>
              <Route exact path="/create" render={(props) => <Menu><Create {...props} userAPI={value.userAPI} /> </Menu>} />
              <Route exact path="/update/:id" render={(props) => <Menu><Update {...props} userAPI={value.userAPI} /> </Menu>} />
              <Route render={(props) => <Menu><Pnf {...props} /> </Menu>}/>
            </Switch>
            )
          }
        }
      </GlobalState.Consumer>
      </BrowserRouter>
  );
}