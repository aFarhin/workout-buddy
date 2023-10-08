import React, { useState } from 'react'
import '../App.css'
import { useWorkoutContext } from '../Hooks/WorkoutContext'
function WorkoutForm() {
    const {dispatch}= useWorkoutContext()
    const [title, setTile]= useState('')
    const [reps, setReps]= useState('')
    const [load, setLoad]= useState('')
    const [error, setError]= useState('')
    const [added, setAdded]= useState('')

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const workouts = {title, reps, load}
        const response = await fetch('http://localhost:4000/api/workouts',{
            method : 'POST',
            body : JSON.stringify(workouts),
            headers :{
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        } 
        if(response.ok){
            setTile('')
            setLoad('')
            setReps('')
            setAdded('New Workout is added successfully')
            console.log(json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

  return (
    <div className='WorkoutForm'>
    <form className='WorkoutForm' onSubmit={handleSubmit}>
        <label>Exercise Title : </label>
        <input
        type='text'
        onChange={(e)=>setTile(e.target.value)}
        value={title}
         />
          <br></br>

         <label>No. of Loads : </label>
         <input
        type='number'
        onChange={(e)=>setLoad(e.target.value)}
        value={load}
         /> 
         <br></br>

         <label>No. of Repetations : </label>
         <input
        type='number'
        onChange={(e)=>setReps(e.target.value)}
        value={reps}
         /> <br></br>

         <button>Submit</button>
         <p> Error : {error}</p>
         <p style={{color:'Green'}}> Success : {added}</p>
         </form>
    </div>
  )
}

export default WorkoutForm