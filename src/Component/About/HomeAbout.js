import React from "react";
import aboutData from "./aboutData.json"
import aboutPic from "../../img/about.jpg";
import { PiSealCheckBold } from "react-icons/pi";
import "./about.scss";

export default function HomeAbout({ selectLanguage, language }) {

    return (
        <div className="aboutCont">
            <div className="aboutUsCont">
                <div data-aos="fade-up" className="aboutPic">
                    <img src={aboutPic}></img>
                </div>
                <div data-aos="fade-down" className="aboutText">
                    {selectLanguage[language].map((elem, index) => {
                        return <p key={index}>
                            {elem.aboutText}
                        </p>
                    })}

                </div>
            </div>
            <div className="aboutUsData">
            {selectLanguage[language].map((elem, index)=>{
                    return <h2 key={index}>{elem.aboutUsData}</h2>
                })}
                <div className="aboutUsDataCont">
                    {aboutData[language].map((elem, index) => {
                        return <div key={index} className="aboutUsDataCard">
                            <div>
                                <PiSealCheckBold></PiSealCheckBold>
                            </div>
                            <div className="aboutUsDataCardText">
                                <p>{elem.text}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}