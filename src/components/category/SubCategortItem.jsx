import React from 'react'
import { Link } from 'react-router-dom'
import {productCategories} from '../../data/ProductData'

function SubCategortItem({ categoryName, subCategoryName, subCategoryCover }) {
    let category = productCategories.find((category) => category.name === categoryName);
    let subCategory = category?.subcategories.find((subcategory) => subcategory.name === subCategoryName)
    return (
        <>
            <Link to={`/products/${encodeURIComponent(category?.name)}/${encodeURIComponent(subCategory?.name)}`} className='subcategory-item'>
                <img src={subCategoryCover} alt="category-cover" />
                <div className='hover'>
                    <span className='name'>{subCategoryName}</span>
                </div>
            </Link>
        </>
    )
}

export default SubCategortItem
