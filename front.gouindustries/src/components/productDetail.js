"use client"
import styles from "../app/page.module.css";
import React, { useEffect, useState } from "react";
import { getProductById, getProductsBySubCategory } from "../services/product";
import { addToCart } from "@/services/shoppingCart";

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


function ProductDetail({ id }) {
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);

    const [showProductFeedback, setProductFeedback] = React.useState({
        show: false,
        status: false,
        infoText: "",
    });

    const [amountToAdd, setAmount] = useState(1);

    const add = () => {
        setAmount(amountToAdd + 1);
    };

    const subtract = () => {
        setAmount(amountToAdd - 1);
    };

    const addProduct = (productToAdd) => {

        addToCart({ amountToAdd, productToAdd, setProductFeedback });
    };

    const closeProductFeedback = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setProductFeedback({ show: false });
    };

    useEffect(() => {
        if (id) {
            getProductById(id.toString()).then(
                data => {
                    setProduct(data);
                    if (data.subCategory) {
                        getProductsBySubCategory(data.subCategory.name).then(
                            relatedData => {
                                setRelatedProducts(relatedData);
                            }
                        )
                    }
                });
        }
    }, [id]);

    return (
        <div className={styles.main2}>
            <div className="container-fluid">

                <h1>Nombre Producto: {product && product.name}</h1>

                <div className="row">
                    <div className="col-6">
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
                            <SwiperSlide className={styles.slide}>
                                <img src={product && product.image} alt="Tranding" />
                            </SwiperSlide>

                            <SwiperSlide className={styles.slide}>
                                <img src={product && product.img2} alt="Tranding" />
                            </SwiperSlide>

                            <SwiperSlide className={styles.slide}>
                                <img src={product && product.img3} alt="Tranding" />
                            </SwiperSlide>

                            <SwiperSlide className={styles.slide}>
                                <img src={product && product.img4} alt="Tranding" />
                            </SwiperSlide>

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
                    </div>

                    <div className="col-6">
                        <div className={styles.category}>
                            <div>

                                <div>

                                    <button
                                        onClick={subtract}
                                        disabled={amountToAdd === 1}
                                    >
                                    </button>

                                    <span>{amountToAdd}</span>

                                    <button
                                        onClick={add}
                                    >
                                    </button>

                                </div>{" "}
                                {/* lo que contiene este div son los botones para agregar y quitar la cantidad de productos a llevar*/}


                                <br></br>

                                <button
                                    onClick={() => {
                                        addProduct(product);
                                    }}
                                >
                                    Añadir A Orden De Compra
                                </button>



                                {showProductFeedback.show && (
                                    <Snackbar
                                        open={showProductFeedback.show}
                                        autoHideDuration={7000}
                                        onClose={closeProductFeedback}
                                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                                    >
                                        <Alert
                                            onClose={closeProductFeedback}
                                            severity={showProductFeedback.status ? "success" : "error"}
                                            sx={{ width: "600px" }}
                                        >
                                            {showProductFeedback.infoText}
                                        </Alert>
                                    </Snackbar>
                                )}


                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <div className={styles.category}>
                            <p>Descripción: {product && product.description}</p>
                            <p>Por Solo {product && product.price.toFixed(0)} CLP</p>
                            <p>Sub Categoria {product && product.subCategory.name}</p>
                        </div>
                    </div>

                    <div className="col-6">
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
                            {relatedProducts.map(related => (
                                <SwiperSlide className={styles.slide} key={related.id}>
                                    <p>{related.name}</p>
                                    <img src={related.image} alt={related.name} />
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
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail