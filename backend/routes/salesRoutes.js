import express from 'express';
import { createSales, getSalesById, updateSales, deleteSales, getAllSales } from '../controllers/salesController.js';
const router = express.Router();

// GET /api/sales
router.get('/sales', getAllSales);

// GET /api/sales/:id
router.get('/sales', getSalesById);

// POST /api/sales
router.post('/sales', createSales);

// PUT /api/sales/:id
router.put('/sales/:id', updateSales);

// DELETE /api/sales/:id
router.delete('/sales/:id', deleteSales);

export default router;
