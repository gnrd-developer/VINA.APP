"use client"
// import Image from "next/image";
import styles from "../app/page.module.css";

import React, { useEffect, useState } from "react";
import { getAllCategories } from '../services/category'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


function Category({onCategoryClick}) {

    const [categoryList, setCategoryList] = useState([])
    
    useEffect(() => {
        getAllCategories({ setCategoryList })
    }, [])

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            speed={400}
            coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 300,
                modifier: 2,
                slideShadows: true,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className={styles.swiper}
        >
            {categoryList.map(categoryItem => (
                <SwiperSlide className={styles.slide} key={categoryItem.id}
                    onClick={() => onCategoryClick(categoryItem.name)}>
                    <p>Categoría {categoryItem.name}</p>
                    <img src={categoryItem.image} alt="Tranding" />
                </SwiperSlide>
            ))}
            <div className="slider-controller">
                <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>

                <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>

                <div className="swiper-pagination"></div>

            </div>



        </Swiper>
    )
}
export default Category