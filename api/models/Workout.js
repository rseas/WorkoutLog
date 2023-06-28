const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    exercises: {
        type: Array,
        required: true,
    }
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;