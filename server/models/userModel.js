const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    desde: {
        type: Date
    }

})

const model = mongoose.model("User",userSchema);

module.exports = model;

