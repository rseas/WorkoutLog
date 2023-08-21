const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mern-workoutlog",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to database"))
    .catch(console.error);

const Exercise = require('./models/Exercise');
const Workout = require('./models/Workout');

app.get('/exercises', async (req, res) => {
    const exercises = await Exercise.find();

    res.json(exercises);
});

app.get('/workouts', async (req, res) => {
    const workouts = await Workout.find();

    res.json(workouts);
});

app.post('/exercise/new', (req, res) => {
    const exercise = new Exercise({
        name: req.body.name,
        sets: req.body.sets,
        reps: req.body.reps,
        notes: req.body.notes
    });

    exercise.save();

    res.json(exercise);
});

app.post('/workout/new', (req, res) => {
    const workout = new Workout({
        date: req.body.date,
        type: req.body.type,
        exercises: req.body.exercises
    });

    workout.save();

    res.json(workout);
});

app.delete('/exercise/delete/:id', async (req, res) => {
    const result = await Exercise.findByIdAndDelete(req.params.id);

    res.json(result);
});

app.delete('/workout/delete/:id', async (req, res) => {
    const result = await Workout.findByIdAndDelete(req.params.id);

    res.json(result);
});

app.listen(3001, () => console.log("Server started on port 3001"));