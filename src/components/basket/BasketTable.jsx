import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateTotal } from '../../redux/actions/BasketTotalAction';
import { decreaseProductAmount, increaseProductAmount, removeFromBasket } from '../../redux/actions/ProductAction';
import { MainContext } from '../../context/MainContextProvider';


function BasketTable() {
    const basketProducts = useSelector(state => state.productState.basketProducts);
    const basketTotal = useSelector(state => state.basketTotal)
    const dispatch = useDispatch();
    let total = basketTotal.total

    const handleDeleteButton = (productId) => {
        dispatch(removeFromBasket(productId));
    }
    const handleDecreaseButton = (productId) => {
        dispatch(decreaseProductAmount(productId))
    }
    const handleIncreaseButton = (productId) => {
        dispatch(increaseProductAmount(productId))
    }
    useEffect(() => {
        const newTotal = basketProducts.reduce((acc, product) => acc + product.price * (product.basketAmount ? product.basketAmount : 1), 0);
        dispatch(updateTotal(newTotal));
    }, [basketProducts, dispatch]);

    const [alert, setAlert] = useState(false)
    const [orderLinkPath, setOrderLinkPath] = useState('')
    const [alertText, setAlertText] = useState('')

    let minOrderValue = 30

    useEffect(() => {
        if (total > minOrderValue) {
            setAlert(false)
            setOrderLinkPath('/basket/order')
        } else {
            setOrderLinkPath('')
        }

    }, [total, minOrderValue, alert])
    const orderHandleClick = () => {
        if (total === 0) {
            setAlert(true)
            setAlertText('Sifarişi təsdiqləmək üçün səbətinizdə ən az bir məhsul olmalıdır.')
        } else if (total < minOrderValue) {
            setAlert(true)
            setAlertText(`Sifarişi təsdiqləmək üçün minimum məbləğ ${minOrderValue} Azn olmalıdır.`)
        } else {
            setAlert(false)
            setOrderLinkPath('/basket/order')
        }
    }


    const [imagePath, setImagePath] = useState('/basket');
    const { categoryArray, subcategoryArray, productArray } = useContext(MainContext);

    function findProductParams(categoryID, subcategoryID, productID) {
        let category = categoryArray.find((c) => c.id === categoryID);
        let subcategory = subcategoryArray.find((c) => c.id === subcategoryID);
        let product = productArray.find((p) => p.id === productID);
        if(category && subcategory && product){
            setImagePath(`/products/${encodeURIComponent(category.name)}/${encodeURIComponent(subcategory.name)}/${encodeURIComponent(product.name)}`)
        }else{
            setImagePath('/404');
        }
    }


    return (
        <section className="basket">
            <div className="container">
                <div className={alert ? 'basket-alert' : 'basket-alert d-none'}>
                    <p>{alertText}</p>
                </div>
                {
                    basketProducts.length > 0 ? (
                        <div className='table-wrapper'>

                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className='text-start'>Məhsul adı</th>
                                        <th>Qiymət</th>
                                        <th>Say</th>
                                        <th>Cəmi</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        basketProducts.map(product => (
                                            <tr key={product.id}>
                                                <td>
                                                    <Link to={imagePath} onMouseDown={() => findProductParams(product.categoryID, product.subcategoryID, product.id)}  className='product-image'>
                                                        <img src={product.img} alt="product" />
                                                    </Link>
                                                    
                                                </td>
                                                <td>
                                                    <div className='product-name'>
                                                        <p>{product.name}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='product-price'>
                                                        <p>{product.price.toFixed(2)} AZN</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='amount'>
                                                        <button onClick={() => handleDecreaseButton(product.id)}>-</button>
                                                        <span>{product.basketAmount}</span>
                                                        <button onClick={() => handleIncreaseButton(product.id)}>+</button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='product-total'>
                                                        <span>{(product.basketAmount * product.price).toFixed(2)} AZN</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='delete'>
                                                        <button onClick={() => handleDeleteButton(product.id)}><i className='fa-solid fa-xmark'></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        null
                    )
                }
                <div className={basketProducts.length > 0 ? 'table-bottom table-active' : 'table-bottom'}>
                    <div className='basket-confirm'>
                        <h4 className='title'>Səbət</h4>
                        <div className="total">
                            <span>Cəmi</span>
                            <span className="value">{total.toFixed(2)} Azn</span>
                        </div>
                        <Link onClick={() => { orderHandleClick() }} to={orderLinkPath}>Sifarişi təsdiqlə</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BasketTable
