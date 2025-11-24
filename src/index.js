const express = require('express')
const app = express()
const cors = require('cors')
const authRouter = require('./routes/authRoutes')
const ProfileRouter = require('./routes/profile/profileRoutes')

app.use(express.json())
app.use(cors())
app.use('/auth', authRouter)
app.use('/profile',ProfileRouter)


app.listen(3000, () => {
    console.log(`server listening to ${PORT}`);
    
})