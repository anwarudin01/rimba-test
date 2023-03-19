import Customer from '../models/Customer.js';

// Get all customer
export const getAllCustomer = async (req, res) => {
  try {
    const customer = await Customer.find();
    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCustomer = async (req, res) => {
  const customer = new Customer({
    nama: req.body.nama,
    contact: req.body.contact,
    email: req.body.email,
    alamat: req.body.alamat,
    diskon: req.body.diskon,
    tipe_diskon: req.body.tipe_diskon,
    ktp: req.file.path,
  });

  try {
    const newCustomer = await customer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) throw new Error('Customer not found');
    res.status(200).json(customer);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!customer) throw new Error('Customer not found');
    res.status(200).json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) throw new Error('Customer not found');
    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
