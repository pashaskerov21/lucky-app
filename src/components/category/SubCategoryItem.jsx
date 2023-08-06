import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../context/MainContextProvider';

function SubCategoryItem({ categoryID, subcategoryID, cover }) {
    const { categoryArray, subcategoryArray } = useContext(MainContext);
    const category = categoryID && categoryArray.find((c) => c.id === categoryID);
    const subcategory = subcategoryID && subcategoryArray.find((c) => c.id === subcategoryID);

    return (
        <>
            <Link to={`/products/${encodeURIComponent(category?.name)}/${encodeURIComponent(subcategory?.name)}`} className='subcategory-item'>
                <img src={cover} alt="category-cover" />
                <div className='hover'>
                    <span className='name'>{subcategory?.name}</span>
                </div>
            </Link>
        </>
    )
}

export default SubCategoryItem
