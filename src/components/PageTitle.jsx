import React from 'react'
import { Link } from 'react-router-dom'

function PageTitle({title}) {
  return (
    <div className='page-title'>
      <h3 className='section-title'>{title}</h3>
      <div className='root-links'>
        <Link to='/'>Ana səhifə</Link>
        <span>/</span>
        <Link>{title}</Link>
      </div>
    </div>
  )
}

export default PageTitle
