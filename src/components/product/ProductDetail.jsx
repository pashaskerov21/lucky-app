import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../pages/Layout'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SimiliarProducts from './slider/SimiliarProducts';
import basketIcon from '../../image/icon/cart.svg'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToBasket } from '../../redux/actions/ProductAction';
import { MainContext } from '../../context/MainContextProvider';

function ProductDetail() {
    const navigate = useNavigate();
    let { categoryName, subCategoryName, productName } = useParams();
    const { categoryArray, subcategoryArray, productArray } = useContext(MainContext);

    let category = categoryArray.find((category) => category.name === categoryName);
    let subCategory = subcategoryArray.find((subcategory) => subcategory.name === subCategoryName);
    let product = productArray.find((product) => product.name === productName);
    useEffect(() => {
        if (!category || !subCategory || !product) {
            navigate('/404')
        }
    }, [navigate,category,subCategory, product])
    let similiarProducts = productArray.filter((p) => p.subcategoryID === subCategory?.id);
    similiarProducts = similiarProducts.filter((p) => p.name !== product?.name);





    const [amount, setAmount] = useState(1)
    const dispatch = useDispatch();
    const basketProducts = useSelector(state => state.productState.basketProducts);
    let productInBasket = basketProducts.find((basketProduct) => basketProduct.id === product?.id)

    const handleAddBasketFormSubmit = (e) => {
        if (e.cancelable) {
            e.preventDefault();
        }

        if (productInBasket) {
            productInBasket.basketAmount += amount;
            toast.success(`Məhsulun səbətdə olan miqdarı yeniləndi - ${productInBasket.basketAmount}`);
        } else {
            let newProduct = {
                ...product,
                basketStatus: true,
                basketAmount: 1,
            }
            dispatch(addToBasket(newProduct));
            toast.success('Məhsul səbətə əlavə olundu!');
        }
    }

    const decAmount = () => {
        if (amount > 1) {
            setAmount(amount - 1)
        }
    }
    const incAmount = () => {
        setAmount(amount + 1)
    }

    const handleChagngeAmountInput = (e) => {
        setAmount(parseInt(e.target.value))
    }

    return (
        <Layout>
            <section className='product-detail'>
                <div className="container">
                    <div className="root-links">
                        <Link to='/'>Ana səhifə</Link>
                        <span>/</span>
                        <Link to={`/products/${encodeURIComponent(category?.name)}`}>{category?.name}</Link>
                        <span>/</span>
                        <Link to={`/products/${encodeURIComponent(category?.name)}/${encodeURIComponent(subCategory?.name)}`}>{subCategory?.name}</Link>
                        <span>/</span>
                        <Link>{product?.name}</Link>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="product-image">
                                <img src={product?.img} alt="product" />
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className="content">
                                <div className="product-info">
                                    <h3 className='name'>{product?.name}</h3>
                                    <div className='price'>
                                        <span>Qiymət:</span>
                                        <span>{product?.price.toFixed(2)} Azn</span>
                                    </div>
                                </div>
                                <form onSubmit={handleAddBasketFormSubmit} className="add-basket">
                                    <div className="amount my-4">
                                        <button type='button' onClick={() => decAmount()}>-</button>
                                        <input type="number" className='value' value={amount} onChange={handleChagngeAmountInput} />
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
