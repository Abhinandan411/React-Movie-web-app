import React from 'react'
import { Link } from 'react-router-dom'
import "../movies.css"


function Header() {
  return (
    <div>
        <header>
            <h1>Movies</h1>
            <ul>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/tv">TV'S</Link></li>
            </ul>
        </header>
    </div>
  )
}

export default Header