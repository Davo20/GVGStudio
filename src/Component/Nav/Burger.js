import React, { useState } from "react";
import { Select } from 'antd';
import { Outlet, Link } from "react-router-dom";
import "./nav.scss";

export default function Burger({ languageClick, language, selectLanguage, menuBurger, setMenuBurger }) {
    return (
        <div className={"burgerNavigationBar " + (menuBurger && "navStikyBurger")}>
            <div className="navBarMenuBurger">
                {selectLanguage[language].map((lang) => {
                    return <ul key={Math.random()}>
                        <div className="menuLink">
                            <Link to="/" onClick={()=>setMenuBurger(false)}>
                                <li>{lang.home}</li>
                            </Link>
                        </div>
                        <div className="menuLink">
                            <Link to="/about" onClick={()=>setMenuBurger(false)}>
                                <li>{lang.about}</li>
                            </Link>
                        </div>
                        <div className="menuLink">
                            <Link to="/services" onClick={()=>setMenuBurger(false)}>
                                <li>{lang.service}</li>
                            </Link>
                        </div>
                        <div className="menuLink">
                            <Link to="/portfolio" onClick={()=>setMenuBurger(false)}>
                                <li>{lang.portfolio}</li>
                            </Link>
                        </div>
                        <div className="menuLink">
                            <Link to="/clients" onClick={()=>setMenuBurger(false)}>
                                <li>{lang.clients}</li>
                            </Link>
                        </div>
                        <div className="menuLink">
                            <Link to="/contact" onClick={()=>setMenuBurger(false)}>
                                <li>{lang.contact}</li>
                            </Link>
                        </div>
                        <div className="menuLink">
                        <li>
                            <div className="selectLanguage">
                              
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
                        </div>
                    </ul>
                })}
            </div>
        </div>
    )
}