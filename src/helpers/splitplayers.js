import shuffle from "./shuffle.js";

//split list into A/B
const split = (players) => {
  let pLA = [];
  let pLB = [];
  for (var i = 0; i < players.length; i++) {
    //if even
    if (i % 2 === 0) {
      pLA.push(players[i]);
    } else if (i % 2 !== 0) {
      //if odd
      pLB.push(players[i]);
    }
  }
  if (pLA.length > 0 && pLB.length > 0) {
    if (pLA.length > pLB.length) {
      pLB.push({
        team: "BYE",
        winToken: false,
        played: false,
        id: 100,
      });
    } else if (pLA.length < pLB.length) {
      pLA.push({
        team: "BYE",
        winToken: false,
        played: false,
        id: 100,
      });
    }
  }
  return [shuffle(pLA), shuffle(pLB)];
};

export default split;
