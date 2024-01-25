import React, { useState } from "react";
import "./services.scss";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeService from "./HomeService";
import Footer from "../Footer/Footer";
import { FaVideo, FaCamera } from "react-icons/fa";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";
import serviceCardData from "./serviceCardData.json"

export default function Services({ selectLanguage, language }) {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 465, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    return (
        <div>
            <section className="service" style={{ paddingBottom: 60 }}>
                <div className="serviceHeader">
                    {selectLanguage[language].map((lang, index) => {
                        return <div key={index}>
                            <h2>{lang.ourService}</h2>
                            <div>
                                <Link to="/">{lang.home}</Link>
                                <span>|</span>
                                <Link to="/services">{lang.ourService}</Link>
                            </div>
                        </div>
                    })}
                </div>
                <HomeService language={language} selectLanguage={selectLanguage}></HomeService>
                <div className="serviceCategory">
                    {serviceCardData[language].map((elem, index)=>{

                    return <div className="serviceCategoryCard">
                        <div className="cardHeader">
                            <FaCamera />
                            <h3>{elem.cardTitle.toUpperCase()}</h3>
                        </div>
                        <div className="cardSection">
                            <h3>{elem.cardInfo}</h3>
                            <div>
                                <ul>
                                    <li>
                                        <MdOutlineCheckCircleOutline></MdOutlineCheckCircleOutline>
                                        <p>{elem.cardSpan}</p>
                                    </li>
                                    <li>
                                        <MdOutlineCheckCircleOutline></MdOutlineCheckCircleOutline>
                                        <p>{elem.cardSpanTwo}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="cardPrice">
                            <span>{`${elem.cardPrice.toLocaleString()}${elem.price}`}</span>
                        </div>
                    </div>
                    })}
                </div>

            </section>
            <Footer selectLanguage={selectLanguage} language={language}></Footer>
        </div>
    )
}