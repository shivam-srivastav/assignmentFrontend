import React from "react";
import { showDataApi } from "../../Api/Api";
import "./style.css";

class ShowStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prev: 0,
      current: 1,
      next: 2,
      person: [],
    };
  }

  //onClick Prev button data get refreshed from api
  onPrev = async () => {
    if (this.state.prev) {
      this.setState({
        prev: this.state.prev - 1,
        current: this.state.current - 1,
        next: this.state.next - 1,
      });

      //here we are getting data from api
      const points = {
        prev: this.state.prev,
        current: this.state.current,
      };
      const person = await showDataApi(points);
      this.setState({ person: person.data });
    }
  };

  //onClick Prev button data get refreshed from api
  onNext = async () => {
    if (this.state.person.length) {
      this.setState({
        prev: this.state.prev + 1,
        current: this.state.current + 1,
        next: this.state.next + 1,
      });
    }

    //here we are getting data from api
    const points = {
      prev: this.state.prev,
      current: this.state.current,
    };
    const person = await showDataApi(points);
    await this.setState({ person: person.data });
  };

  //data is mapped to the state of the component before page gets loaded
  async componentDidMount() {
    const points = {
      prev: this.state.prev,
      current: this.state.current,
    };
    const person = await showDataApi(points);
    this.setState({ person: person.data });
  }

  render() {
    const data = this.state.person;
    console.log("data", data);
    return (
      <div className="showStudent">
        <h1>List of All Student</h1>
        <ul>
          {data.map((student) => {
            return (
              <li>
                <p>Name:{student.name}</p>
                <p> Id :{student._id}</p>
                <p>Class:{student.classs}</p>
                <p>Roll No:{student.roll_no}</p>
                <p>Email:{student.email}</p>
              </li>
            );
          })}
        </ul>

        <div className="buttons">
          <button onClick={this.onPrev}>prev</button>

          <span onClick={this.onPrev}>{this.state.prev}</span>
          <span> {this.state.current}</span>
          <span onClick={this.onNext}> {this.state.next}</span>
          <button onClick={this.onNext}>next</button>
        </div>
      </div>
    );
  }
}

export default ShowStudent;
