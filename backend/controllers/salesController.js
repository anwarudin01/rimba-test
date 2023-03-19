import Sales from '../models/sales.js';

// Post
export const createSales = async (req, res) => {
  try {
    const sales = new Sales({
      code_transaksi: req.body.code_transaksi,
      tanggal_transaksi: req.body.tanggal_transaksi,
      customer: req.body.customerId,
      item: req.body.itemId,
      total_diskon: req.body.total_diskon,
      total_harga: req.body.total_harga,
      total_bayar: req.body.total_bayar,
    });
    await sales.save();
    res.status(201).json(sales);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllSales = async (req, res) => {
  try {
    const sales = await Sales.find();
    res.json(sales);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const getSalesById = async (req, res) => {
  try {
    const sales = await Sales.findById(req.params.id);
    if (!sales) throw new Error('Sales not found');
    res.status(200).json(sales);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const updateSales = async (req, res) => {
  try {
    const sales = await Sales.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!sales) throw new Error('Sales not found');
    res.status(200).json(sales);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteSales = async (req, res) => {
  try {
    const sales = await Sales.findByIdAndDelete(req.params.id);
    if (!sales) throw new Error('Sales not found');
    res.status(200).json({ message: 'Sales deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
