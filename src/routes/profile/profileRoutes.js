
const express = require("express");
const ProfileRouter = express.Router();

const {handleProfile,handleProfileUpdates} = require('../../controllers/profileController/profileController')

ProfileRouter.get('/',handleProfile)
ProfileRouter.patch('/',handleProfileUpdates)
ProfileRouter.post('/avatar')
ProfileRouter.get("/avatar/:userId")

module.exports = ProfileRouter