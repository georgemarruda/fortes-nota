const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    produto: String,
    dev: String,
    qa: String,
    card: String,
    data: String,
    nota: String,
    retorno: String,
    comentario: String,
});

module.exports = mongoose.model('Answer', AnswerSchema)