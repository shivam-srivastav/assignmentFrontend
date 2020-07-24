import React from "react";
import "./style.css";
import { search } from "../../Api/Api";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: false,
      prev: 0,
      current: 1,
      next: 2,
      name: "",
      person: [],
    };
  }

  onInputText = (event) => {
    this.setState({ name: event.target.value });
  };

  onSearch = async () => {
    const data = {
      name: this.state.name,
      prev: this.state.prev,
      current: this.state.current,
    };
    if (this.state.name) {
      const person = await search(data);
      console.log(person.data);
      this.setState({ person: person.data, pagination: true });
    }
  };
  //onClick Prev button data get refreshed from api
  onPrev = async () => {
    if (this.state.prev) {
      await this.setState({
        prev: this.state.prev - 1,
        current: this.state.current - 1,
        next: this.state.next - 1,
      });

      //here we are getting data from api
      this.onSearch();
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

      //here we are getting data from api
      this.onSearch();
    }
  };

  render() {
    return (
      <div className="search">
        <h1>Searching User in database </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name of student to search"
          onChange={this.onInputText}
        />
        {this.state.name}
        <div className="buttons" onClick={this.onSearch}>
          Search
        </div>
        <div>
          Show Searching result {this.state.person.length}
          <div className="results">
            {this.state.person.map((student, index) => {
              return (
                <li>
                  {" "}
                  <span key={index}>Index:{index} </span>Name:{student.name}
                </li>
              );
            })}
          </div>
        </div>

        {this.state.pagination && (
          <div className="buttons">
            <button onClick={this.onPrev}>prev</button>

            <span onClick={this.onPrev}>{this.state.prev}</span>
            <span> {this.state.current}</span>
            <span onClick={this.onNext}> {this.state.next}</span>
            <button onClick={this.onNext}>next</button>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
