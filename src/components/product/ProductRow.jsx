
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { productCategories } from '../../data/ProductData';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import TopFilter from './filter/TopFilter';
import LeftFilter from './filter/LeftFilter';
import { useSelector } from 'react-redux';

function ProductRow() {

    const { categoryName } = useParams();
    const { subCategoryName } = useParams();

    const category = categoryName ? productCategories.find((category) => category.name === categoryName) : null;
    //const subCategory = subCategoryName && category ? category.subcategories.find((subcategory) => subcategory.name === subCategoryName) : null

    const location = useLocation()

    const [products, setProducts] = useState([]);
    const [productsTitle, setProductsTitle] = useState('');

    const [filterActive, setFilterActive] = useState(false)
    const [subCategoryFilterActive, setSubCategoryFilterActive] = useState(false)
    //const category = productCategories.find((category) => category.name === categoryName);




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

        if (location.pathname === '/products/' || location.pathname === '/products') {
            const allProducts = [];

            setFilterActive(false)
            productCategories.forEach((category) => {
                category.subcategories.forEach((subcategory) => {
                    allProducts.push(...subcategory.products);
                });
            });
            filteredProducts.push(...allProducts)
            setProductsTitle('Məhsullar')

        } else if (location.pathname === '/products/new') {
            setFilterActive(false)
            productCategories.forEach((category) => {
                category.subcategories.forEach((subcategory) => {
                    const newProducts = subcategory.products.filter((product) => product.isNew);
                    filteredProducts.push(...newProducts);
                });
            });
            setProductsTitle('Yeni Məhsullar');
        } else if (location.pathname === '/products/discounts') {
            setFilterActive(false)
            productCategories.forEach((category) => {
                category.subcategories.forEach((subcategory) => {
                    const discountedProducts = subcategory.products.filter((product) => product.discount);
                    filteredProducts.push(...discountedProducts);
                });
            });
            setProductsTitle('Endirimli Məhsullar');
        } else if (location.pathname === '/products/best-sellers') {
            setFilterActive(false)
            productCategories.forEach((category) => {
                category.subcategories.forEach((subcategory) => {
                    const bestSellingProducts = subcategory.products.filter((product) => product.bestSeller);
                    filteredProducts.push(...bestSellingProducts);
                });
            });
            setProductsTitle('Ən Çox Satılan Məhsullar');
        } else {
            const category = productCategories.find((category) => category.name === categoryName);
            const subCategory = category?.subcategories.find((subcategory) => subcategory.name === subCategoryName);

            setFilterActive(true);

            if (subCategoryName && subCategory && category) {
                filteredProducts = subCategory.products;
                setProductsTitle(subCategory.name);
                setSubCategoryFilterActive(false);
            } else {
                if (category) {
                    category?.subcategories.forEach((subCategory) => {
                        filteredProducts.push(...subCategory.products);
                    });
                    setProductsTitle(category.name);
                    setSubCategoryFilterActive(true)
                }
            }
        }
        filteredProducts.sort((a, b) => a.price - b.price);


        if (leftFilterParams.length > 0) {
            let rangeMin = leftFilterParams[0].rangeMin;
            let rangeMax = leftFilterParams[0].rangeMax;
            let selectedSubcategoryNames = leftFilterParams[0].selectedSubcategoryNames
            let propertyFilter = leftFilterParams[0].propertyFilter
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





        setProducts(filteredProducts);
    }, [categoryName, subCategoryName, location.pathname, leftFilterParams,category])




    // mehsullarin qiymete gore siralanmasi
    const changeSortProducts = (value) => {
        let sortedProducts;
        if (value === 'expToCheap') {
            sortedProducts = [...products].sort((a, b) => b.price - a.price)
        } else {
            sortedProducts = [...products].sort((a, b) => a.price - b.price)
        }
        setProducts(sortedProducts)
    }

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

    return (
        <section className='products'>
            <div className="container">
                <h1 className='section-title'>{productsTitle}</h1>
                <div className="row">
                    {
                        filterActive ? (
                            <div className='col-12 col-xl-4'>
                                <div className="inner">
                                    <LeftFilter products={products} subCategoryFilterActive={subCategoryFilterActive} category={category} />
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
                                            <TopFilter changeProductsPerPage={changeProductsPerPage} changeSortProducts={changeSortProducts} />
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
