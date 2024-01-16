import React from "react";
import aboutPic from "../../img/about.jpg";
import "./about.scss";

export default function About({ selectLanguage, language }) {
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
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        // </section>
    )
}