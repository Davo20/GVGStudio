import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import { Input, InputNumber, AutoComplete, Button, Form, Select, } from 'antd';
import Aos from "aos";
import "aos/dist/aos.css";
import "./contact.scss";

const { Option } = Select;

export default function HomeContact({ selectLanguage, language }) {
    const [form] = Form.useForm();

    const formm = useRef()

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select name="user_prefix" style={{ width: 80 }}>
                <Option value="374">+374</Option>
                <Option value="7">+7</Option>
            </Select>
        </Form.Item>
    );
    const emailValid = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/
    const sendEmail = (e) => {
        e.preventDefault();
        if(e.target[0].value != "" && e.target[1].value != "" && emailValid.test(e.target[1].value) && e.target[3].value != "" && e.target[4].value != ""){

            // emailjs.sendForm("service_xu7xj59", "template_lasyknu", e.currentTarget, "yRQYJNN-RsW3Wa8JW")
            //     .then((result) => {
            //         console.log(result.text);
            //     }, (error) => {
            //         console.log(error.text);
            //     });
            }
            console.log(e.target[2].id)
            
        

        
        
    };
   
    const hh = (e) => {
        if (emailValid.test(e.target.value)) {
            console.log("validation")
        } else {
            console.log("not validation")
        }
    }
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
                    {/* <form action="#" ref={form} onSubmit={sendEmail} >
                        <input type="text" name="user_name" required placeholder={lang.contactName}></input>
                        <input type="email" name="user_email" required placeholder={lang.contactEmail} onChange={hh}></input>
                        <input type="tel" name="phone" required placeholder={lang.contactMobileNumber}></input>
                        <textarea name="message" placeholder={lang.contactMessage}></textarea>
                        <button type="submit">{lang.sendMessage}</button>
                    </form> */}
                    <Form form={form} onSubmitCapture={sendEmail}>

                        <Form.Item
                            name="user_name"
                            tooltip="What do you want others to call you?"
                            rules={[{ required: true, message: lang.errorName, whitespace: true }]}
                        >
                            <Input name="user_name" placeholder={lang.contactName}/>
                        </Form.Item>
                        <Form.Item
                            name="user_email"
                            rules={[
                                {
                                    type: 'email',
                                    message: lang.errorEmailValid,
                                },
                                {
                                    required: true,
                                    message: lang.errorEmail,
                                },
                            ]}
                        >
                            <Input name="user_email" placeholder={lang.contactEmail} />
                        </Form.Item>
                        <Form.Item
                            name="user_phone"
                            rules={[{ required: true, message: lang.errorPhone }]}
                        >
                            <Input name="user_phone" addonBefore={prefixSelector} style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item name="message" rules={[{required: true, message: lang.errorMessage}]}>
                            <Input.TextArea name="message"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" onSubmit={(e)=>console.log(e.target)}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div >
        })
        // </section>
    )
}