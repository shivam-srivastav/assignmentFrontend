import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <div className="main">
          <Link to="./showstudent">Show All Student </Link>
        </div>
        <div className="searching">
          <Link to="search">Searching Student</Link>
        </div>
        <div className="searching">
          <Link to="addstudent">Adding Dummy Data</Link>
        </div>
      </div>
    );
  }
}

export default Home;
