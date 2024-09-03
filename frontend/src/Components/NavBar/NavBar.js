import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <div>
          <ul>
              <li>
                  <Link to='/Home'>Home</Link>
              </li>
              <li>
                  <Link to='/login'>Home</Link>
              </li>
              <li>
                  <Link to='/signup'>Home</Link>
              </li>
          </ul>
    </div>
  )
}

export default NavBar