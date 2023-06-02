import React from 'react'
import { Link } from 'react-router-dom'


function TopNav() {
  return (
    <nav className='top-nav'>
        <div className="container">
          <div className="inner">
            <Link className='top-nav-link' to='/login'>Daxil ol</Link>
            <Link className='top-nav-link' to='/register'>Qeydiyyat</Link>
          </div>
        </div>
      </nav>
  )
}

export default TopNav
