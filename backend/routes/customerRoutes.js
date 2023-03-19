import express from 'express';
import multer from 'multer';
import { createCustomer, getCustomerById, updateCustomer, deleteCustomer, getAllCustomer } from '../controllers/customerController.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './assets');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// GET /api/customer
router.get('/customer', getAllCustomer);

// GET /api/customer/:id
router.get('/customer', getCustomerById);

// POST /api/customer
router.post('/customer', upload.single('ktp'), createCustomer);

// PUT /api/customer/:id
router.put('/customer/:id', upload.single('ktp'), updateCustomer);

// DELETE /api/customer/:id
router.delete('/customer/:id', deleteCustomer);

export default router;
