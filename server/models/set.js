const mongoose = require('mongoose');
const { Schema } = mongoose;

const setSchema = new Schema({
    id: String,
    setID: String,
    eventID: String,
    winnerID: String,
    loserID: String,
    winnerName: String,
    loserName: String,
    DQ: Boolean,
    results: [{
        player: String,
        name: String,
        score: Number
    }]
});

module.exports = mongoose.model('set', setSchema);