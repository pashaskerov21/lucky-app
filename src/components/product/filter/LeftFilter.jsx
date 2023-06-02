import React, { useEffect, useState } from 'react'
import manatIcon from '../../../image/icon/manat.svg'

function LeftFilter({ subCategoryFilterActive, category, products }) {
    const [filterActive, setFilterActive] = useState(false)
    const toggleFilter = () => {
        setFilterActive(!filterActive)
    }

    // range filter
    let [rangeMin, setRangeMin] = useState(0)
    let [rangeMax, setRangeMax] = useState(2000)


    const [selectedSubcategoryNames, setSelectedSubCategoryNames] = useState([])
    const [selectedPropertyNames, setSelectedPropertyNames] = useState([])

    const handleSubCategpryCheckboxChange = (e) => {
        const subCategoryName = e.target.value;
        if (e.target.checked) {
            setSelectedSubCategoryNames((prevSelectedSubcategoryNames) => [
                ...prevSelectedSubcategoryNames,
                subCategoryName
            ])
        } else {
            setSelectedSubCategoryNames((prevSelectedSubcategoryNames) =>
                prevSelectedSubcategoryNames.filter((name) => name !== subCategoryName)
            );
        }
    }
    const handlePropertyCheckboxChange = (e) => {
        const propertyName = e.target.value;
        if (e.target.checked) {
            setSelectedPropertyNames((prevSelectedPropertyNames) => [
                ...prevSelectedPropertyNames,
                propertyName
            ])
        } else {
            setSelectedPropertyNames((prevSelectedPropertyNames) =>
                prevSelectedPropertyNames.filter((name) => name !== propertyName)
            )
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        applyFilters();
        setFilteredProducts(applyFilters())
    }

    const applyFilters = () => {
        let filteredProducts = products;

        if (rangeMax > 0) {
            filteredProducts = filteredProducts.filter(
                (product) => rangeMin <= product.price && product.price <= rangeMax
            );
        }
        if (selectedSubcategoryNames.length > 0) {
            const selectedSubcategoryProducts = [];
            category.subcategories.forEach((subcategory) => {
                if (selectedSubcategoryNames.includes(subcategory.name)) {
                    selectedSubcategoryProducts.push(...subcategory.products);
                }
            });
            filteredProducts = filteredProducts.filter((product) =>
                selectedSubcategoryProducts.includes(product)
            );
        }
        return filteredProducts;
    }
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        applyFilters();
    }, [products]);

    //console.log(filteredProducts)

    return (
        <>
            <button className='open-filter-button d-xl-none' onClick={toggleFilter}>
                <i className='fa-solid fa-filter'></i>
                <span>Filterlə</span>
            </button>
            <form onSubmit={handleSubmit} className={filterActive ? 'left-filters d-xl-flex' : 'left-filters d-none d-xl-flex'}>
                <div className="price-filter">
                    <h4 className="section-title">Qiymət filteri</h4>
                    <div className='range-filter'>
                        <div className='range-inputs'>
                            <input type="range" value={rangeMin} onChange={(e) => { setRangeMin(e.target.value) }} min={0} max={2000} step={1} />
                            <input type="range" value={rangeMax} onChange={(e) => { setRangeMax(e.target.value) }} min={0} max={2000} step={1} />
                        </div>
                        <div className='result-inputs'>
                            <div className="item">
                                <input type="number" value={rangeMin} onChange={(e) => { setRangeMin(e.target.value) }} />
                                <img src={manatIcon} alt="icon" />
                            </div>
                            <div className="item">
                                <input type="number" value={rangeMax} onChange={(e) => { setRangeMax(e.target.value) }} />
                                <img src={manatIcon} alt="icon" />
                            </div>
                        </div>
                    </div>
                </div>
                {
                    subCategoryFilterActive ? (
                        <div className="subcategory-filter">
                            <h4 className="section-title">Alt kategoriya</h4>
                            {
                                category?.subcategories.map(subcategory => (
                                    <div key={subcategory.id} className="form-check">
                                        <input type="checkbox" className='form-check-input' id={subcategory.id} value={subcategory.name} onChange={handleSubCategpryCheckboxChange} />
                                        <label className='form-check-label' htmlFor={subcategory.id}>{subcategory.name}</label>
                                    </div>
                                ))
                            }
                        </div>
                    ) : null
                }
                <div className='property-filter'>
                    <div className="form-check">
                        <input type="checkbox" className='form-check-input' id='new' value='filter-new' onClick={handlePropertyCheckboxChange} />
                        <label className='form-check-label' htmlFor='new'>Yeni</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className='form-check-input' id='discount' value='filter-discount' onClick={handlePropertyCheckboxChange} />
                        <label className='form-check-label' htmlFor='discount'>Endirimli</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className='form-check-input' id='best-seller' value='filter-best-seller' onClick={handlePropertyCheckboxChange} />
                        <label className='form-check-label' htmlFor='best-seller'>Ən çox satılan</label>
                    </div>
                </div>
                <button type='submit' className="submit-button orange">Filterlə</button>
            </form>
        </>
    )
}

export default LeftFilter
