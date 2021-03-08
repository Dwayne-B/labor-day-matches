import React, { Component, Fragment } from "react";
import "./form.css";
class Form extends Component {
  // FORM will have input fields so initialize local state to handle the defaul;t behavior of the form elements
  //init State
  //one property per input feild to collect multiple fields of data
  state = {
    teamName: "",
  };

  // Methods

  /**************
   ***
   *** HandleChange will handle any changes in the input fields and update the state to reflect the value
   ***PARAMS----event
   *** setState() of each state property {playerName, teamName} to the value of he e.target
   ****/
  handleChange = (e) => {
    this.setState({ teamName: e.target.value });
  };

  /**************
   ***
   *** handleSubmit will prevent the default actions from executing on the form element and
   *** this method will call the addPlayer method that has been passed down via props sending the current states playerName and TeamName
   ***PARAMS----event
   ***
   ****/
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.teamName);

    this.setState({ teamName: "" });
  };

  render() {
    return (
      <Fragment>
        <form
          autoComplete="off"
          id="signup-form"
          onSubmit={this.handleSubmit}
          className=""
        >
          <input
            name="TeamName"
            onChange={this.handleChange}
            value={this.state.teamName}
            type="text"
            placeholder="Team Name"
          />

          <input
            id="signup-btn"
            type="submit"
            value="submit"
            className="btn btn-warning "
          />
        </form>
      </Fragment>
    );
  }
}

export default Form;
