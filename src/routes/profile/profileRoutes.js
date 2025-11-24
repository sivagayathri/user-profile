
const express = require("express");
const ProfileRouter = express.Router();
const { authMiddleware } = require("../../middleware/auth");
const upload = require("../../middleware/upload");

const {handleProfile,handleProfileUpdates,uploadAvatar,getAvatar} = require('../../controllers/profileController/profileController')

/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Get logged-in user's profile
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile
 */
ProfileRouter.get('/', handleProfile)

/**
 * @swagger
 * /profile:
 *   patch:
 *     summary: Update profile of logged-in user
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Updated profile
 */

ProfileRouter.patch('/', handleProfileUpdates)

/**
 * @swagger
 * /profile/avatar:
 *   post:
 *     summary: Upload user avatar (.png/.jpg)
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               avatar:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Avatar uploaded
 */
ProfileRouter.post("/avatar", authMiddleware, upload.single("avatar"), uploadAvatar);


/**
* @swagger
 * /profile/avatar/{userId}:
 *   get:
 *     summary: Get user's avatar by userId
 *     tags: [Profile]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns image file
 */
ProfileRouter.get("/avatar/:userId", getAvatar);

module.exports = ProfileRouter