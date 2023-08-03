import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      minlength: 1,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    //   sessions: [
    //     {
    //       token: {
    //         type: String,
    //         required: true,
    //       },
    //       expiresAt: {
    //         type: Number,
    //         required: true,
    //       },
    //     },
    //   ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', UserSchema);

export default User;
