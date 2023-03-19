import Item from '../models/item.js';

// Get all items
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get an item by ID
export const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.json(item);
  } catch (error) {
    res.status(404).json({ message: 'Item not found' });
  }
};

// Create a new item
export const createItem = async (req, res) => {
  const item = new Item({
    nama_item: req.body.nama_item,
    unit: req.body.unit,
    stok: req.body.stok,
    harga_satuan: req.body.harga_satuan,
    barang: req.file.path,
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an item by ID
export const updateItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (item) {
      item.nama_item = req.body.nama_item;
      item.unit = req.body.unit;
      item.stok = req.body.stok;
      item.harga_satuan = req.body.harga_satuan;
      item.barang = req.file.path;

      const updatedItem = await item.save();
      res.json(updatedItem);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an item by ID
export const deleteItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (item) {
      await item.remove();
      res.json({ message: 'Item deleted' });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// module.exports = {
//   getAllItems,
//   getItemById,
//   createItem,
//   updateItemById,
//   deleteItemById,
// };
