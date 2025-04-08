import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: ''
  }
}, {
  timestamps: { createdAt: true, updatedAt: false }
});


userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    return token;
  };
  
  userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
  userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
  };
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;