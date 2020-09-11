// CRUD API
const express = require('express');
const router = express.Router();
const db = require('../models');

// Get all workouts
router.get('/workouts', (req, res) => {
  db.Workout.find({})
    // .sort({ date: -1 })
    .then(dbWorkout => {
      res.json({ 'Response': 'RES sent' })
      res.send(console.log(dbWorkout));
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Create new workout
router.post('/workouts', (req, res) => {
  db.Workout.create({})
    .then(dbWorkout => {
      res.json({ 'Response': 'RES sent' })
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.post("/api/workouts/", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
// res.json({ 'Response': 'RES sent' })
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });


module.exports = router;
