import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  diskon: {
    type: Number,
    required: true,
  },
  tipe_diskon: {
    type: String,
    enum: ['persentase', 'fix diskon'],
    required: true,
  },
  ktp: {
    type: String,
    required: true,
  },
});

const Customer = mongoose.model('Customer', CustomerSchema);

export default Customer;
