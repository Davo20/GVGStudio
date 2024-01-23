import React from "react";
import HomeClients from "./HomeClients";
import Footer from "../Footer/Footer";
import { Outlet, Link } from "react-router-dom";
import "./clients.scss";
import teamPic from "../../img/2.jpg"

export default function Team({ selectLanguage, language }) {

    return (
        <div>
            <section className="team" style={{ paddingBottom: 60 }}>
                <div className="teamHeader">
                    {selectLanguage[language].map((lang, index) => {
                        return <div key={index}>
                        <h2>{lang.ourClients}</h2>
                        <div>
                            <Link to="/">{lang.home}</Link>
                            <span>|</span>
                            <Link to="/team">{lang.ourClients}</Link>
                        </div>
                    </div>
                    })}
                </div>
                <HomeClients selectLanguage={selectLanguage} language={language}></HomeClients>
            </section>
            <Footer selectLanguage={selectLanguage} language={language}></Footer>
        </div>
    )
}