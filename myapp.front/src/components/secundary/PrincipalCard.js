/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from "react";
import { getAllCategories } from '../../services/category'
import "./principalCard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import { EffectCoverflow, Pagination, Navigation } from "swiper";

function PrincipalCard() {
    const [categoryList, setCategoryList] = useState([])
    useEffect(() => {
        getAllCategories({ setCategoryList })
    }, [])
    return (
        <>
            <div className="category">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    {categoryList.map(categoryItem => (
                        <SwiperSlide className="swiper-slide" key={categoryItem.id}>
                            <img src={categoryItem.image} alt="" />
                        </SwiperSlide>
                    ))}
                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </>
    )
} export default PrincipalCard
