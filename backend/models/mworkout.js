const mongoose = require("mongoose")

const Schema = mongoose.Schema

const woroutSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    reps: {
        type: Number,
        require: true
    },
    load: {
        type: String,
        require: true
    },
},
    { timestamps: true }
)
module.exports = mongoose.model('Workout', woroutSchema)