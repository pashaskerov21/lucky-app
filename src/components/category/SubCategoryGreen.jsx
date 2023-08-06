import React, { useContext } from 'react'
import SubCategoryItem from './SubCategoryItem'
import { MainContext } from '../../context/MainContextProvider'

function SubCategoryGreen() {
    const { greenSectionData } = useContext(MainContext);
    return (
        <>
            {
                greenSectionData.length > 0 ? (
                    <section className='subcategory-section section-green'>
                        <div className="container">
                            <div className="row">
                                {
                                    greenSectionData.map(item => (
                                        <div className="col-12 col-md-6 col-xl-4" key={item.id}>
                                            <SubCategoryItem categoryID={item.categoryID} subcategoryID={item.subcategoryID} cover={item.cover} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                ) : null
            }
        </>
    )
}

export default SubCategoryGreen
