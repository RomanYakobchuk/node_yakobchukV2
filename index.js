const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config({ path: path.join(process.cwd(), 'environments', `${process.env.MODE}.env`)})

const { authRouter, userRouter } = require('./router');
const { config } = require('./constants');

mongoose.connect(config.MONGO_URL);

const app = express();
app.use(express.json());

app.use(cors())

app.use('/auth', authRouter);
app.use('/users', userRouter);

app.use('*', (req, res) => {
    res.status(404).json('Route not found');
});

app.use((err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            error: err.message || 'Unknown Error',
            code: err.status || 500
        });
});

app.listen(config.PORT, () => {
    console.log(`Started on port ${config.PORT}`);
});

