import React from "react";
import "./../../css/sub/teamcard.css";
const Teamcard = (props) => {
  const [p1, p2] = props.name;
  const team = props.teamName;

  return (
    <div id="show-card" className=" " style={{ backgroundColor: "white" }}>
      <div className="team">
        <h6 className="content ">
          {p1} / {p2}
        </h6>
        <h5 className=" content"> {team}</h5>
      </div>
    </div>
  );
};
export default Teamcard;
