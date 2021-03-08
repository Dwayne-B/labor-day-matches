import React from "react";
import "./matchup.css";
const Matchup = (props) => {
  // console.log(props.matches.L2[props.index].id);
  // console.log(props.matches.L1[props.index].id);
  const winner = () => {};
  return (
    <div id="match-border">
      <span
        onClick={() => {
          props.remove(props.matches.L2[props.index].id);

          props.win(props.matches.L2[props.index].id, props.players.length);
        }}
        className="btn"
      >
        {props.matches.L1[props.index].team}
      </span>
      <span
        onClick={() => {
          props.remove(props.matches.L1[props.index].id);

          props.win(props.matches.L1[props.index].id, props.players.length);
        }}
        className="btn "
      >
        {props.matches.L2[props.index].team}
      </span>
    </div>
  );
};

export default Matchup;
// onClick={props.win}

//
//
