import React, { useContext, useEffect, useState } from 'react'
import manatIcon from '../../../image/icon/manat.svg'
import { useDispatch } from 'react-redux'
import { sendFilterParams } from '../../../redux/actions/LeftFilterAction'
import { useLocation } from 'react-router-dom'
import { MainContext } from '../../../context/MainContextProvider'

function LeftFilter({ subCategoryFilterActive, category, }) {
    const {subcategoryArray} = useContext(MainContext);
    const [subcategories, setSubCategories] = useState([]);
    useEffect(() =>{
        if(category){
            let filteredSubcategories = subcategoryArray.filter((sb) => sb.categoryID === category.id);
            setSubCategories([...filteredSubcategories]);
        }
    },[category, subcategoryArray])

    const [filterActive, setFilterActive] = useState(false)
    const toggleFilter = () => {
        setFilterActive(!filterActive)
    }

    // range filter
    let [rangeMin, setRangeMin] = useState(0)
    let [rangeMax, setRangeMax] = useState(2000)


    const [selectedSubcategoryIDs, setSelectedSubcategoryIDs] = useState([]);
    const [propertyFilter, setPropertyFilter] = useState('no-filter');

    const handleSubCategoryCheckboxChange = (e) => {
        let subCategoryID = e.target.value;
        subCategoryID = parseInt(subCategoryID);
        if (e.target.checked) {
            setSelectedSubcategoryIDs((prevSelectedSubcategoryIDs) => [
                ...prevSelectedSubcategoryIDs,
                subCategoryID
            ])
        } else {
            setSelectedSubcategoryIDs((prevSelectedSubcategoryIDs) =>
                prevSelectedSubcategoryIDs.filter((name) => name !== subCategoryID)
            );
        }
    }
    const handlePropertyCheckboxChange = (e) => {
        if (e.target.checked) {
            setPropertyFilter(e.target.value)
        } else {
            setPropertyFilter('no-filter')
        }
    }

    const dispatch = useDispatch();
    const location = useLocation();
    

    useEffect(() => {
        resetFilters();
    }, [location.pathname]);

    const resetFilters = () => {
        setRangeMin(0);
        setRangeMax(2000);
        setSelectedSubcategoryIDs([]);
        setPropertyFilter('no-filter');
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        let filterParams = {
            rangeMin,
            rangeMax,
            selectedSubcategoryIDs,
            propertyFilter,
        }
        dispatch(sendFilterParams(filterParams))
    }

    



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
                    subCategoryFilterActive && subcategories.length > 0 ? (
                        <div className="subcategory-filter">
                            <h4 className="section-title">Alt kategoriya</h4>
                            {
                                subcategories.map(subcategory => (
                                    <div key={subcategory.id} className="form-check">
                                        <input type="checkbox" className='form-check-input' id={subcategory.id} value={subcategory.id} onChange={handleSubCategoryCheckboxChange} />
                                        <label className='form-check-label' htmlFor={subcategory.id}>{subcategory.name}</label>
                                    </div>
                                ))
                            }
                        </div>
                    ) : null
                }
                <div className='property-filter'>
                    <div className="form-check">
                        <input type="radio" name='property-filter' className='form-check-input' id='new' value='filter-new' onClick={handlePropertyCheckboxChange} />
                        <label className='form-check-label' htmlFor='new'>Yeni</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name='property-filter' className='form-check-input' id='discount' value='filter-discount' onClick={handlePropertyCheckboxChange} />
                        <label className='form-check-label' htmlFor='discount'>Endirimli</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name='property-filter' className='form-check-input' id='best-seller' value='filter-best-seller' onClick={handlePropertyCheckboxChange} />
                        <label className='form-check-label' htmlFor='best-seller'>Ən çox satılan</label>
                    </div>
                </div>
                <button type='submit' className="submit-button orange">Filterlə</button>
            </form>
        </>
    )
}

export default LeftFilter

