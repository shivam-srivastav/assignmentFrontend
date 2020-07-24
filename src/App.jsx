import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import AddStudent from "./Component/AddStudent/AddStudent";
import ShowStudent from "./Component/ShowStudent/ShowStudent.jsx";
import Home from "./Component/Home/Home.jsx";
import Search from "./Component/Search/Search.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path="/addstudent">
          <AddStudent />
        </Route> */}
        <Route exact path="/showstudent">
          <ShowStudent />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
