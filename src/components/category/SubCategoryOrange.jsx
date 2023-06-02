import React from 'react'
import SubCategortItem from './SubCategortItem'
import subCategoryCover_kagiz from '../../image/category-cover/cover-kagiz.jpg'
import subCategoryCover_qelem from '../../image/category-cover/cover-qelem.png'
import subCategoryCover_qovluq from '../../image/category-cover/cover-qovluq.jpg'
import subCategoryCover_marker from '../../image/category-cover/cover-marker.jpg'
import subCategoryCover_stepler from '../../image/category-cover/cover-stepler.jpg'
import subCategoryCover_pozan from '../../image/category-cover/cover-pozan.jpg'

function SubCategoryOrange() {
    return (
        <section className='subcategory-section section-orange'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-xl-4">
                        <SubCategortItem categoryName='ofis ləvazimatları' subCategoryName='kağız' subCategoryCover={subCategoryCover_kagiz} />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <SubCategortItem categoryName='ofis ləvazimatları' subCategoryName='qələm' subCategoryCover={subCategoryCover_qelem} />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <SubCategortItem categoryName='ofis ləvazimatları' subCategoryName='qovluq' subCategoryCover={subCategoryCover_qovluq} />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <SubCategortItem categoryName='ofis ləvazimatları' subCategoryName='marker' subCategoryCover={subCategoryCover_marker} />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <SubCategortItem categoryName='ofis ləvazimatları' subCategoryName='stepler' subCategoryCover={subCategoryCover_stepler} />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <SubCategortItem categoryName='ofis ləvazimatları' subCategoryName='pozan' subCategoryCover={subCategoryCover_pozan} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubCategoryOrange
