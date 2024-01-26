import React, { useRef, useState, useLayoutEffect, useContext, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import { StyleProvider } from '@ant-design/cssinjs';
import { ExclamationCircleFilled } from '@ant-design/icons';
import phoneNumberCode from "./phoneNumberCode.json"
import { Input, InputNumber, AutoComplete, Button, Form, Select, message, ConfigProvider, Space, App, notification } from 'antd';
import Aos from "aos";
import "aos/dist/aos.css";
import "./contact.scss";

const { Option } = Select;
const succesMessage = {
    English: { text: "Message send successfully!" },
    Armenian: { text: "Հաղորդագրությունը հաջողությամբ ուղարկվեց:" },
    Russian: { text: "Сообщение успешно отправлено!" }
}

export default function HomeContact({ selectLanguage, language }) {
    const [form] = Form.useForm();
    const [validateFieldsName, setValidateFieldsName] = useState([]);
    const [messageApi, contextHolder] = message.useMessage();
    const { locale, theme } = useContext(ConfigProvider.ConfigContext);

    const handleValidateFieldNames = (name) => {
        const isFieldName = validateFieldsName.find(
            (fieldName) => fieldName === name
        );
        if (isFieldName) return 'onChange';
        return 'onBlur';
    };
    useLayoutEffect(() => {
        ConfigProvider.config({
            holderRender: (children) => (
                <StyleProvider hashPriority="high">
                    <ConfigProvider prefixCls="static" iconPrefixCls="icon" locale={locale} theme={theme}>
                        <App message={{ maxCount: 1 }} notification={{ maxCount: 1 }}>
                            {children}
                        </App>
                    </ConfigProvider>
                </StyleProvider>
            ),
        });
    }, [locale, theme]);

    const success = () => {
        message.success(succesMessage[language].text)
    };

    

    const emailValid = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/
    const nameValid = /^[A-Za-z]+$/
    const phoneValid = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/
    const sendEmail = (e) => {
        e.preventDefault();
        if (e.target[0].value != "" && nameValid.test(e.target[0].value) && e.target[1].value != "" && emailValid.test(e.target[1].value) && e.target[2].value != "" && phoneValid.test(e.target[2].value) && e.target[3].value != "") {

            // emailjs.sendForm("service_xu7xj59", "template_lasyknu", e.currentTarget, "yRQYJNN-RsW3Wa8JW")
            //     .then((result) => {
            //         console.log(result.text);
            //     }, (error) => {
            //         console.log(error.text);
            //     });
            success()
        }
    };


    const reg = /^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/

    return (
        selectLanguage[language].map((lang, index) => {
            return <div className="contactCont" key={index}>
                <div className="addres" data-aos="fade-up">
                <div className="addresCont">
                        <div>
                            <MdOutlineLocationOn></MdOutlineLocationOn>
                        </div>
                        <ul>
                            <li className="titleContact">
                                <h2>{lang.ourLocation}</h2>
                            </li>
                            <li>{lang.ourLocationText}</li>
                            <li>{lang.ourLocationTextTwo}</li>
                        </ul>
                    </div>
                    <div className="addresCont">
                        <div>
                            <BsTelephone></BsTelephone>
                        </div>
                        <ul>
                            <li className="titleContact">
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
                            <li className="titleContact">
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
                                    <Link to="https://www.facebook.com/gvg.studio" target="_blank">
                                        <FaFacebook ></FaFacebook >
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to="https://www.instagram.com/gvg__studio/" target="_blank">
                                        <FaInstagram ></FaInstagram >
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to="" target="_blank">
                                        <FaWhatsapp ></FaWhatsapp >
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to="https://www.youtube.com/@gvgstudio5857/featured" target="_blank">
                                        <FaYoutube ></FaYoutube >
                                    </Link>
                                </div>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="message" data-aos="fade-down">
                    <Form form={form} onSubmitCapture={sendEmail}>
                        <Form.Item
                            name="user_name"
                            tooltip="What do you want others to call you?"
                            rules={[{ required: true, message: lang.errorName, whitespace: true },
                            { pattern: /^[A-Za-z]+$/, match: true, message: lang.errorNameTwo }]}
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

                            rules={[{ required: true, message: lang.errorPhone },
                            { pattern: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/, message: lang.errorPhoneTwo }
                            ]}

                        >

                            <Input  name="user_phone" style={{ width: '100%' }} placeholder={lang.contactMobileNumber} />
                        </Form.Item>
                        <Form.Item name="message" rules={[{ required: true, message: lang.errorMessage }]}>
                            <Input.TextArea name="message" placeholder={lang.contactMessage} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" onSubmit={(e) => console.log(e.target)} >
                                {lang.sendMessage}
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                {contextHolder}

            </div >

        })
    )
}