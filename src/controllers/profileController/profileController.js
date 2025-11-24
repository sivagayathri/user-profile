const jwt = require('jsonwebtoken');
const User = require('../../schema/userSchema');

exports.handleProfile = async (req, res) => {
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

exports.handleProfileUpdates = async (req, res) => {
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
