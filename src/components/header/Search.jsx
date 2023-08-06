import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { MainContext } from '../../context/MainContextProvider';


function Search({toggleMenu}) {


  const navigate = useNavigate();
  const location = useLocation();
  const { categoryArray, subcategoryArray, productArray, searchValues } = useContext(MainContext);
  const [searchInputValue, setSearchInputValue] = useState('');
  useEffect(() => {
    setSearchInputValue('');
  },[location])
  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    toggleMenu();

    const category = categoryArray.find((category) => category.name.trim().toLocaleLowerCase().includes(searchInputValue.trim().toLocaleLowerCase()));
    const subcategory = subcategoryArray.find((subcategory) => subcategory.name.trim().toLocaleLowerCase().includes(searchInputValue.trim().toLocaleLowerCase()));
    const product = productArray.find((product) => product.name.trim().toLocaleLowerCase().includes(searchInputValue.trim().toLocaleLowerCase()));
    const searchResult = searchValues.find((result) => result.name.trim().toLocaleLowerCase().includes(searchInputValue.trim().toLocaleLowerCase()))

    if(searchResult){
      navigate(searchResult.path);
    }else if(category){
      navigate(`/products/${encodeURIComponent(category?.name)}`)
    }else if(subcategory){
      const category = categoryArray.find((category) => category.id === subcategory.categoryID);
      navigate(`/products/${encodeURIComponent(category?.name)}/${encodeURIComponent(subcategory?.name)}`)
    }else if(product){
      const category = categoryArray.find((category) => category.id === product.categoryID);
      const subcategory = subcategoryArray.find((subcategory) => subcategory.id === product.subcategoryID);
      navigate(`/products/${encodeURIComponent(category?.name)}/${encodeURIComponent(subcategory?.name)}/${encodeURIComponent(product?.name)}`)
    }else{
      navigate('/404');
    }
  }
  return (
    <form className='search-form' onSubmit={handleSearchFormSubmit}>
      <input type="text" placeholder='Axtar' value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)} />
      <button type='submit'><i className='fa-solid fa-magnifying-glass'></i></button>
    </form>
  )
}

export default Search
