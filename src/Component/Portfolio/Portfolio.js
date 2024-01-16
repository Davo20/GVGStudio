import React, { useState } from "react";
import HomePortfolio from "./HomePortfolio";
import Footer from "../Footer/Footer";
import { Outlet, Link } from "react-router-dom";
import "./portfolio.scss";

export default function Portfolio({ selectLanguage, language }) {
    // const [array, setArr] = useState([...new Array(9).fill(9)])
    // console.log(array)
    return (
        <div>
            <section className="portfolio" style={{ paddingBottom: 60 }}>
                <div className="portfolioHeader">
                    {selectLanguage[language].map((lang, index) => {
                        return <div key={index}>
                            <h2>{lang.portfolio}</h2>
                            <div>
                                <Link to="/">{lang.home}</Link>
                                <span>|</span>
                                <Link to="/portfolio">{lang.portfolio}</Link>
                            </div>
                        </div>
                    })}
                </div>
                <HomePortfolio></HomePortfolio>
            </section>
            <Footer selectLanguage={selectLanguage} language={language}></Footer>
        </div>
    )
}