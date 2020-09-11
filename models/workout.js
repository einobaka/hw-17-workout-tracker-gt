const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    //   value: {
    //     type: Number,
    //     required: "Enter an amount"
    //   },
    //   date: {
    //     type: Date,
    //     default: Date.now
    //   }

    date: {
        type: Date,
        default: Date.now,
    },
});

// ExerciseSchema.methods.getLastWorkout()

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
