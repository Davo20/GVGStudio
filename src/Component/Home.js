import React, { useState, useRef, useEffect } from "react";
import Nav from "./Nav/Nav"
import Header from "./Header/Header";
import HomeAbout from "./About/HomeAbout";
import Aside from "./Aside/Aside"
import HomePortfolio from "./Portfolio/HomePortfolio";
import HomeClients from "./Clients/HomeClients";
import HomeContact from "./Contact/HomeContact";
import Footer from "./Footer/Footer"
import aboutPic from "../img/about.jpg"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import teamPic from "../img/2.jpg";
import { BsHandIndexThumb, BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import imigayin from "../img/imigayin.jpg";
import informative from "../img/informative.jpg";
import playful from "../img/playful.jpg";
import animated from "../img/animated.jpg";
import shotingVideos from "../img/shotingVideos.jpg";
import startup from "../img/startup.jpeg";
import website from "../img/website.jpg";
import end from "../img/end.jpg"

export default function Home({ selectLanguage, language }) {
    useEffect(() => {
        Aos.init()
    }, [])
    const [array, setArr] = useState([...new Array(9).fill(9)])

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
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div>
            <Header selectLanguage={selectLanguage} language={language}></Header>
            <section className="aboutUs" >
                {selectLanguage[language].map((lang, index) => {
                    return <h2 key={index} className="sectionName" data-aos="zoom-out">{lang.aboutUs}</h2>
                })}
                <HomeAbout selectLanguage={selectLanguage} language={language}></HomeAbout>
            </section>
            {/* SERVICES */}
            <section className="service">
                {selectLanguage[language].map((lang) => {
                    return <h2 key={Math.random()} className="sectionName" data-aos="zoom-out">{lang.ourService}</h2>
                })}
                <div className="serviceCont">
                    {selectLanguage[language].map((lang, index) => {

                        return <Carousel key={index} responsive={responsive}
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            containerClass="carousel-container"
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlaySpeed={5000}
                            autoPlay={true}
                            focusOnSelect={true}
                            rewindWithAnimation={true}
                            minimumTouchDrag={10}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px">
                            <div className="hh">
                                <h2>{lang.imigayin}</h2>
                                <img src={imigayin}></img>
                            </div>
                            <div className="hh">
                                <h2>{lang.informative}</h2>
                                <img src={informative}></img>
                            </div>
                            <div className="hh">
                                <h2>{lang.playful}</h2>
                                <img src={playful}></img>
                            </div>
                            <div className="hh">
                                <h2>{lang.animated}</h2>
                                <img src={animated}></img>
                            </div>
                            <div className="hh">
                                <h2>{lang.shotingVideos}</h2>
                                <img src={shotingVideos}></img>
                            </div>
                            <div className="hh">
                                <h2>{lang.visualizationOfStartups}</h2>
                                <img src={startup}></img>
                            </div>
                            <div className="hh">
                                <h2>{lang.reparationOfWebsites}</h2>
                                <img src={website}></img>
                            </div>
                            <div className="hh">
                                <h2>{lang.corporateEvents}</h2>
                                <img src={end}></img>
                            </div>
                        </Carousel>
                    })}
                </div>
            </section>
            {/* PORTFOLIO SECTION */}
            <section className="portfolio">
                {selectLanguage[language].map((lang, index) => {
                    return <h2 key={index} className="sectionName" data-aos="zoom-out">{lang.portfolio}</h2>
                })}
                <HomePortfolio selectLanguage={selectLanguage} language={language}></HomePortfolio>
            </section>
            {/* TEAM SECTION */}
            <section className="team">
                {selectLanguage[language].map((lang, index) => {
                    return <h2 key={BsHandIndexThumb} className="sectionName" data-aos="zoom-out">{lang.ourTeam}</h2>
                })}
                <HomeClients selectLanguage={selectLanguage} language={language}></HomeClients>
            </section>
            {/* CONTACT SECTION */}
            <section className="contact">
                {selectLanguage[language].map((lang, index) => {
                    return <div key={index}>
                        <h2 className="sectionName" data-aos="zoom-out">{lang.contactUs}</h2>
                        <p data-aos="zoom-out">{lang.contactAbout}</p>
                    </div>
                })}

                <HomeContact selectLanguage={selectLanguage} language={language}></HomeContact>
            </section>
            <Footer selectLanguage={selectLanguage} language={language}></Footer>
        </div >
    )
}