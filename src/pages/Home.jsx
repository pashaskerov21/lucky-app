import React from 'react'
import Layout from './Layout'
import CategorySlider from '../components/product/slider/CategorySlider'
import BannerSection from '../components/banner/BannerSection'
import SubCategoryOrange from '../components/category/SubCategoryOrange'
import SubCategoryGreen from '../components/category/SubCategoryGreen'
import Brands from '../components/brands/Brands'

function Home() {
  return (
    <Layout>
        <BannerSection/>
        <CategorySlider categoryName='ofis ləvazimatları'/>
        <SubCategoryOrange/>
        <CategorySlider categoryName='qida və içkilər'/>
        <SubCategoryGreen/>
        <Brands/>
    </Layout>
  )
}

export default Home
