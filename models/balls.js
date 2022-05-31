const mongoose = require('mongoose');

const ballSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    type: { type: String, required: true },
    color:  { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
});

const Ball = mongoose.model('Ball', ballSchema);

module.exports = Ball;

