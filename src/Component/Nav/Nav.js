import React, { useState, useRef } from "react";
import Burger from "./Burger"
import { FaPlay } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
import { BsPlayFill, BsPlay } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
// import logo from "../../img/logo4.png";
import { Outlet, Link } from "react-router-dom";
import { Select } from 'antd';
import logo from "../../img/logo++.png"
import "./nav.scss";
// import { useState } from "react";

export default function Nav({ languageClick, language, selectLanguage }) {
    const [navSticky, setNavStiky] = useState(false)
    const [menuBurger, setMenuBurger] = useState(false)
    const styleNav = useRef(null)
    function stiky() {
        if (window.scrollY > 100) {
            setNavStiky(true)

        }
        else {
            setNavStiky(false)

        }
    }
    window.addEventListener("scroll", stiky)
    return (
        <nav className={"navBar " + (navSticky && "scrollNavActive")} ref={styleNav}>
            {/* <nav className={navSticky ? "scrollNavActive" : "navBar"}></nav> */}
            <div className="navCont">
                <div className="logo">
                    {/* <img src={logo}></img> */}
                    {/* <span>STUDIO</span>
                    <span>GVG</span> */}
                    <img src={logo}></img>
                </div>

                <div className="navBarMenu">
                    {selectLanguage[language].map((lang) => {
                        return <ul key={Math.random()}>
                            <Link to="/">
                                <li>{lang.home}</li>
                            </Link>
                            <Link to="/about">
                                <li>{lang.about}</li>
                            </Link>
                            <Link to="/services">
                                <li>{lang.service}</li>
                            </Link>
                            <Link to="/portfolio">
                                <li>{lang.portfolio}</li>
                            </Link>
                            <Link to="/team">
                                <li>{lang.clients}</li>
                            </Link>
                            <Link to="/contact">
                                <li>{lang.contact}</li>
                            </Link>
                            <li>
                                <div className="selectLanguage">
                                    {/* <select value={language} onChange={languageClick} autoFocus>
                                        <option value="English">EN</option>
                                        <option value="Armenian">AM</option>
                                        <option value="Russian">RU</option>
                                    </select> */}
                                    <Select
                                        // labelInValue
                                        defaultValue={{ value: "English", label: "EN" }}
                                        style={{ width: 60, height: 20 }}
                                        listItemHeight={30}
                                        onChange={languageClick}
                                        options={[
                                            {
                                                value: "English",
                                                label: "EN"
                                            },
                                            {
                                                value: "Armenian",
                                                label: "AM"
                                            },
                                            {
                                                value: "Russian",
                                                label: "RU"
                                            },
                                        ]}
                                    />
                                </div>
                            </li>
                        </ul>
                    })}
                </div>
                
                    {/* <FiMenu className="burgerOpen" onClick={() => setMenuBurger(true)}></FiMenu> */}
                    {menuBurger ? <MdOutlineClose className="burgerFalse" onClick={() => setMenuBurger(false)}></MdOutlineClose> : <FiMenu className="burgerOpen" onClick={() => setMenuBurger(true)}></FiMenu>}
                    <Burger navSticky={navSticky} menuBurger={menuBurger} languageClick={languageClick} language={language} selectLanguage={selectLanguage} setMenuBurger={setMenuBurger}></Burger>
                
            </div>
        </nav>
    )
}