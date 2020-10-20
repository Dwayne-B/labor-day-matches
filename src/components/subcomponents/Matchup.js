import React from "react";
import "./../../css/sub/matchup.css";
const Matchup = props => {
// console.log(props.matches.L2[props.index].id);
// console.log(props.matches.L1[props.index].id);


  return (
    <div id="match-border">
      <div id="center" className="d-flex flex-column align-items-center">
      <span
        onClick={()=>{props.remove(props.matches.L2[props.index].id)

props.win(props.matches.L2[props.index].id,props.players.length)
        }}

        className="align-self-start bttn btn btn-danger"
      >
      {props.matches.L1[props.index].team}
      </span>
      <span
        onClick={()=>{props.remove(props.matches.L1[props.index].id)


        props.win(props.matches.L1[props.index].id,props.players.length)


      }}
        className="align-self-end bttn btn btn-info"
      >
      {props.matches.L2[props.index].team}
      </span>

      </div>
    </div>
  );
};

export default Matchup;
// onClick={props.win}

//
//
