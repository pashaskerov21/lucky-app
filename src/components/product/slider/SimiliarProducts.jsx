import React from 'react'
import Slider from 'react-slick';
import ProductCard from '../ProductCard';

function SimiliarProducts({ similiarProducts }) {
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
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <section className='similiar-products'>
            <div className="container">
                <h1 className='section-title'>Oxşar Məhsullar</h1>
                <Slider {...settings}>
                    {
                        similiarProducts.map(product => (
                            <div key={product.id} className='d-flex justify-content-center'>
                                <ProductCard product={product} />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}

export default SimiliarProducts
