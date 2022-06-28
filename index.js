
const express = require('express');
const mongoose = require('mongoose');

const { authRouter, userRouter } = require('./router');
const { config } = require('./constants');

mongoose.connect(config.MONGO_URL);

const index = express();
index.use(express.json());

index.use('/auth', authRouter);
index.use('/users', userRouter);

index.use('*', (req, res) => {
    res.status(404).json('Route not found');
});

index.use((err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            error: err.message || 'Unknown Error',
            code: err.status || 500
        });
});

index.listen(config.PORT, () => {
    console.log(`Started on port ${config.PORT}`);
});