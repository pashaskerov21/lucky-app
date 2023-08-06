import React from 'react'

function TopFilter({changeProductsPerPage,setPriceSortValue}) {
  return (
    <div className='product-top-filter'>
      <div className='filter-item'>
        <span className='label'>Saya görə</span>
        <select defaultValue={12} onChange={(e) => changeProductsPerPage(e.target.value)}>
            <option value={12}>12</option>
            <option value={18}>18</option>
            <option value={24}>24</option>
            <option value={30}>30</option>
        </select>
      </div>
      <div className='filter-item'>
        <span className='label'>Qiymətə görə</span>
        <select defaultValue='choose' onChange={(e) => setPriceSortValue(e.target.value)}>
            <option value='choose' disabled >Seç</option>
            <option value="cheapToExp">Ucuzdan Bahaya</option>
            <option value="expToCheap">Bahadan Ucuza</option>
        </select>
      </div>
    </div>
  )
}

export default TopFilter
