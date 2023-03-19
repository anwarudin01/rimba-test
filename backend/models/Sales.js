import mongoose from 'mongoose';

const SalesSchema = new mongoose.Schema({
  code_transaksi: {
    type: String,
    required: true,
  },
  tanggal_transaksi: {
    type: Date,
    default: Date.now,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  item: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
      },
      qty: {
        type: Number,
        default: 1,
      },
    },
  ],
  total_diskon: {
    type: Number,
    required: true,
  },
  total_harga: {
    type: Number,
    required: true,
  },
  total_bayar: {
    type: Number,
    required: true,
  },
});

const Sales = mongoose.model('Sales', SalesSchema);

export default Sales;
