import React from 'react'
import Layout from './Layout'
import { useSelector } from 'react-redux';
import ProductCard from '../components/product/ProductCard';

function Wishlist() {
  const wishlistProducts = useSelector(state => state.wishlistProducts);
  return (
    <Layout>
      <section className='wishlist'>
        <div className="container">
        <h1 className='section-title'>İstək Siyahısı</h1>
          {
            wishlistProducts.length > 0 ? (
              <div className="row">
                {
                  wishlistProducts.map(product => (
                    <div key={product.id} className="col-12 col-md-6 col-lg-4 col-xxl-3">
                      <ProductCard product={product}/>
                    </div>
                  ))
                }
              </div>
            ) : (
              null
            )
          }
        </div>
      </section>
    </Layout>
  )
}

export default Wishlist
