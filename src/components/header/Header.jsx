import React, { useState } from 'react'
import TopNav from './TopNav'
import MiddleNav from './MiddleNav'
import BottomNav from './BottomNav'

function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const [categoryMenu, setCategoryMenu] = useState(false);
  const toggleCategoryMenu = () => {
    setCategoryMenu(!categoryMenu)
  }
  const openCategoryMenu = () => {
    setCategoryMenu(true)
  }
  const closeCategoryMenu = () => {
    setCategoryMenu(false)
  }
  const [fixed, setFixed] = useState(false);
  window.addEventListener('scroll',function(){
    this.window.scrollY > 400 ? setFixed(true) : setFixed(false);
  })
  return (
    <header >
      <TopNav />
      <MiddleNav menu={menu} toggleMenu={toggleMenu}/>
      <BottomNav fixed={fixed} menu={menu} toggleMenu={toggleMenu} categoryMenu={categoryMenu} toggleCategoryMenu={toggleCategoryMenu} openCategoryMenu={openCategoryMenu} closeCategoryMenu={closeCategoryMenu} />
    </header>
  )
}

export default Header
