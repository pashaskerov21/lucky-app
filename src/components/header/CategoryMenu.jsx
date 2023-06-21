import React, { useState } from 'react'
import { productCategories } from '../../data/ProductData'
import { Link } from 'react-router-dom'

function CategoryMenu({ categoryMenu, openCategoryMenu, closeCategoryMenu }) {
  const [openCategory, setOpenCategory] = useState(null);
  const toggleCategory = (categoryId) => {
    if (openCategory === categoryId) {
      setOpenCategory(null);
    } else {
      setOpenCategory(categoryId);
    }
  };
  const openSubCategory = (categoryId) => {
    setOpenCategory(categoryId)
  }
  const closeSubCategory = () => {
    setOpenCategory(null)
  }
  return (
    <div className={categoryMenu ? 'category-menu' : 'category-menu d-none'} onMouseMove={() => { openCategoryMenu() }} onMouseLeave={() => { closeCategoryMenu() }}>
      <div className="inner">
        {
          productCategories.map(category => (
            <div key={category.id} className='category' onMouseMove={() => { openSubCategory(category.id) }} onMouseLeave={() => { closeSubCategory(category.id) }}>
              <div className="name">
                <Link onClick={() => closeCategoryMenu()} to={`/products/${encodeURIComponent(category.name)}`}><img className='d-none d-xl-block' src={category.icon} alt="cat-icon" /><span>{category.name}</span></Link>
                <button onClick={() => toggleCategory(category.id)}><i className={openCategory === category.id ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-right'}></i></button>
              </div>
              <div className={openCategory === category.id ? 'subcategories' : 'subcategories d-none'} onMouseMove={() => { openSubCategory(category.id) }} onMouseLeave={() => { closeSubCategory(category.id) }}>
                <ul>
                  {
                    category.subcategories.sort((a, b) => a.name.localeCompare(b.name)).map((subcategory => (
                      <li key={subcategory.id}><Link onClick={() => closeCategoryMenu()} to={`/products/${encodeURIComponent(category.name)}/${encodeURIComponent(subcategory.name)}`}>{subcategory.name}</Link></li>
                    )))
                  }
                </ul>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CategoryMenu
