const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    sets: {
        type: String,
        required: true,
    },
    reps: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        required: false,
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;