// Home.js

import React from 'react';
import WorkoutList from '../components/workoutList';
import '../App.css';
import WorkoutForm from '../components/WorkoutForm';

function Home() {
  return (
    <div className='home'>
      <WorkoutForm/>
      <WorkoutList />
    </div>
  );
}

export default Home;
