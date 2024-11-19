import React, { Component } from "react";

class ClassObj extends Component {
  state = {
    name: "Tumi",
    Father: "Tomar Baba",
    FatherLow: "Sosur",
    prof: "content creating",
  };

  changeValue = () => {
    this.setState({
      prof: "Changed Profession",
    });
  };

  render() {
    return (
      <div>
        {"My name is " +
          this.state.name +
          ". My father's name is " +
          this.state.Father +
          ". Your father-in-law is " +
          this.state.FatherLow +
          ". My profession is " +
          this.state.prof}
        <br />
        <button onClick={this.changeValue}>Click me</button>
      </div>
    );
  }
}

export default ClassObj;
