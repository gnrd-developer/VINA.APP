"use client"
import React, { useState } from "react";
import Category from "@/components/category";
import SubCategory from "@/components/subCategory";
import styles from "./page.module.css";
import ProductList from "@/components/productList";
import ProductDetail from "@/components/productDetail";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

export default function Home() {

  const [isDayMode, setIsDayMode] = useState(true);

  const toggleMode = () => {
    setIsDayMode(!isDayMode);
  };

  const [selectedCategory, setSelectedCategory] = useState("Productos Y Servicios");
  const [selectSubCategory, setSelectSubCategory] = useState("Productos");
  const [selectIdProduct, setSelecIdProduct] = useState(1);
  const [selectSubCategoryName, setSelectSubCategoryName] = useState("Productos");

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectSubCategory(subCategory);
  }

  const handleProductDetailClick = (productID, subCategoryName) => {
    setSelecIdProduct(productID);
    setSelectSubCategoryName(subCategoryName);
  }


  return (
    <main className={isDayMode ? styles.mainDia : styles.mainNoche}>

      <div className="container-fluid">
        
        <div className="row">
          <div className="col-6">
            <div className={styles.category}>
              <Category onCategoryClick={handleCategoryClick} />
            </div>
          </div>
          <div className="col-6">
            <div className={styles.category}>
              <SubCategory categoryName={selectedCategory} onSubCategoryClick={handleSubCategoryClick} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <div className={styles.productS}>
              <ProductList subCategoryName={selectSubCategory} onProductClick={handleProductDetailClick} />
            </div>
          </div>

          <div className="col-4">
            <div className={styles.commandConrol}>
              <div className="container-fluid">

                <div className="row">

                  <button className={styles.switchButton} onClick={toggleMode}>
                    <div className={styles.icons}>
                      <img src="/moon.gif" alt="Sun" width="30" height="30" />

                      <img src="/moon.gif" alt="Sun" width="30" height="30" />
                    </div>
                  </button>

                  <p className={styles.switchButton2}>publicita con nosotros</p>

                </div>

                <div className="row">

                  <div className={styles.switchButton2}>
                    <p>gnrd.developer@gmail.com</p>
                  </div>

                </div>

                <div className="row">

                  <div className={styles.switchButton2}>
                    <p>Horario de Atención: siempre abierto</p>
                  </div>

                </div>

                <div className="row">

                  <div className={styles.switchButton2}>
                    <p>Comuniquece con Raul.</p>
                  </div>

                </div>

                <div className="row">

                  <div className={styles.switchButton2}>
                    <p>Instagram</p>
                  </div>

                </div>

                <div className="row">

                  <div className={styles.switchButton2}>
                    <p>quienes somos</p>
                  </div>

                  <div className={styles.switchButton2}>
                    <p>mision</p>
                  </div>     

                  <div className={styles.switchButton2}>
                    <p>vision</p>
                  </div>                                   

                </div>                              

              </div>
            </div>
          </div>

        </div>

        <div className="row">
          <div className="col-12">
            <div className={styles.centralProduct}>

              <Swiper
                effect={'cube'}
                grabCursor={true}
                loop={true}
                slidesPerView={'auto'}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={true}

                modules={[EffectCube, Pagination]}
                className="otroSwiper"
              >

                <SwiperSlide>
                  <ProductDetail id={selectIdProduct} subCategoryName={selectSubCategoryName} />
                </SwiperSlide>

                <SwiperSlide>
                  <ProductDetail id={selectIdProduct} subCategoryName={selectSubCategoryName} />
                </SwiperSlide>

              </Swiper>

            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

