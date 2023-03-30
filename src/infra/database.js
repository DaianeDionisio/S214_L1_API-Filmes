const mongoose = require('mongoose');

const uri = `mongodb+srv://daianedionisio:<3Y7LHgfxYDIpsVxt>@cluster0.m5yryrm.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UserSchema = new Schema({
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

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = {
    UserModel,
};