import React, { useContext, useEffect, useState } from 'react'
import Slider from 'react-slick';
import ProductCard from '../ProductCard';
import { MainContext } from '../../../context/MainContextProvider';

function CategorySlider({ categoryName }) {

    const { categoryArray, productArray } = useContext(MainContext);
    const category = categoryArray.find((category) => category.name === categoryName)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (category) {
            let fileredProducts = category ? productArray.filter((product) => product.categoryID === category.id) : [];
            if (fileredProducts.length > 0) {
                fileredProducts = fileredProducts.length > 0 && fileredProducts.filter((product) => product.bestSeller);
                setProducts([...fileredProducts]);
            }
        }

    }, [category, productArray])
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
        <>
            {
                products.length > 0 ? (
                    <section className="category-slider section-gray">
                        <div className="container">
                            <h2 className="section-title">{category.name}</h2>
                            <Slider {...settings}>
                                {
                                    products.map(product => (
                                        <div key={product.id} className='d-flex justify-content-center'>
                                            <ProductCard product={product} />
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </section>
                ) : null
            }
        </>
    )
}

export default CategorySlider
