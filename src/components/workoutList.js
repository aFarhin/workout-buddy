import React, { useEffect } from 'react';
import { useWorkoutContext } from '../Hooks/WorkoutContext';

function WorkoutList() {
  const { workouts, dispatch } = useWorkoutContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/workouts');
        if (!response.ok) {
          throw new Error('Fetch error');
        }
        const json = await response.json();
        dispatch({ type: 'SET_WORKOUT', payload: json });
      } catch (error) {
        console.error('Fetch error:', error.message);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className='workout'>
      {workouts !== null ? (
        workouts.map((workout) => (
          <div className="workout-card" key={workout._id}>
            <h2>{workout.title}</h2>
            <p>Reps: {workout.reps}</p>
            <p>Load: {workout.load}</p>
            <p>Created At: {new Date(workout.createdAt).toLocaleString()}</p>
            <p>Updated At: {new Date(workout.updatedAt).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WorkoutList;
