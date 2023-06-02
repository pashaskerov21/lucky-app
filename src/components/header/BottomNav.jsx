import React, { useState } from 'react'
import categoryButtonIcon from '../../image/icon/category.svg'
import { Link } from 'react-router-dom'
import Search from './Search'
import CategoryMenu from './CategoryMenu'
import GeneralIcons from './GeneralIcons'

function BottomNav({ menu, categoryMenu, toggleCategoryMenu, openCategoryMenu, closeCategoryMenu, fixed }) {
  const [termMenu, setTermMenu] = useState(false)
  const openTermMenu = () => {
    setTermMenu(true)
  }
  const closeTermMenu = () => {
    setTermMenu(false)
  }

  return (
    <nav className={fixed ? 'bottom-nav fixed-top' : 'bottom-nav'}>
      <div className={menu ? 'nav-links d-xl-flex' : 'nav-links d-none d-xl-flex'}>
        <div className='search-wrapper d-xl-none'>
          <Search />
        </div>
        <Link to='/about'>Haqqımızda</Link>
        <Link to='/products/new'>Yeni</Link>
        <Link to='/products/discounts'>Endirimlər</Link>
        <Link to='/products/best-sellers'>Ən çox satılanlar</Link>
        <div className="term-dropdown">
          <Link onMouseMove={() => { openTermMenu() }} onMouseLeave={() => { closeTermMenu() }}>Şərtlər <i className="fa-solid fa-chevron-right"></i></Link>
          <div className={termMenu ? 'term-menu' : 'term-menu d-none'} onMouseMove={() => { openTermMenu() }} onMouseLeave={() => { closeTermMenu() }}>
            <Link to='/terms/delivery'>Çatdırılma</Link>
            <Link to='/terms/return-exchanges'>Geri Qaytarılma və dəyişdirilmə</Link>
          </div>
        </div>
        <Link to='/contact'>Əlaqə</Link>
      </div>
      <div className={fixed ? 'fixnav-items d-none d-xl-flex' : 'fixnav-items d-none d-xl-none'}>
        <Search/>
        <GeneralIcons/>
      </div>
      <div className="categories">
        <div className='all-category-button'  onMouseMove={() => { openCategoryMenu() }} onMouseLeave={() => { closeCategoryMenu() }}>
          <img src={categoryButtonIcon} alt="cat-icon" />
          <span>Kateqoriyalar</span>
        </div>
        <CategoryMenu categoryMenu={categoryMenu} toggleCategoryMenu={toggleCategoryMenu} openCategoryMenu={openCategoryMenu} closeCategoryMenu={closeCategoryMenu} />
      </div>
    </nav>
  )
}

export default BottomNav
