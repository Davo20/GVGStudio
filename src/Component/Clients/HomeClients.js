import React from "react";
import "./clients.scss";
import teamPic from "../../img/2.jpg"
import collaboratorData from "./collaboratorData.json"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function HomeClients({ selectLanguage, language }) {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const teamArr = [
        {
            img: teamPic,
            name: "Arman",
            profession: "IT Specialist",
            dataAosDelay: 300
        },
        {
            img: teamPic,
            name: "Arman",
            profession: "IT Specialist",
            // dataAosDuration: 700
            dataAosDelay: 400
        },
        {
            img: teamPic,
            name: "Arman",
            profession: "IT Specialist",
            // dataAosDuration: 800
            dataAosDelay: 500
        },
        {
            img: teamPic,
            name: "Arman",
            profession: "IT Specialist",
            // dataAosDuration: 1000
            dataAosDelay: 600
        }
    ]

    return (
        <div className="teamCont">
            <div>
                {selectLanguage[language].map((elem, index) => {
                    return <h2 key={index} className="sectionName">{elem.ourClients}</h2>
                })}
            </div>
            <Carousel className="slider" responsive={responsive}
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
                {collaboratorData.map((elem, index) => {
                    return <div key={index} className="logoCollaborator">
                        <img src={elem.img}></img>
                    </div>

                })}
            </Carousel>

        </div>
    )
}