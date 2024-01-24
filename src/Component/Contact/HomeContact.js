import React, { useRef, useState, useLayoutEffect, useContext } from "react";
import emailjs from '@emailjs/browser';
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import { StyleProvider } from '@ant-design/cssinjs';
import { ExclamationCircleFilled } from '@ant-design/icons';
import 'antd-country-phone-input/dist/index.css';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import phoneNumberCode from "./phoneNumberCode.json"
// import { PhoneInput, PhoneInputFormItem} from '@validate-phone/antd-input'
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
        console.log("jj")
    };
    const validateMobileNumber = (rule, value, callback) => {
        // const{ form } = this.props;
        // let mnumber = form.getFieldValue('phone');
        // console.log("this is a mobil validator",mnumber);
        if (value == 10) {
            console.log("invalid mobile nuumber");
        }

    }
    console.log(form)
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>

             <Select name="user_prefix" style={{ width: 80 }}  >
        {phoneNumberCode.map((elem)=>{
                return <Option value={elem.dial_code}>{elem.dial_code}</Option>
                {/* <Option value="7">+7</Option> */}
            })}
            </Select>
        </Form.Item>
    );
    const emailValid = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/
    const nameValid = /^[A-Za-z]+$/
    // const phoneValid = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/
    const phoneValid =/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/
    const sendEmail = (e) => {
        e.preventDefault();
        if (e.target[0].value != "" && nameValid.test(e.target.value) && e.target[1].value != "" && emailValid.test(e.target[1].value) && e.target[2].value != "" && phoneValid.test(e.target[2].value) && e.target[3].value != "") {

            // emailjs.sendForm("service_xu7xj59", "template_lasyknu", e.currentTarget, "yRQYJNN-RsW3Wa8JW")
            //     .then((result) => {
            //         console.log(result.text);
            //     }, (error) => {
            //         console.log(error.text);
            //     });
            success()
        }
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        console.log(e.target[2].value)
        console.log(e.target[3].value)





    };


const reg = /^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/

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
                            rules={[{ required: true, message: lang.errorName, whitespace: true },
                            {pattern: /^[A-Za-z]+$/, match: true, message: lang.errorNameTwo}]}
                        >
                            <Input name="user_name" placeholder={lang.contactName} />
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
                            validateTrigger={handleValidateFieldNames('contactNumber')}
                            rules={[{ required: true, message: lang.errorPhone },
                                { pattern: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/,   message: lang.errorPhoneTwo, }
                           ]}

                        >
                            
                            <Input name="user_phone" style={{ width: '100%' }} placeholder={lang.contactMobileNumber} />
                        </Form.Item>
                        <Form.Item name="message" rules={[{ required: true, message: lang.errorMessage }]}>
                            <Input.TextArea name="message" placeholder={lang.contactMessage} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" onSubmit={(e) => console.log(e.target)} >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    {/* {contextHolder} */}
                </div>
                {contextHolder}

            </div >

        })
        // </section>

    )
}
// { pattern: /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/, message: 'Name can only include letters and numbers.', }
// /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/