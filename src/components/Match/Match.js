import React, { Component } from "react";
import Matchup from "../subcomponents/Matchup/Matchup";
import "./match.css";

class Match extends Component {
  //create state called started set to false
  //state will change on button click to start the tournament
  state = {
    started: false,
  };
  startTournament = () => {
    this.props.match();
    this.setState((prevState) => {
      return {
        started: true,
      };
    });
  };

  render() {
    const m = this.props.matches.L1;
    let div;
    if (this.state.started) {
      div = (
        <div id="matches" className=" ">
          {m.map((playerData, index) => (
            <Matchup
              matches={this.props.matches}
              remove={this.props.remove}
              players={this.props.players}
              key={index}
              index={index}
              win={this.props.win}
            />
          ))}
        </div>
      );
    } else {
      div = <h1>Game Not Started</h1>;
    }

    return (
      <div id="match-container" className="mb-5 ">
        <button
          className="mb-5 btn btn-warning"
          onClick={() => this.startTournament()}
          id="start"
        >
          Generate Matches
        </button>
        {div}
      </div>
    );
  }
}

export default Match;
