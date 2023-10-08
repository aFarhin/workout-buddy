const Workout = require('../backend/models/mworkout')
const mongoose = require('mongoose')
// get all workouts
    const getWorkouts = async(req,res)=>{
        const workouts = await Workout.find({}).sort({createdAt :-1})

        res.status(200).json(workouts)
    }

// get a single workouts
const getOneWorkout = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such workout'})
    }
    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}

// add a new workout
    const createWorkout = async(req, res)=>{
        const { title, load, reps } = req.body;

        //adding doc to db
        try {
          const workout = await Workout.create({ title, load, reps });
          res.status(201).json(workout); 
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
    }

// delete a workout
const deleteOneWorkout = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id:id})
    if(!Workout){
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json({
        message: 'workout is deleted successfully',
        Deleted_workout : workout
    })
}


// update a workout
    const updateOneWorkout = async(req,res)=>{
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'no such workout'})
        }
        const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body})
        if(!workout){
            return res.status(400).json({error: 'No such workout'})
        }
        res.status(200).json({
            message: 'Updated successfully',
            Updated_workout : workout
        })
    }

module.exports= {
    createWorkout,
    getWorkouts,
    getOneWorkout,
    deleteOneWorkout,
    updateOneWorkout
}