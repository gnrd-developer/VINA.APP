"use client"
import styles from "../app/page.module.css"
import { getProductsBySubCategory } from "@/services/product";
import { useEffect, useState } from "react"


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function ProductList({ subCategoryName = "Productos", onProductClick }) {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        if (subCategoryName) {
            getProductsBySubCategory(subCategoryName).then(data => {
                setProductList(data);
            });
        }
    }, [subCategoryName]);

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
            {productList.map(productListItem => (
                <SwiperSlide className={styles.slide} key={productListItem.id}
                onClick={() => onProductClick(productListItem.id)}>
                    <p>{productListItem.name}</p>
                    <img src={productListItem.image} alt="Tranding" />
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
export default ProductList