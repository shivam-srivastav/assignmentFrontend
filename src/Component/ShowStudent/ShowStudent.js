import React from "react";
import axios from "axios";
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
  onPrev = () => {
    if (this.state.prev !== 0) {
      this.setState({
        prev: this.state.prev - 1,
        current: this.state.current - 1,
        next: this.state.next - 1,
      });
    }
  };
  onNext = () => {
    if (this.state.next <= this.state.person.length / 10 + 1) {
      this.setState({
        prev: this.state.prev + 1,
        current: this.state.current + 1,
        next: this.state.next + 1,
      });
    }
  };

  componentDidMount() {
    axios.get(`http://localhost:4000/api/showall`).then((res) => {
      const persons = res.data;
      console.log(persons.data);
      this.setState({
        person: persons.data,
      });
    });
  }

  render() {
    return (
      <div className="showStudent">
        <h1>List of All Student</h1>
        {this.state.person.map((student, key) => {
          if (key >= this.state.prev * 10 && key < this.state.current * 10) {
            return (
              <li>
                <div>Name:{student.name}</div>
                <div> Key Index :{key}</div>
                <div>Class:{student.classs}</div>
                <div>Roll No:{student.roll_no}</div>
                <div>Email:{student.email}</div>
              </li>
            );
          }
        })}
        <div className="buttons">
          <button onClick={this.onPrev}>prev</button>
          <button>
            ...
            <span onClick={this.prev}>{this.state.prev}</span>
            <span> {this.state.current}</span>
            <span onClick={this.onNext}> {this.state.next}</span>
            ...
          </button>
          <button onClick={this.onNext}>next</button>
        </div>
      </div>
    );
  }
}

export default ShowStudent;
