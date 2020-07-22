import React from "react";
import axios from "axios";
import "./style.css";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      person: [],
    };
  }
  onSearch = async (event) => {
    this.setState({ name: event.target.value });
    const data = { name: this.state.name };
    await axios
      .post("http://localhost:4000/api/searchname", data)
      .then((res) => {
        const person = res.data.data;
        this.setState({ person });
        console.log(res.data.data);
      });
  };

  render() {
    return (
      <div className="search">
        <h1>Searching User in database </h1>
        <form onClick={this.onSearch} onSubmit={this.onSearch}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name of student to search"
          />
          {this.state.name}
          <div className="buttons">Search</div>
        </form>
        <div>Show Searching result {this.state.person.length}</div>

        {this.state.person.map((student, index) => {
          return (
            <div>
              <li>
                {" "}
                <span>Index:{index} </span>Name:{student.name}
              </li>
              <li></li>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Search;
