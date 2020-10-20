import React, { Component } from "react";
import Teamcard from "./subcomponents/Teamcard";
import "./../css/roster.css";
class Roster extends Component {

  render() {

    return (
      //return a teamCard for every object in the playerList State
      <div id="roster" className="d-flex justify-content-center align-items-center">
      <div  className=" ros-box d-flex flex-wrap justify-content-between">
      {this.props.players.map((playerData, index) => (
        <Teamcard
          name={playerData.playerNames}
          teamName={playerData.team}
          key={index}
          id={playerData.id}
          players={playerData}
        />
      ))}
      </div>

      </div>
    );
  }
}
export default Roster;


// <div id="roster" className="d-flex flex-wrap justify-content-between">
//   {this.state.roster.map((playerData, index) => (
//     <Teamcard
//       name={playerData.playerNames}
//       teamName={playerData.team}
//       key={index}
//       id={playerData.id}
//       players={playerData}
//     />
//   ))}
// </div>
