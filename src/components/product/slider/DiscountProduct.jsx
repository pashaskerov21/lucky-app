import React from 'react'
import { productCategories } from '../../../data/ProductData';
import Slider from 'react-slick';
import ProductCard from '../ProductCard';

function DiscountProduct() {
    let discountProducts = [];
    productCategories.forEach(category => {
        category.subcategories.forEach(subcategory => {
            let filteredProducts = subcategory.products.filter(product => product.discount)
            discountProducts.push(...filteredProducts)
        })
    })
    var settings = {
        dots: true,
        appendDots: (dots) => (
            <ul>
                {dots.slice(0, 8)}
            </ul>
        ),
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <section className='discount-products'>
            {
                discountProducts.length > 0 ? (
                    <div className="container">
                <h1 className="section-title">Endirimli Məhsullar</h1>
                <Slider {...settings}>
                    {
                        discountProducts.map(product => (
                            <div key={product.id} className='d-flex justify-content-center'>
                                <ProductCard product={product} />
                            </div>
                        ))
                    }
                </Slider>
            </div>
                ) : null
            }
        </section>
    )
}

export default DiscountProduct
