import React, { useState } from 'react'
import Layout from '../../pages/Layout'
import { Link, useParams } from 'react-router-dom'
import { productCategories } from '../../data/ProductData';
import SimiliarProducts from './slider/SimiliarProducts';
import basketIcon from '../../image/icon/cart.svg'
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '../../redux/actions/BasketActions';
import { toast } from 'react-toastify';

function ProductDetail() {
    let { categoryName, subCategoryName, productName } = useParams();

    let category = productCategories.find(category => category.name === categoryName)
    let subCategory = category?.subcategories.find(subcategory => subcategory.name === subCategoryName)
    let product = subCategory?.products.find(product => product.name === productName)
    let similiarProducts = subCategory?.products.filter(p => p.name !== product.name);


    const dispatch = useDispatch();
    const [amount, setAmount] = useState(1);

    const [isAlreadyInBasket, setIsAlreadyInBasket] = useState(false);


    const handleAddToBasket = () => {
        if (!isAlreadyInBasket) {
            dispatch(addToBasket(product));
            toast.success('Ürün sepete eklendi!');
            setIsAlreadyInBasket(true)
        }

    };



    // const decAmount = () => {
    //     if (amount > 1) {
    //         setAmount(amount - 1)
    //     }
    // }
    // const incAmount = () => {
    //     setAmount(amount + 1)
    // }


    return (
        <Layout>
            <section className='product-detail'>
                <div className="container">
                    <div className="root-links">
                        <Link to='/'>Ana səhifə</Link>
                        <span>/</span>
                        <Link to={`/products/${encodeURIComponent(categoryName)}`}>{categoryName}</Link>
                        <span>/</span>
                        <Link to={`/products/${encodeURIComponent(categoryName)}/${encodeURIComponent(subCategoryName)}`}>{subCategoryName}</Link>
                        <span>/</span>
                        <Link>{productName}</Link>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="product-image">
                                <img src={product.img} alt="product" />
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className="content">
                                <div className="product-info">
                                    <h3 className='name'>{product.name}</h3>
                                    <div className='price'>
                                        <span>Qiymət:</span>
                                        <span>{product.price.toFixed(2)} Azn</span>
                                    </div>
                                </div>
                                <div className="add-basket">
                                    {/* <div className="amount">
                                        <button onClick={() => decAmount()}>-</button>
                                        <span className='value'>{amount}</span>
                                        <button onClick={() => incAmount()}>+</button>
                                    </div> */}
                                    <button onClick={handleAddToBasket} className='basket-button'>Səbətə at <img src={basketIcon} alt="basket-icon" /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {
                similiarProducts.length > 0 && <SimiliarProducts similiarProducts={similiarProducts} />
            }
        </Layout>
    )
}

export default ProductDetail