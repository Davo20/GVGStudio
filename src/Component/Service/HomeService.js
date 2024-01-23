import React from "react";
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

export default function HomeService({ selectLanguage, language }) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
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
            // <h2 data-aos="zoom-out">Services</h2>
            <div className="serviceCont">
                
                {selectLanguage[language].map((lang, index) => {

                    return <Carousel key={index} responsive={responsive}
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        containerClass="carousel-container"
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
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
    )
}