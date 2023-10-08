import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='nav'>
    <Link to='/'><h1>Workout Buddy</h1></Link>
    </div>
  )
}

export default Navbar