
const express = require("express");
const ProfileRouter = express.Router();

const {handleProfile,handleProfileUpdates,uploadAvatar,getAvatar} = require('../../controllers/profileController/profileController')

ProfileRouter.get('/',handleProfile)
ProfileRouter.patch('/',handleProfileUpdates)
ProfileRouter.post("/avatar", authMiddleware, upload.single("avatar"), uploadAvatar);
ProfileRouter.get("/avatar/:userId", getAvatar);

module.exports = ProfileRouter