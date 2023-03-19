import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  nama_item: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    enum: ['kg', 'pcs'],
    required: true,
  },
  stok: {
    type: Number,
    required: true,
  },
  harga_satuan: {
    type: Number,
    required: true,
  },
  barang: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model('Item', ItemSchema);

export default Item;
