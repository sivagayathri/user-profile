User Profile Manager (Node.js + Express + MongoDB + JWT)


Features
----------------
Authentication
-----------------
POST /auth/register – Create a new user
POST /auth/login – Login and receive a JWT token

Profile Management
-----------------
GET /profile – Get user's profile
PATCH /profile – Update user's profile
POST /profile/avatar – Upload profile picture
GET /profile/avatar/:userId – Fetch user's avatar


Tech Stack
-----------------
Node.js
Express.js
Mongoose (MongoDB Atlas)
JWT (jsonwebtoken)
bcryptjs
multer (file upload)
Docker


Setup 
----------------
git clone https://github.com/sivagayathri/user-profile.git
npm install
npm start




Docker
------------------
docker build -t user-profile .
docker run -p 3000:3000 user-profile
