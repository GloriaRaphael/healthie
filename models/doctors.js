const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    default: '/uploads/defaultImg.png',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  licenceID: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type:String,
    default: null,
  },
  appointments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment',
    }
  ]
});

module.exports = mongoose.model('Doctors', DoctorSchema);