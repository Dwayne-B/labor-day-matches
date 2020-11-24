import React, {
  Component
} from "react";
import Form from "./Form";
import Roster from "./Roster";
import Match from "./Match";
import split from "../helpers/splitplayers.js";
// Router
// <BrowserRouter basename="/course-directory">
//use this to add a  base router when sereved from a sub directory
//use HashRouter instead much simpler
import {
  BrowserRouter as Router
  Route,
  Link
} from "react-router-dom";
// css
import "./../css/app.css";

class App extends Component {
  //initialize state to hold the player list


  state = {
    players: [],

    currentMatches: {},
    roster: []
  };
  //Methods
  /**************
   ***
   *** addPlayer will handle adding the players to the players roster List
   ***PARAMS---- player1 , player2 , teamName
   *** use prevState to manipulate state indirectly returning {the player list including ...prevState.players and the new entry }
   ****/
  addPlayer = (p1, p2, teamName) => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            playerNames: [p1, p2],
            team: teamName,
            winToken: false,
            played: false,
            id: prevState.players.length + 1
          }
        ],
        roster: [...prevState.roster,
          {
            playerNames: [p1, p2],
            team: teamName,
            winToken: false,
            played: false,
            id: prevState.players.length + 1
          }
        ]
      };
    });

  };

  remove = (id) => {
    console.log(id);
    this.setState(prevState => {
      return {
        players: prevState.players.filter((p) => {
          return p.id !== id
        })
      }
    })
  }
  win = (id, len) => {
    if (this.state.players.length === 2) {
      let winner = this.state.players.find(elm => elm.id !== id).team;
      alert(winner + ' is the winner');

    }
  }

  match = () => {

    let [L1, L2] = split(this.state.players);

    this.addMatch(L1, L2);
  };
  addMatch = (L1, L2) => {
    this.setState(prevState => {
      return {
        currentMatches: {
          L1,
          L2
        }
      };
    });
  };
  // Render Mehtod
  render() {
    return ( <
      Router > < div id = 'app' >
      <
      Route path = '/'
      exact >
      <
      section id = "reg" >
      <
      Form addPlayer = {
        this.addPlayer
      }
      num = {
        this.state.players.length
      }
      /> <
      Link to = '/roster' > < button onClick = {
        this.localState
      }
      className = 'start' > START < i class = "fa fa-arrow-circle-o-right" >
      < /i></button > < /Link>

      <
      /section> < /
      Route > <
      Route path = '/roster'
      exact >
      <
      section id = "ros" >
      <
      span className = 'ros-links' >
      <
      Link to = '/' > < button > Add Players < /button></Link >
      <
      Link to = '/match' > < button > Start < /button></Link >
      <
      /span> <
      Roster players = {
        this.state.roster
      }
      />

      <
      /section> < /
      Route > <
      Route path = '/match' >
      <
      section id = "match" >
      <
      Match remove = {
        this.remove
      }
      players = {
        this.state.players
      }
      matches = {
        this.state.currentMatches
      }
      match = {
        this.match
      }
      win = {
        this.win
      }
      /> <
      Link to = '/' > < button > Restart < /button></Link >
      <
      /section> < /
      Route > <
      /div> < /
      Router >
    );
  }
}
export default App;