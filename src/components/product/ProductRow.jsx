
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import TopFilter from './filter/TopFilter';
import LeftFilter from './filter/LeftFilter';
import { useSelector } from 'react-redux';
import { MainContext } from '../../context/MainContextProvider';

function ProductRow() {

    const { categoryName, subCategoryName } = useParams();
    const { categoryArray, subcategoryArray, productArray } = useContext(MainContext);
    const category = categoryName && categoryArray.find((category) => category.name === categoryName);
    const subCategory = subCategoryName && subcategoryArray.find((subcategory) => subcategory.name === subCategoryName);

    const location = useLocation()
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [productsTitle, setProductsTitle] = useState('');

    const [filterActive, setFilterActive] = useState(false)
    const [subCategoryFilterActive, setSubCategoryFilterActive] = useState(false)

    const [priceSortValue, setPriceSortValue] = useState('cheapToExp')
    const [leftFilterParams, setLeftFilterParams] = useState([])
    let filterParams = useSelector(state => state.leftFilterParams.leftFilterParams)
    useEffect(() => {
        setLeftFilterParams([...filterParams])
    }, [filterParams])
    useEffect(() => {
        setLeftFilterParams([]);
    }, [location.pathname])

    // məhsul filterlənməsi
    useEffect(() => {
        let filteredProducts = [];
        const allProducts = productArray.slice();
        // routename uzre filterlenme
        if (location.pathname === '/products/' || location.pathname === '/products') {
            setFilterActive(false);
            setProductsTitle('Məhsullar');
            filteredProducts.push(...allProducts);
        } else if (location.pathname === '/products/new') {
            setFilterActive(false);
            setProductsTitle('Yeni Məhsullar');
            filteredProducts = allProducts.filter((product) => product.isNew);
        } else if (location.pathname === '/products/discounts') {
            setFilterActive(false);
            setProductsTitle('Endirimli Məhsullar');
            filteredProducts = allProducts.filter((product) => product.discount);
        } else if (location.pathname === '/products/best-sellers') {
            setFilterActive(false);
            setProductsTitle('Ən Çox Satılan Məhsullar');
            filteredProducts = allProducts.filter((product) => product.bestSeller);
        } else if (subCategory) {
            setFilterActive(true);
            setProductsTitle(subCategory?.name);
            setSubCategoryFilterActive(false);
            filteredProducts = allProducts.filter((product) => product.subcategoryID === subCategory.id);
        } else if (!subCategory && category) {
            setFilterActive(true);
            setProductsTitle(category?.name);
            setSubCategoryFilterActive(true);
            filteredProducts = allProducts.filter((product) => product.categoryID === category.id);
        }else{
            navigate('/404')
        }
        // price sort
        if (priceSortValue === 'cheapToExp') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        // left filters
        if (leftFilterParams.length > 0) {
            let rangeMin = leftFilterParams[0].rangeMin;
            let rangeMax = leftFilterParams[0].rangeMax;
            let selectedSubcategoryIDs = leftFilterParams[0].selectedSubcategoryIDs;
            let propertyFilter = leftFilterParams[0].propertyFilter;
            if (rangeMax > 0) {
                filteredProducts = filteredProducts.filter((product) => rangeMin <= product.price && product.price <= rangeMax);
            }
            if (selectedSubcategoryIDs.length > 0) {
                filteredProducts = filteredProducts.filter((product) => selectedSubcategoryIDs.includes(product.subcategoryID));
            }
            if (propertyFilter !== 'no-filter') {
                if (propertyFilter === 'filter-new') {
                    filteredProducts = filteredProducts.filter((product) => product.isNew)
                } else if (propertyFilter === 'filter-discount') {
                    filteredProducts = filteredProducts.filter((product) => product.discount)
                } else if (propertyFilter === 'filter-best-seller') {
                    filteredProducts = filteredProducts.filter((product) => product.bestSeller)
                }
            }

        }

        setProducts([...filteredProducts])
    }, [location, productArray, category, subCategory, priceSortValue, leftFilterParams, navigate])


    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(12);

    const changeProductsPerPage = (value) => {
        setProductsPerPage(value)
    }

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo(0, 0);
        }
    }
    const handleNextPage = () => {
        let lastPage = Math.ceil(products.length / productsPerPage)
        if (currentPage < lastPage) {
            setCurrentPage(currentPage + 1);
            window.scrollTo(0, 0);
        }
    }
    useEffect(() => {
        setCurrentPage(1)
    }, [location.pathname, productsPerPage])

    return (
        <section className='products'>
            <div className="container">
                <h1 className='section-title'>{productsTitle}</h1>
                <div className="row">
                    {
                        filterActive ? (
                            <div className='col-12 col-xl-4'>
                                <div className="inner">
                                    <LeftFilter products={products} category={category} subCategoryFilterActive={subCategoryFilterActive} />
                                </div>
                            </div>
                        ) : null
                    }
                    <div className={filterActive ? 'col-12 col-xl-8 p-0' : 'col-12 p-0'}>
                        <div className="inner">
                            <div className="row products-row">
                                {
                                    filterActive ? (
                                        <div className="col-12">
                                            <TopFilter changeProductsPerPage={changeProductsPerPage} setPriceSortValue={setPriceSortValue} />
                                        </div>
                                    ) : null
                                }
                                {
                                    products.length > 0 ? (
                                        <>
                                            {
                                                currentProducts.map(product => (
                                                    <div key={product.id} className={filterActive ? 'col-12 col-md-6 col-lg-4' : 'col-12 col-md-6 col-lg-4 col-xxl-3'}>
                                                        <ProductCard product={product} />
                                                    </div>
                                                ))
                                            }
                                        </>
                                    ) : (
                                        <div className="container">
                                            <h1 className="section-title">Məhsul Tapılmadı</h1>
                                        </div>
                                    )
                                }
                            </div>
                            {products.length > productsPerPage && <Pagination
                                totalProducts={products.length}
                                productsPerPage={productsPerPage}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                                prev={handlePrevPage}
                                next={handleNextPage}
                            />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductRow
