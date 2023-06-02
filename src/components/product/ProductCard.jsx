import React, { useState } from 'react'
import heartIconOutline from '../../image/icon/heart-outline.svg'
import heartIconFilled from '../../image/icon/heart-filled.svg'
import { Link } from 'react-router-dom';
import { productCategories } from '../../data/ProductData';
import { addToWishlist, removeFromWishlist } from '../../redux/actions/WishListActions';
import { addToBasket, removeFromBasket } from '../../redux/actions/BasketActions';
import { connect, useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function ProductCard({ product }) {


  function findCategoryAndSubCategory(productId) {
    for (const category of productCategories) {
      for (const subCategory of category.subcategories) {
        for (const product of subCategory.products) {
          if (product.id === productId) {
            return {
              category: category,
              subCategory: subCategory,
            };
          }
        }
      }
    }

    return null;
  }

  const { category, subCategory } = findCategoryAndSubCategory(product.id);


  const wishlistProducts = useSelector(state => state.wishlistProducts);
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
      dispatch(addToBasket(product));
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
      <Link to={`/products/${encodeURIComponent(category.name)}/${encodeURIComponent(subCategory.name)}/${encodeURIComponent(product.name)}`} className='product-image'>
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


const mapStateToProps = (state) => {
  return {
    wishlistProducts: state,
    basketProducts: state,
  };
};

const mapDispatchToProps = {
  addToWishlist,
  removeFromWishlist,
  addToBasket,
  removeFromBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
