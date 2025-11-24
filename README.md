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


Testing :

http://localhost:3000/api-docs

Auth : auth/register
----------------------

postman request POST 'http://localhost:3000/auth/register' \
  --header 'Content-Type: application/json' \
  --body '{
  "name": "Shiva",
  "email": "shiva@example.com",
  "password": "123456",
  "age": 24
}'

Auth : auth/login
----------------------
postman request POST 'http://localhost:3000/auth/login' \
  --header 'Content-Type: application/json' \
  --body '{
  "email": "shiva@example.com",
  "password": "123456"
}
'

Profile: /profile (GET)
-----------------------
postman request 'http://localhost:3000/profile' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjQ4MzEwYjYzYzgwM2I2NjBmOGQzZCIsImVtYWlsIjoic2hpdmFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NjQwMDA2MjAsImV4cCI6MTc2NDAwNDIyMH0.5BAMxOh6WkMl2ORd_ZJ9FpxtYs4di4JLlhbVD4OBNkc' \
  --body '' \
  --auth-bearer-token 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjQ4MzEwYjYzYzgwM2I2NjBmOGQzZCIsImVtYWlsIjoic2hpdmFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NjQwMDA2MjAsImV4cCI6MTc2NDAwNDIyMH0.5BAMxOh6WkMl2ORd_ZJ9FpxtYs4di4JLlhbVD4OBNkc'


Profile: /profile (POST)
------------------------
  postman request PATCH 'http://localhost:3000/profile' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjQ4MzEwYjYzYzgwM2I2NjBmOGQzZCIsImVtYWlsIjoic2hpdmFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NjQwMDA2MjAsImV4cCI6MTc2NDAwNDIyMH0.5BAMxOh6WkMl2ORd_ZJ9FpxtYs4di4JLlhbVD4OBNkc' \
  --body '{

    "email": "shivani@example.com"
}' \
  --auth-bearer-token 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjQ4MzEwYjYzYzgwM2I2NjBmOGQzZCIsImVtYWlsIjoic2hpdmFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NjQwMDA2MjAsImV4cCI6MTc2NDAwNDIyMH0.5BAMxOh6WkMl2ORd_ZJ9FpxtYs4di4JLlhbVD4OBNkc'


  Profile : profile/avatar
-------------------------
postman request POST 'http://localhost:3000/profile/avatar' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjQ4MzEwYjYzYzgwM2I2NjBmOGQzZCIsImVtYWlsIjoic2hpdmFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NjQwMDA2MjAsImV4cCI6MTc2NDAwNDIyMH0.5BAMxOh6WkMl2ORd_ZJ9FpxtYs4di4JLlhbVD4OBNkc' 'avatar=@"/Users/apple/Downloads/git.jpg"' \
  --auth-bearer-token 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjQ4MzEwYjYzYzgwM2I2NjBmOGQzZCIsImVtYWlsIjoic2hpdmFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NjQwMDA2MjAsImV4cCI6MTc2NDAwNDIyMH0.5BAMxOh6WkMl2ORd_ZJ9FpxtYs4di4JLlhbVD4OBNkc'


  Profile: profile/:userId
--------------------------
postman request 'http://localhost:3000/profile?userId=67638a30a9e29f12345abc%3FuserId' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjQ4MzEwYjYzYzgwM2I2NjBmOGQzZCIsImVtYWlsIjoic2hpdmFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NjQwMDA2MjAsImV4cCI6MTc2NDAwNDIyMH0.5BAMxOh6WkMl2ORd_ZJ9FpxtYs4di4JLlhbVD4OBNkc' \
  --auth-bearer-token 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjQ4MzEwYjYzYzgwM2I2NjBmOGQzZCIsImVtYWlsIjoic2hpdmFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NjQwMDA2MjAsImV4cCI6MTc2NDAwNDIyMH0.5BAMxOh6WkMl2ORd_ZJ9FpxtYs4di4JLlhbVD4OBNkc'

