import React, { useState } from "react";
import "./services.scss";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import imigayin from "../../img/imigayin.jpg";
import informative from "../../img/informative.jpg";
import playful from "../../img/playful.jpg";
import animated from "../../img/animated.jpg";
import shotingVideos from "../../img/shotingVideos.jpg";
import startup from "../../img/startup.jpeg";
import website from "../../img/website.jpg";
import end from "../../img/end.jpg"
import HomeService from "./HomeService";
import Footer from "../Footer/Footer";
import { Outlet, Link } from "react-router-dom";

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


    const servicesArr = [
        {
            servicePic: imigayin,
            service: "imigayin"
        },
        {
            servicePic: informative,
            service: "iinformative",
        },
        {
            servicePic: playful,
            service: "Playful",
        },
        {
            servicePic: animated,
            service: "Animated-2D, 3D",
        },
        {
            servicePic: shotingVideos,
            service: "Shooting and making videos",
        },
        {
            servicePic: startup,
            service: "Visualization of startups",
        },
        {
            servicePic: website,
            service: "Preparation of websites",
        },
        {
            servicePic: end,
            service: "Corporate events, concerts, programs, film shooting and making",
        }

    ]
    // setServiceArr(servicesArr)

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

            </section>
            <Footer selectLanguage={selectLanguage} language={language}></Footer>
        </div>
    )
}