import React from 'react'
import Slider from 'react-slick';
import { bannerArr } from '../../data/BannerData';




function BannerSection() {

    var settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        prevArrow: <CusttomPrevArrow/>,
        nextArrow: <CusttomNexrArrow/>,
    };
    return (
        <section className="banner">
            <div className="container">
                <Slider {...settings} className='banner-slider'>
                    {
                        bannerArr.map((img, index) => (
                            <div key={index} className="banner-img">
                                <img src={img} alt="banner" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}

const CusttomPrevArrow = (props) =>{
    return (
        <button onClick={props.onClick} className={` custom-slick-arrow prev`}><i className='fa-solid fa-chevron-left'></i></button>
    )
}
const CusttomNexrArrow = (props) =>{
    return (
        <button onClick={props.onClick} className={` custom-slick-arrow next`}><i className='fa-solid fa-chevron-right'></i></button>
    )
}

export default BannerSection



