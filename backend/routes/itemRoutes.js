import express from 'express';
import multer from 'multer';
import { getAllItems, getItemById, createItem, updateItemById, deleteItemById } from '../controllers/itemController.js';
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

// GET /api/items
router.get('/items', getAllItems);

// GET /api/items/:id
router.get('/items/:id', getItemById);

// POST /api/items
router.post('/items', upload.single('barang'), createItem);

// PUT /api/items/:id
router.put('/items/:id', upload.single('barang'), updateItemById);

// DELETE /api/items/:id
router.delete('/items/:id', deleteItemById);

export default router;
