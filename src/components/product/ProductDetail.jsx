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


    const [amount, setAmount] = useState(1)
    const dispatch = useDispatch();


    const handleAddBasketFormSubmit = (e) => {
        if (e.cancelable) {
            e.preventDefault();
        }

        if (basketProducts.find((basketProduct) => basketProduct.id === product.id)) {
            product.basketStatus = true
        }
        if (product.basketStatus === true) {
            let productInBasket = basketProducts.find((p) => p.id === product.id)
            productInBasket.amount = amount;
            toast.success('Məhsul səbətə əlavə olundu!');
        } else {
            product.amount = amount
            dispatch(addToBasket(product));
            toast.success('Məhsul səbətə əlavə olundu!');
        }
    }

    const decAmount = () => {
        if (product.amount > 1) {
            setAmount(amount - 1)
            dispatch(decreaseProductAmount(product))
        }
    }
    const incAmount = () => {
        setAmount(amount + 1)
        dispatch(increaseProductAmount(product))
    }

    const handleChagngeAmountInput = (e) => {
        setAmount(e.target.value)
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
                                        <input type="number" className='value' value={amount} onChange={handleChagngeAmountInput} />
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
