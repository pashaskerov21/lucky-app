import React from 'react'
import Slider from 'react-slick'
import { brandArr } from '../../data/Brand'

function Brands() {
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
        <section className="brands">
            <div className="container">
                <h1 className="section-title">Brendlərimiz</h1>
                <Slider {...settings} className='brands'>
                    {
                        brandArr.map((brand, index) => (
                            <div key={index} className="brand">
                                <img src={brand} alt="brand" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}

export default Brands
