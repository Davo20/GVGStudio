import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./contact.scss";


export default function HomeContact({ selectLanguage, language }) {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_xu7xj59", "template_lasyknu", form.current, "yRQYJNN-RsW3Wa8JW")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        selectLanguage[language].map((lang, index) => {
            return <div className="contactCont" key={index}>
                <div className="addres" data-aos="fade-up">
                    <div className="addresCont">
                        <div>
                            <BsTelephone></BsTelephone>
                        </div>
                        <ul>
                            <li>
                                <h2>{lang.mobileNumber}</h2>
                            </li>
                            <li>+374(91)-30-20-08</li>
                            <li>+374(77)-30-20-08</li>
                        </ul>
                    </div>
                    <div className="addresCont">
                        <div>
                            <MdOutlineEmail></MdOutlineEmail>
                        </div>
                        <ul>
                            <li>
                                <h2>{lang.emailAddres}</h2>
                            </li>
                            <li>gvg_studio@gmail.com</li>
                        </ul>
                    </div>
                    <div className="quickConnect">
                        <h3>{lang.quickConnect}</h3>
                        <ul>
                            <li>
                                <div>
                                    <Link to="https://www.facebook.com/gvg.studio">
                                        <FaFacebook ></FaFacebook >
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to="https://www.instagram.com/gvg__studio/">
                                        <FaInstagram ></FaInstagram >
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to="">
                                        <FaWhatsapp ></FaWhatsapp >
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to="https://www.youtube.com/@gvgstudio5857/featured">
                                        <FaYoutube ></FaYoutube >
                                    </Link>
                                </div>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="message" data-aos="fade-down">
                    <form action="#" ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" required placeholder={lang.contactName}></input>
                        <input type="email" name="user_email" required placeholder={lang.contactEmail}></input>
                        <input type="tel" name="phone" required placeholder={lang.contactMobileNumber}></input>
                        <textarea name="message" placeholder={lang.contactMessage}></textarea>
                        <button type="submit">{lang.sendMessage}</button>
                    </form>
                </div>
            </div>
        })
        // </section>
    )
}