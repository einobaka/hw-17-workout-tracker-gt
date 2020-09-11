// DB CRUD
const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/workouts', (req, res) => {
  db.Workout.find({})
    // .sort({ date: -1 })
    .then(dbWorkout => {
      res.json({ 'Response': 'RES sent' })
      // res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


// router.post("/api/workouts", ({ body }, res) => {
//     Exercise.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/workouts/", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });



module.exports = router;
