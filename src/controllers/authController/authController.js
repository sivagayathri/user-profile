
const user = require('../../schema/userSchema')
const bycrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const  { name, id, email, password, profile } = req.body
    try {

        const hashedPassword = await bcrypt.hash(password, 10)

         await user.create({
            name, id, email, password:hashedPassword, profile 
        })

        res.send(200).json('user registeration successfully')
    } catch (error) {
        res.send(500).json({message:'cannot create user'})
    }
}

const login = async (req, res) => {
  const  {email, password } = req.body
    try {
       const user =   await user.findOne({email})
        
        const isMatch = await bycrypt.compare(password, user.password)
        if (!isMatch) {
            res.send(400).json('invalid credentials')
        }
          token = jwt.sign(
                {
                    userId: existingUser.id,
                    email: existingUser.email
                },
                `${process.env.SECRET}`,
                { expiresIn: "1h" }
            );

        res.send(200).json('user registeration successfully')
    } catch (error) {
        res.send(500).json({message:'cannot create user'})
    }
}

module.exports = { register, login }


