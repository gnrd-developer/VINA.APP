"use client"

import styles from "../app/page.module.css";
import React, { useEffect, useState } from "react";
import { getSubCategoriesByCategoryName } from '../services/category'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function SubCategory({ categoryName = "Productos Y Servicios", onSubCategoryClick }) {
    const [subCategoryList, setSubCategoryList] = useState([]);
    // const [selectSubCategory, setSelectSubCategory] = useState("");

    useEffect(() => {
        if (categoryName) {
            getSubCategoriesByCategoryName(categoryName).then(data => {
                setSubCategoryList(data);
            });
        }
    }, [categoryName]);

    // const handleSubCategoryClick = (subCategoryName) => {
    //     setSelectSubCategory(subCategoryName);
    // };    

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
            {subCategoryList.map(subCategoryItem => (
                <SwiperSlide className={styles.slide} key={subCategoryItem.id}   
                onClick={() => onSubCategoryClick(subCategoryItem.name)}>
                    <p>Sub Categoría {subCategoryItem.name}</p>
                    <img src={subCategoryItem.image} alt="Tranding" />
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
export default SubCategory