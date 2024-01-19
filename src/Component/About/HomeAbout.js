import React from "react";
import aboutPic from "../../img/about.jpg";
import "./about.scss";

export default function HomeAbout({ selectLanguage, language }) {
    return (
        // <section className="aboutUs">
        //     <div className="aboutHeader">
        //         {selectLanguage[language].map((lang) => {
        //             return <h2>{lang.aboutUs}</h2>
        //         })}
        //     </div>
        <div className="aboutCont">
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
        // </section>
    )
}