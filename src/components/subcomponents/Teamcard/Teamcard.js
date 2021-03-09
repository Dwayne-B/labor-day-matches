import React from "react";
import "./teamcard.css";
const Teamcard = (props) => {
  const team = props.teamName;

  return (
    <div id="show-card" className=" ">
      <h5 className=" content"> {team}</h5>
    </div>
  );
};
export default Teamcard;
