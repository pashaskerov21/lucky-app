import React from 'react'
import { Link } from 'react-router-dom'
import headerLogo from '../../image/logo/logo-header.svg'
import Search from './Search'
import GeneralIcons from './GeneralIcons'


function MiddleNav({menu, toggleMenu}) {

    return (
        <nav className='middle-nav'>
            <div className="container">
                <div className="inner">
                    <Link to='/' className='logo'>
                        <img src={headerLogo} alt="logo" />
                    </Link>
                    <div className='search-wrapper d-none d-xl-flex'>
                        <Search />
                    </div>
                    <div className='middle-bottom'>
                        <div className={menu ? 'menu-button active d-xl-none' : 'menu-button d-xl-none'} onClick={() => toggleMenu()}>
                            <div className='bar'></div>
                            <div className='bar'></div>
                            <div className='bar'></div>
                        </div>
                        <GeneralIcons/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MiddleNav
