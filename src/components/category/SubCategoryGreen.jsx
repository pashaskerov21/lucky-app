import React from 'react'
import SubCategortItem from './SubCategortItem'
import subCategoryCover_sirniyyat from '../../image/category-cover/cover-sirniyyat.jpg'
import subCategoryCover_sabun from '../../image/category-cover/cover-sabun.jpg'
import subCategoryCover_cay from '../../image/category-cover/cover-cay.jpg'
import subCategoryCover_temizleyici from '../../image/category-cover/cover_temizleyici.jpg'
import subCategoryCover_coffee from '../../image/category-cover/cover-coffee.jpg'
import subCategoryCover_salfet from '../../image/category-cover/cover-salfet.jpg'

function SubCategoryGreen() {
  return (
    <section className='subcategory-section section-green'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-xl-4">
                        <SubCategortItem categoryName='qida və içkilər' subCategoryName='şirniyyat' subCategoryCover={subCategoryCover_sirniyyat} />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <SubCategortItem categoryName='təsərrüfat malları' subCategoryName='sabun' subCategoryCover={subCategoryCover_sabun} />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <SubCategortItem categoryName='qida və içkilər' subCategoryName='çay' subCategoryCover={subCategoryCover_cay} />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <SubCategortItem categoryName='təsərrüfat malları' subCategoryName='təmizləyici maddələr' subCategoryCover={subCategoryCover_temizleyici} />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <SubCategortItem categoryName='coffee shop' subCategoryName='qəhvə bişirənlər' subCategoryCover={subCategoryCover_coffee} />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <SubCategortItem categoryName='təsərrüfat malları' subCategoryName='salfetlər' subCategoryCover={subCategoryCover_salfet} />
                    </div>
                </div>
            </div>
        </section>
  )
}

export default SubCategoryGreen
