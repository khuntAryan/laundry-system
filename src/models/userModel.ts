import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },  
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNumber: {
    type: String,
    default: null
  },
  hostel: {
    type: String,
    enum: ['Mano', 'Mulai', 'Paari'],
    required: true,
  },
  submissionDate: {
    type: Date,
    default: null,
  },
  expectedRetrievalDate: {
    type: Date,
    default: null,
  },
  status: {
    type: String,
    enum: ['Pending', 'In Process', 'Completed', 'Ready for Pickup'],
    default: 'Pending',
  },
});

export const User = mongoose.models.User ||mongoose.model('User',userSchema)