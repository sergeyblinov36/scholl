const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

    Time: {type: String, required: true},
    TVShow: {type: String, required: true},
    TVShow_link: {type: String,},
    Date: {type: String, required: true},
    Description: {type: String},
    id: {type: Number, required: true, unique: true}
} , {collection: "schedule"});

const ts = mongoose.model(`ts`,Schema);
module.exports = ts;
