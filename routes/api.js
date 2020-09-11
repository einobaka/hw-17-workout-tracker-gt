// CRUD API
const express = require('express');
const router = express.Router();
const db = require('../models');

// Get all workouts
router.get('/workouts', (req, res) => {
  db.Workout.find({})
    // .sort({ date: -1 })
    .then(dbWorkout => {
      // res.json({ 'Response': 'RES sent' })
      // res.send(console.log(dbWorkout));
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Create workout
router.post('/workouts', (req, res) => {
  // console.log(req.body)
  db.Workout.create({})
    .then(dbWorkout => {
      // res.json({ 'Response': 'RES sent' })
      // res.send(console.log(dbWorkout));
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Get workouts in range
router.get("/workouts/range", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Exercises
router.put('/workouts/:id', (req, res) => {
  let duration = + req.body.duration
  db.Workout.findByIdAndUpdate(req.params.id, {
    $push: {
      exercises: req.body,
    }, totalDuration: duration
  }).then(dbWorkout => {
    res.json(dbWorkout);
  })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;
