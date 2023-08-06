import React, { useContext, useState } from 'react'
import heartIconOutline from '../../image/icon/heart-outline.svg'
import heartIconFilled from '../../image/icon/heart-filled.svg'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToBasket, addToWishlist, removeFromWishlist } from '../../redux/actions/ProductAction';
import { MainContext } from '../../context/MainContextProvider';

function ProductCard({ product }) {

  const { categoryArray, subcategoryArray } = useContext(MainContext);
  const category = categoryArray.find((c) => c.id === product.categoryID);
  const subcategory = subcategoryArray.find((c) => c.id === product.subcategoryID);


  const wishlistProducts = useSelector(state => state.productState.wishlistProducts);
  const dispatch = useDispatch();
  const [isAlreadyInBasket, setIsAlreadyInBasket] = useState(false);


  const heartHandleClick = () => {
    if (wishlistProducts.find(item => item.id === product.id)) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };
  const basketHandleClick = () => {
    if (!isAlreadyInBasket) {
      let basketProduct = {
        ...product,
        basketStatus: true,
        basketAmount: 1,
      }
      dispatch(addToBasket(basketProduct));
      toast.success('Məhsul səbətə əlavə olundu');
      setIsAlreadyInBasket(true)
    }
  }
  const isWishlist = wishlistProducts.find((item) => item.id === product.id);
  return (
    <div className='product-card'>
      
      <div className='header'>
        {
          product.isNew && <span className="product-badge">Yeni</span>
        }
        <button className='heart-button' onClick={heartHandleClick}>
          <img src={isWishlist ? heartIconFilled : heartIconOutline} alt="heart-icon" />
        </button>
      </div>
      <Link to={`/products/${encodeURIComponent(category?.name)}/${encodeURIComponent(subcategory?.name)}/${encodeURIComponent(product?.name)}`} className='product-image'>
        <img src={product.img} alt="product" />
      </Link>
      <div className="info">
        <div className='name'>
          <p>{product.name}</p>
        </div>
        <div className='price'>
          {
            product.discount ? (
              <>
                <span className='new'>{product.price.toFixed(2)} Azn</span>
                <span className='old'>{product.oldPrice.toFixed(2)} Azn</span>
              </>
            ) : (
              <span className='new'>{product.price.toFixed(2)} Azn</span>
            )
          }

        </div>
      </div>
      <button onClick={basketHandleClick} className="basket-button">Səbətə at</button>
    </div>
  )
}




export default ProductCard
