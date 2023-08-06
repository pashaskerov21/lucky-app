import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../context/MainContextProvider';

function CategoryMenu({ categoryMenu, openCategoryMenu, closeCategoryMenu }) {
  const { categoryArray, subcategoryArray } = useContext(MainContext);
  const [openCategory, setOpenCategory] = useState(null);
  
  const toggleCategory = (categoryId) => {
    if (openCategory === categoryId) {
      setOpenCategory(null);
    } else {
      setOpenCategory(categoryId);
    }
  };
  const openSubCategory = (categoryId) => setOpenCategory(categoryId)
  const closeSubCategory = () => setOpenCategory(null)
  
  return (
    <div className={categoryMenu ? 'category-menu' : 'category-menu d-none'} onMouseMove={() => { openCategoryMenu() }} onMouseLeave={() => { closeCategoryMenu() }}>
      <div className="inner">
        {
          categoryArray.length > 0 ? (
            categoryArray.map(category => (
              <div className="category" key={category.id} onMouseMove={() => { openSubCategory(category.id) }} onMouseLeave={() => { closeSubCategory(category.id) }}>
                <div className="name">
                  <Link onClick={() => closeCategoryMenu()} to={`/products/${encodeURIComponent(category.name)}`}>
                    <img className='d-none d-xl-block' src={category.icon} alt="cat-icon" />
                    <span>{category.name}</span>
                  </Link>
                  <button onClick={() => toggleCategory(category.id)}><i className={openCategory === category.id ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-right'}></i></button>
                </div>
                <div className={`subcategories ${openCategory === category.id ? '' : 'd-none'}`} onMouseMove={() => { openSubCategory(category.id) }} onMouseLeave={() => { closeSubCategory(category.id) }}>
                  <SubCategoryList category={category} subcategoryArray={subcategoryArray} closeCategoryMenu={closeCategoryMenu}/>
                </div>
              </div>
            ))
          ) : null
        }
      </div>
    </div>
  )
}

function SubCategoryList({category, subcategoryArray, closeCategoryMenu}){
  const [subcategories, setSubcategories] = useState([]);
  useEffect(() => {
    let filteredSubcategories = [];
    if(category){
      filteredSubcategories = subcategoryArray.filter((sb) => sb.categoryID === category.id);
      filteredSubcategories = filteredSubcategories.sort((a, b) => a.name.localeCompare(b.name))
    }
    setSubcategories([...filteredSubcategories]);
  },[category, subcategoryArray])
  return(
    <ul>
      {
        subcategories.length > 0 ? (
          subcategories.map(subcategory => (
            <li key={subcategory.id}>
              <Link onClick={() => closeCategoryMenu()} to={`/products/${encodeURIComponent(category.name)}/${encodeURIComponent(subcategory.name)}`}>{subcategory.name}</Link>
            </li>
          ))
        ) : null
      }
    </ul>
  )
}


export default CategoryMenu
