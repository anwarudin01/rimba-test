import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import itemRoutes from './routes/itemRoutes.js';
import customerRoutes from './routes/customerRoutes.js';
import salesRoutes from './routes/salesRoutes.js';
const app = express();
app.use(cors());
app.use(express.json());
// Gunakan bodyParser sebagai middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/api', itemRoutes);
app.use('/api', customerRoutes);
app.use('/api', salesRoutes);

// 1. Buat koneksi ke database mongodb

mongoose.connect('mongodb://anwarudin:closeup123@127.0.0.1:27017/rimba?authSource=admin');
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

// 2. Buat server databasenya
app.listen(5000, () => console.log('Server up and running'));
