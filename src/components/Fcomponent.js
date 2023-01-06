import React from 'react'
import style from './style.css'
export default function Fcomponent() {
  return (
      <div className='menu'>
        <nav>
        <h1>Castaway</h1>
          <ul>
            <li className='active'>Home</li>
            <li>Episodes</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
  )
}
