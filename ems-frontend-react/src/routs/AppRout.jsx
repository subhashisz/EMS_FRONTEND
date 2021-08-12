import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import ListEmployeeComponent from "../components/ListEmployeeComponent";
import CreateEmployeeComponent from "../components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "../components/UpdateEmployeeComponent";

 class AppRout extends Component {
  render() {
    return (
      <Router>
        <HeaderComponent />
        <Switch>
          <div className="container">
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route   path="/add-employee"  component={CreateEmployeeComponent}></Route>
            <Route path="/update-employee/:id"  component={UpdateEmployeeComponent}></Route>
          </div> 
        </Switch>
        <FooterComponent />
      </Router>   
    );
  }
}

export default AppRout;