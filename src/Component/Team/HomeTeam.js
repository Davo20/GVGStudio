import React from "react";
import "./team.scss";
import teamPic from "../../img/2.jpg"

export default function Team({ selectLanguage, language }) {

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
            {teamArr.map((elem, index) => {
                return <div data-aos="zoom-out-up" data-aos-delay={elem.dataAosDelay} className="card" key={index} >
                    <div className="animationCard">
                        <div className="pic">
                            <img src={elem.img}></img>
                        </div>
                        <div className="cardInfo">
                            <h3>{elem.name}</h3>
                            <span>{elem.profession}</span>
                            <div className="fullInfo">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}