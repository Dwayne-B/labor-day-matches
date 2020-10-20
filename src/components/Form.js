import React, { Component } from "react";
import "./../css/form.css";
class Form extends Component {
  // FORM will have input fields so initialize local state to handle the defaul;t behavior of the form elements
  //init State
  //one property per input feild to collect multiple fields of data
  state = {
    p1: "",
    p2: "",
    teamName: ""
  };

  // Methods

  /**************
   ***
   *** HandleChange will handle any changes in the input fields and update the state to reflect the value
   ***PARAMS----event
   *** setState() of each state property {playerName, teamName} to the value of he e.target
   ****/
  handleChange = e => {
    if (e.target.getAttribute("name") === "p1") {
      this.setState({ p1: e.target.value });
    } else if (e.target.getAttribute("name") === "p2") {
      this.setState({ p2: e.target.value });
    } else if (e.target.getAttribute("name") === "TeamName") {
      this.setState({ teamName: e.target.value });
    }
  };

  /**************
   ***
   *** handleSubmit will prevent the default actions from executing on the form element and
   *** this method will call the addPlayer method that has been passed down via props sending the current states playerName and TeamName
   ***PARAMS----event
   ***
   ****/
  handleSubmit = e => {
    e.preventDefault();
    this.props.addPlayer(this.state.p1, this.state.p2, this.state.teamName);

    this.setState({ p1: "", p2: "", teamName: "" });
  };

  render() {
    return (
      <div
        id="form-cnt"
        className="h-100 d-flex justify-content-center align-items-center"
      >
        <form
          autoComplete="off"
          id="signup"
          onSubmit={this.handleSubmit}
          className="d-flex flex-column "
        >
          <input
            name="p1"
            onChange={this.handleChange}
            value={this.state.p1}
            type="text"
            placeholder="Player_1"
          />
          <input
            name="p2"
            onChange={this.handleChange}
            value={this.state.p2}
            type="text"
            placeholder="Player_2"
          />
          <input
            name="TeamName"
            onChange={this.handleChange}
            value={this.state.teamName}
            type="text"
            placeholder="Team"
          />

          <input id="signup-btn" type="submit" value="SUBMIT" />
          <p>Teams: {this.props.num}</p>
        </form>
      </div>
    );
  }
}

export default Form;
