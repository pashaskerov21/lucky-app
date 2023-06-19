import React, { useState } from 'react'
import Layout from '../../pages/Layout'
import { Link, useParams } from 'react-router-dom'
import { productCategories } from '../../data/ProductData';
import SimiliarProducts from './slider/SimiliarProducts';
import basketIcon from '../../image/icon/cart.svg'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToBasket, decreaseProductAmount, increaseProductAmount } from '../../redux/actions/ProductAction';

function ProductDetail() {
    let { categoryName, subCategoryName, productName } = useParams();

    let category = productCategories.find(category => category.name === categoryName)
    let subCategory = category?.subcategories.find(subcategory => subcategory.name === subCategoryName)
    let product = subCategory?.products.find(product => product.name === productName)
    let similiarProducts = subCategory?.products.filter(p => p.name !== product.name);


    const basketProducts = useSelector(state => state.productState.basketProducts);
    const [productStatus, setProductStatus] = useState(false)


    const dispatch = useDispatch();


    const handleAddBasketFormSubmit = (e) => {
        e.preventDefault();
        
        if (basketProducts.find((basketProduct) => basketProduct.id === product.id)) {
            setProductStatus(true)
        }
        if (productStatus === true) {
            console.log('salam')
        } else {
            dispatch(addToBasket(product));
            toast.success('Məhsul səbətə əlavə olundu!');
            setProductStatus(true)
        }


    }

    const decAmount = () => {
        if (product.amount > 1) {
            product.amount -= 1
            dispatch(decreaseProductAmount(product))
        }
    }
    const incAmount = () => {
        product.amount += 1
        dispatch(increaseProductAmount(product))
    }

    const handleChagngeAmountInput = (e) => {
        product.amount = e.target.value;
    }

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
                                <form onSubmit={handleAddBasketFormSubmit} className="add-basket">
                                    <div className="amount my-4">
                                        <button type='button' onClick={() => decAmount()}>-</button>
                                        <input type="number" className='value' value={product.amount} onChange={handleChagngeAmountInput} />
                                        {/* <span className='value'>{amount}</span> */}
                                        <button type='button' onClick={() => incAmount()}>+</button>
                                    </div>
                                    <button type='submit' className='basket-button'>Səbətə at <img src={basketIcon} alt="basket-icon" /></button>
                                </form>
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
