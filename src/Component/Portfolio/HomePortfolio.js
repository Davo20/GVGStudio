import "./portfolio.scss";
import React, { useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import portfolioData from "./portfolio.json"
import { Parallax } from 'react-scroll-parallax';

export default function Portfolio({ selectLanguage, language }) {
    const [videoOpen, setVideoOpen] = useState(false)
    const [d, setd] = useState("")
    const [readMore, setReadMore] = useState(6)
    const [allProduct, setAllProduct] = useState([])
    const [filterPortfolio, setFilterPortfolio] = useState([...portfolioData])
    let filterWork = ["All", "Imigayin", "Information", "Animation 2D, 3D", "Playful", "Events", "Startup"]

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

    const filterProduct = (value)=>{
        const filter = portfolioData.filter((valuee)=> valuee.format === value || valuee.formatTwo === value)
        setFilterPortfolio([...filter])
        if(value === "All"){
            setFilterPortfolio([...portfolioData])
        }
        if (allProduct.includes(value)) {
            let filters = allProduct.filter((el) => el !== value);
            setAllProduct(filters);
        } else {
            setAllProduct([value]);
        }
    }
    console.log(filterPortfolio)

    return (
        <div className="abouCont">
            <div className="filterButton">
                {filterWork.map((elem, index) => {
                    return <button key={index} onClick={() => filterProduct(elem)}
                        style={{ backgroundColor: elem }}
                        className={`button ${allProduct?.includes(elem) ? "activeColor" : ""
                            }`}>{elem}</button>
                })}
            </div>
            <div className="portfolioCont">

                {filterPortfolio.slice(0, readMore).map((elem, index) => {
                    return <div key={index} className="videoCont" id={elem.id} >
                        {/* <video controls>
                             <source src={elem.video} type="video/mp4"></source>
                        </video> */}
                        <img src={elem.img}></img>
                        <div className="opacityBackground"></div>
                        <div className="watchVideo" id={elem.id} onClick={watchVideoClick}>
                            <CiPlay1 ></CiPlay1>
                        </div>
                    </div>
                })}
            </div>
            {videoOpen && <div className="videoOpen">
                <div className="c">
                    <AiOutlineClose onClick={() => setVideoOpen(false)}></AiOutlineClose>

                    <video controls autoplay>
                        <source src={d} type="video/mp4"></source>
                    </video>
                </div>

            </div>}
            {readMore < filterPortfolio.length ? <button onClick={readMoreClick} className="loadMore">Read More</button> : null}
        </div>
    )
}