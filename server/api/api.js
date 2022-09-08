const express = require('express');
const { getTeam, addTeam, updateTeam, deleteTeam } = require('./../controller/teamController');
const router = express.Router();

router.get('/', getTeam);
router.post('/', addTeam);
router.put('/', updateTeam);
router.delete('/', deleteTeam);


module.exports = router;