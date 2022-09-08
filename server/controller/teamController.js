// ROUTE : "/"
// bring in DB methods to be able to use them as enpoints are pinged
/**
 * **
 * * Controllers -- handles the functionality behing req being made. 
 * * this is where any additonal middleware or logic is done 
 * */
const Team = require("../model/teamModel");


const asyncHandler = require('express-async-handler')

const getTeam = asyncHandler(async (req, res) => {

  const x = await Team.find();
  res.json(x);

});
const addTeam = (req, res) => {
  req.body.text = "hello world";
  res.json(req.body.text)
}
const updateTeam = (req, res) => {
  res.json({ teamName: "update" })
}
const deleteTeam = (req, res) => {
  res.json({ teamName: "delete" })
}


module.exports = {
  getTeam,
  addTeam,
  updateTeam,
  deleteTeam
}