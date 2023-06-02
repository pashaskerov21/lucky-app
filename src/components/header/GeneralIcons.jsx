import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import basketIcon from '../../image/icon/cart.svg'
import heartIcon from '../../image/icon/heart.svg'

function GeneralIcons() {
    const wishlistProducts = useSelector(state => state.wishlistProducts);
    const basketProducts = useSelector(state => state.basketProducts);
    return (
        <div className="general-icons">
            <Link to='/basket'>
                <img src={basketIcon} alt="icon" />
                <span>{basketProducts.length}</span>
            </Link>
            <Link to='/wishlist'>
                <img src={heartIcon} alt="icon" />
                <span>{wishlistProducts.length}</span>
            </Link>
        </div>
    )
}

export default GeneralIcons
