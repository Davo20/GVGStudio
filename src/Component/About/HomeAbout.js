import React from "react";
import aboutData from "./aboutData.json"
import aboutPic from "../../img/about.jpg";
import { PiSealCheckBold } from "react-icons/pi";
import "./about.scss";

export default function HomeAbout({ selectLanguage, language }) {
    // const aboutData = [
    //     {
    //         icon: <PiSealCheckBold></PiSealCheckBold>,
    //         text: "Հայաստանում ֆոտո/վիդեո նկարահանման ոլորտում փորձառուներից է, քանի որ այն շուկայում գործում է 2010 թվականից:"

    //     },
    //     {
    //         icon: <PiSealCheckBold></PiSealCheckBold>,
    //         text: "Շուկայում 13 տարիների ընթացքում գրանցել է իր գործունեության ծավալների և հավատարիմ հաճախորդների կայուն աճ:"

    //     },
    //     {
    //         icon: <PiSealCheckBold></PiSealCheckBold>,
    //         text: "Թողարկել է տարբեր նախագծեր, ավելի քան 30 կարճամետրաժ ֆիլմ (մինչև 15 րոպե և ավելի):"

    //     },
    //     {
    //         icon: <PiSealCheckBold></PiSealCheckBold>,
    //         text: "Ապահովում է նյութերի կատարյալ գաղտնիություն և ապահով արխիվացման համակարգ:"

    //     },
    //     {
    //         icon: <PiSealCheckBold></PiSealCheckBold>,
    //         text: "Ապահովում է միայն արտադրանքի բարձր որակ:"

    //     }
    // ]

    return (
        // <section className="aboutUs">
        //     <div className="aboutHeader">
        //         {selectLanguage[language].map((lang) => {
        //             return <h2>{lang.aboutUs}</h2>
        //         })}
        //     </div>
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
                    return <h2>{elem.aboutUsData}</h2>
                })}
                <div className="aboutUsDataCont">
                    {aboutData[language].map((elem, index) => {
                        return <div className="aboutUsDataCard">
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
        // </section>
    )
}