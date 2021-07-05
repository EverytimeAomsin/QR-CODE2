import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Editmenu from "./components/pages/Editmenu";
import Monitor from "./components/pages/Monitor";
import AddMenu from "./components/pages/Addmenu"
import Admin from "./components/pages/Admin";

export default () => (

  <Router>
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/Menus/edit/:Id" component={Editmenu} />
        <Route  path="/Admin" component={Admin} />
        <Route  path="/:id" component={Monitor} />
        <Route  path="/AddMenu" component={AddMenu} />
       

        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

