import React from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import HomeContact from "./HomeContact";
import Footer from "../Footer/Footer";
import { Outlet, Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./contact.scss";

export default function Contact({ selectLanguage, language }) {
    return (
        <div>
            <section className="contact" style={{ paddingBottom: 60 }}>
                <div className="contactHeader">
                    {selectLanguage[language].map((lang, index) => {
                        return <div key={index}>
                        <h2>{lang.contactUs}</h2>
                        <div>
                        <Link to="/">{lang.home}</Link>
                        <span>|</span>
                        <Link to="/contact">{lang.contactUs}</Link>
                        </div>
                    </div>
                    })}
                </div>
                {selectLanguage[language].map((lang, index) => {
                        return <div key={index}>
                            <h2>{lang.contactUs}</h2>
                            <p>{lang.contactAbout}</p>
                        </div>
                    })}
                <HomeContact selectLanguage={selectLanguage} language={language}></HomeContact>
            </section>
            <Footer selectLanguage={selectLanguage} language={language}></Footer>
        </div>
    )
}