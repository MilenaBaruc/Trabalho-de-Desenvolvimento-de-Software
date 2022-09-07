const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    mailMail: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("user", userSchema);