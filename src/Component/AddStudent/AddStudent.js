import React from "react";
import axios from "axios";
import { data } from "./dummy";

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }
  onClickHandle = (event) => {
    data.map((person, i) => {
      console.log(person);
      axios
        .post("http://localhost:4000/api/adddata", { person })
        .then((res) => {
          const person = res.data;
          console.log(person);
        });
    });
    this.setState({ status: true });
  };

  render() {
    return (
      <div>
        <h1>Add Student</h1>
        <div onClick={this.onClickHandle}>add dummy data</div>
        {this.state.status && <div>Dummy Data is loadad sucessfully</div>}
      </div>
    );
  }
}

export default AddStudent;
