// import split from "./splitplayers.js";

const createMatch = (L1, L2) => {
  let singleMatch = [];

  //Create Matches

  for (let i = 0; i < L1.length; i++) {
    singleMatch.push([L1[i], L2[i]]);
  }
  return singleMatch;
}; //END GEN MATCH

export default createMatch;
