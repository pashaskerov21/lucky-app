import React, { useContext } from 'react'
import SubCategoryItem from './SubCategoryItem'
import { MainContext } from '../../context/MainContextProvider'

function SubCategoryOrange() {
    const { orangeSectionData } = useContext(MainContext);
    return (
        <>
            {
                orangeSectionData.length > 0 ? (
                    <section className='subcategory-section section-orange'>
                        <div className="container">
                            <div className="row">
                                {
                                    orangeSectionData.map(item => (
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

export default SubCategoryOrange
