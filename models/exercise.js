const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for workout"
  },
//   value: {
//     type: Number,
//     required: "Enter an amount"
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
});

ExerciseSchema.methods.getLastWorkout()

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
