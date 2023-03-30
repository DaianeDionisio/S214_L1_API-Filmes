const mongoose = require('mongoose');

const uri = `mongodb+srv://daianedionisio:CxD3mqWTCqPxNkKw@cluster0.m5yryrm.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set("strictQuery", true);

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const FilmeSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: String,
    ano: String,
    autor: String,
    produtora: String
});

const FilmeModel = mongoose.model('FilmeModel', FilmeSchema);

module.exports = {
    FilmeModel,
};