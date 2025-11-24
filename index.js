const express = require('express')
const app = express()
const cors = require('cors')
const authRouter = require('./src/routes/authRoutes/authRoutes')
const ProfileRouter = require('./src/routes/profile/profileRoutes')

app.use(express.json())
app.use(cors())
app.use('/auth', authRouter)
app.use('/profile',ProfileRouter)


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});