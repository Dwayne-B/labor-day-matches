import React, { Component } from "react";
import Matchup from "./subcomponents/Matchup";
import "./../css/match.css";

class Match extends Component {
  //create state called started set to false
  //state will change on button click to start the tournament
  state = {
    started: false
  };
  startTournament = () => {
    this.props.match();
    this.setState(prevState => {
      return {
        started: true
      };
    });
  };

  render() {
    const m = this.props.matches.L1
    let div;
    if (this.state.started) {
       div =   <div
          id="matches"
          className=" d-flex flex-wrap flex-column justify-content-around text-center"
        >
          {m.map((playerData, index) => (
            <Matchup
            matches ={this.props.matches}
              remove={this.props.remove}
              players={this.props.players}
              key={index}
              index={index}
              win ={this.props.win}

            />
          ))}
        </div>

    }else{
       div = <h1>Not Started</h1>
    }

    return (
      <div
        id="match-cnt"
        className=" d-flex flex-column justify-content-center"
      >
      <button onClick={()=>this.startTournament()} id="start">
        Generate Match
      </button>
      {div}
      </div>
    );
  }
}

export default Match;
