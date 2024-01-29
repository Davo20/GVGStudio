import "./portfolio.scss";
import React, { useState, useEffect, useRef } from "react";
import { CiPlay1 } from "react-icons/ci";
import portfolioData from "./portfolio.json";
import portfolioButton from "./portfolioButton.json"


export default function HomePortfolio({ selectLanguage, language }) {
    const [videoOpen, setVideoOpen] = useState(false)
    const [d, setd] = useState("")
    const [readMore, setReadMore] = useState(6)
    const [allProduct, setAllProduct] = useState([])
    const [filterPortfolio, setFilterPortfolio] = useState([...portfolioData])
    const video = useRef(null)
    let watchMoreButton = {
        English: { watchMore: "Watch More" },
        Armenian: { watchMore: "Դիտել ավելին" },
        Russian: { watchMore: "Посмотреть больше" }
    }
    const watchVideoClick = (e) => {
        portfolioData.map((elem) => {
            if (e.target.id == elem.id) {
                setVideoOpen(true)
                setd(elem.video)
            }
        })
    }
    const readMoreClick = () => {
        setReadMore((value) => value + 3)
    }

    const filterProduct = (value) => {
        const filter = portfolioData.filter((valuee) => valuee.formatEng === value || valuee.formatArm === value || valuee.formatRu === value || valuee.formatTwoEng === value || valuee.formatTwoArm === value || valuee.formatTwoRu === value)
        setFilterPortfolio([...filter])
        if (value === "All" || value === "Բոլորը" || value === "Все") {
            setFilterPortfolio([...portfolioData])
        }
        if (allProduct.includes(value)) {
            let filters = allProduct.filter((el) => el !== value);
            setAllProduct(filters);
        } else {
            setAllProduct([value]);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);
    const handleOutsideClick = (e) => {
        if (video.current && video.current.contains(e.target)) {
            setVideoOpen(false);
        }
    };

    return (
        <div className="abouCont">
            <div className="filterButton">
                {portfolioButton[language].map((elem, index) => {
                    return <button key={index} onClick={() => filterProduct(elem)}
                        style={{ backgroundColor: elem }}
                        className={`button ${allProduct?.includes(elem) ? "activeColor" : ""
                            }`}>{elem}</button>
                })}
            </div>
            <div className="portfolioCont">

                {filterPortfolio.slice(0, readMore).map((elem, index) => {
                    return <div key={index} className="videoCont" id={elem.id} data-aos="zoom-in-up">
                        <img src={elem.img}></img>
                        <div className="opacityBackground"></div>
                        <div className="watchVideo" id={elem.id} onClick={watchVideoClick}>
                            <CiPlay1 ></CiPlay1>
                        </div>
                    </div>
                })}
            </div>
            {videoOpen && <div ref={video} className="videoOpen">
                <iframe allow="fullscreen;autoplay" width="640" height="360" src={d}></iframe>
            </div>}

            {readMore < filterPortfolio.length ? <button onClick={readMoreClick} className="loadMore">{watchMoreButton[language].watchMore}</button> : null}
        </div>

    )
}