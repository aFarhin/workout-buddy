const express = require('express');
const { createWorkout, getOneWorkout, getWorkouts, updateOneWorkout, deleteOneWorkout } = require('../../controllers/workoutController');
const router = express.Router();


router.get('/', getWorkouts)

router.get('/:id', getOneWorkout)


router.post('/',createWorkout)


router.delete('/:id', deleteOneWorkout)

router.patch('/:id',updateOneWorkout)

module.exports = router;