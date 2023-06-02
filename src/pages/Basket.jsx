import React from 'react'
import Layout from './Layout'
import BasketTable from '../components/basket/BasketTable';
import DiscountProduct from '../components/product/slider/DiscountProduct';

function Basket() {
    return (
    <Layout>
        <BasketTable/>
        <DiscountProduct/>
    </Layout>
  )
}

export default Basket
