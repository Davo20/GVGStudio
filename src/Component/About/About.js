import React from "react";
import HomeAbout from "./HomeAbout";
import Footer from "../Footer/Footer"
import aboutPic from "../../img/about.jpg";
import { Outlet, Link } from "react-router-dom";
import "./about.scss";

export default function About({ selectLanguage, language }) {
    return (
        <div>
            <section className="aboutUs" style={{ paddingBottom: 60 }}>
                <div className="aboutHeader" >
                    {selectLanguage[language].map((lang, index) => {
                        return <div key={index}>
                            <h2>{lang.aboutUs}</h2>
                            <div>
                                <Link to="/">{lang.home}</Link>
                                <span>|</span>
                                <Link to="/about">{lang.aboutUs}</Link>
                            </div>
                        </div>
                    })}
                </div>
                <HomeAbout selectLanguage={selectLanguage} language={language}></HomeAbout>
            </section>
            <Footer selectLanguage={selectLanguage} language={language}></Footer>
        </div>
    )
}