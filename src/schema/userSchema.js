const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
      name: {
        type: String,
        required: true,
    },
        email: {
        type: String,
        required: true,
         unique: true
    },
        age: {
        type: Number,
        required: true,
    },
        profilePicture: {
        type: String,
        required: true,
    },
        password: {
       type: String,
        required: true, 
    },
        createdAt: {
       type: Date,
       default: Date.now
  }
});

const user = mongoose.model('user',UserSchema);

module.exports=user