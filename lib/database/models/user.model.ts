import { Schema, model, models, Document } from 'mongoose';

interface IUser extends Document {
  clerkId: string;
  email: string;
  username: string;
  photo: string;
  firstName: string;
  lastName: string;
  planId: number;
  creditBalance: number;
}

const userSchema = new Schema<IUser>({
  clerkId: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  photo: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  planId: {
    type: Number,
    default: 1
  },
  creditBalance: {
    type: Number,
    default: 10
  },
});

const UserModel = models?.User || model<IUser>('User', userSchema);

export default UserModel;