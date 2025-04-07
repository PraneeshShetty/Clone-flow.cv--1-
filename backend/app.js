const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const adminRoutes = require('./routes/adminRoutes');

connectToDb();

app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use('/admin', adminRoutes);


module.exports = app;