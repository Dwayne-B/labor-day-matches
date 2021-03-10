import React, { Component } from "react";
import Form from "../Form/Form";
import Roster from "../Roster/Roster";
import Match from "../Match/Match";
import Nav from "../Nav/Nav";
import split from "../../helpers/splitplayers.js";
// Router
// <BrowserRouter basename="/course-directory">
//use this to add a  base router when sereved from a sub directory
//use HashRouter instead much simpler
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// css
import "./app.css";

class App extends Component {
  //initialize state to hold the player list
  placeHolderData = [
    {
      team: "teamName",
      winToken: false,
      played: false,
      id: Math.random(),
    },
    {
      team: "aojnsj",
      winToken: false,
      played: false,
      id: Math.random(),
    },
    {
      team: "askdnlkann",
      winToken: false,
      played: false,
      id: Math.random(),
    },
    {
      team: "NIN",
      winToken: false,
      played: false,
      id: Math.random(),
    },
    {
      team: "obek",
      winToken: false,
      played: false,
      id: Math.random(),
    },
  ];
  state = {
    players: [],
    currentMatches: {},
    roster: [],
  };
  //Methods
  /**************
   ***
   *** addPlayer will handle adding the players to the players roster List
   ***PARAMS---- player1 , player2 , teamName
   *** use prevState to manipulate state indirectly returning {the player list including ...prevState.players and the new entry }
   ****/
  addPlayer = (teamName) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            team: teamName,
            winToken: false,
            played: false,
            id: prevState.players.length + 1,
          },
        ],
        roster: [
          ...prevState.roster,
          {
            team: teamName,
            winToken: false,
            played: false,
            id: prevState.players.length + 1,
          },
        ],
      };
    });
  };

  remove = (id) => {
    console.log(id);
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => {
          return p.id !== id;
        }),
      };
    });
  };
  win = (id, len) => {
    if (this.state.players.length === 2) {
      let winner = this.state.players.find((elm) => elm.id !== id).team;
      alert(winner + " is the winner");
    }
  };
  clearPlayer = () => {
    this.setState((prevState) => {
      return {
        players: [],
        currentMatches: {},
        roster: [],
      };
    });
  };

  match = () => {
    let [L1, L2] = split(this.state.players);

    this.addMatch(L1, L2);
  };
  addMatch = (L1, L2) => {
    this.setState((prevState) => {
      return {
        currentMatches: {
          L1,
          L2,
        },
      };
    });
  };
  // Render Mehtod
  render() {
    return (
      <Router>
        <Switch>
          <div id="app-container" className="container-fluid">
            <Route exact path="/">
              <div id="home-container" className="">
                <section id="form-container">
                  <Form addPlayer={this.addPlayer} />{" "}
                </section>{" "}
                <section id="roster-container">
                  <h2>Roster</h2>
                  <p>Teams: {this.state.players.length}</p>
                  <Roster players={this.state.roster} />
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.clearPlayer();
                    }}
                  >
                    Clear Players <i className="fa fa-minus-circle"></i>
                  </button>
                </section>
                <Nav id="nav" />
              </div>
            </Route>
            <Route exact path="/match">
              <section id="match-wrapper">
                <Match
                  remove={this.remove}
                  players={this.state.players}
                  matches={this.state.currentMatches}
                  match={this.match}
                  win={this.win}
                />
              </section>
              <Nav />
            </Route>
          </div>
        </Switch>
      </Router>
    );
  }
}
export default App;
