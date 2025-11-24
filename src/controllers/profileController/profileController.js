const jwt = require('jsonwebtoken');
const User = require('../../schema/userSchema');
const path = require("path");


const handleProfile = async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).json({ message: "Token missing" });

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.SECRET);

        const data = await User.findById(decoded.id).select("-password");
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ message: "Error fetching profile" });
    }
};

const handleProfileUpdates = async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).json({ message: "Token missing" });

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.SECRET);

        const updatedUser = await User.findByIdAndUpdate(
            decoded.id,
            req.body,
            { new: true }
        ).select("-password");

        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(500).json({ message: "Cannot update profile" });
    }
};


const uploadAvatar = async (req, res) => {
  try {
    const userId = req.user.id;
    const fileName = req.file.filename;

    await User.findByIdAndUpdate(userId, {
      profilePicture: fileName
    });

    res.json({
      message: "Avatar uploaded successfully",
      avatar: fileName
    });
  } catch (error) {
    res.status(500).json({ message: "Avatar upload failed" });
  }
};

const getAvatar = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);    
    const imagePath = path.join(__dirname, "../../../uploads", user.profilePicture);    

    res.sendFile(imagePath);
  } catch (error) {
    res.status(404).json({ message: "Avatar not found" });
  }
};


module.exports = {handleProfile,handleProfileUpdates,uploadAvatar,getAvatar}
