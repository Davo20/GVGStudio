import React, { useState, useEffect } from "react";
import Nav from "./Nav/Nav"
import Header from "./Header/Header";
import Home from "./Home"
import About from "./About/About";
import Services from "./Service/Services"
import Portfolio from "./Portfolio/Portfolio";
import Clients from "./Clients/Clients";
import Contact from "./Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import "./home.scss"

if(!localStorage.getItem("langg")){
    localStorage.setItem("langg", JSON.stringify("Armenian"))
}
export default function GVG() {
    let vv = JSON.parse(localStorage.getItem("langg"))
    const [language, setLanguagee] = useState(vv)
    const [arrowFadeUp, setArrowUp] = useState(false)

    useEffect(() => {
        Aos.init()
    }, [])

    localStorage.setItem("langg", JSON.stringify(language))
    const languageClick = (value) => {
        setLanguagee(value) // { value: "lucy", key: "lucy", label: "Lucy (101)" }
        window.location.reload(true);
    };
    const selectLanguage = {
        English: [
            {
                videoGraphic: "VIDEO GRAPHIC",
                photoGraphic: "PHOTO GRAPHIC",
                headinng: "Quality Videography Services",
                headinngTwo: "Quality Photography Services",
                expert: "13+ Years Expert",
                home: "Home",
                about: "About",
                aboutUs: "About Us",
                aboutUsData: "Strengths of the company",
                aboutText: "GVG studio started its activity in 2010. Before the studio was formed, it had had rich work experience of many years in the field of advertising, films, animation clips, videos of different events as well as in the field of photographing and editing. The quality of the work and the accurate realization of the customers’ desires are on the first place. GVG studio has many highly qualified specialists who work with different television broadcasters and other famous firms.",
                service: "Services",
                ourService: "Our Service",
                portfolio: "Portfolio",
                clients: "Clients",
                ourClients: "Our Clients",
                contact: "Contact",
                contactUs: "Contact Us",
                contactAbout: "If you have any questions, please contact our support team",
                imigayin: "Image",
                informative: "Informative",
                playful: "Playful",
                animated: "Animated-2D, 3D",
                watchMore: "Watch More",
                shotingVideos: "Shooting and making videos",
                visualizationOfStartups: "Visualization of startups",
                reparationOfWebsites: "Preparation of websites",
                corporateEvents: "Corporate events, concerts, programs, film shooting and making",
                ourLocation: "Our Location",
                ourLocationText: "Tigran Mets-42",
                ourLocationTextTwo: "Armenia, Yerevan",
                mobileNumber: "Mobile Number",
                emailAddres: "Email Addres",
                quickConnect: "Quick Connect",
                contactName: "Your Name",
                contactEmail: "Your Email",
                contactMobileNumber: "Your Mobile Number",
                contactMessage: "Message",
                errorName: "Please input your Name!",
                errorNameTwo: "Input must not contain numbers or symbols!",
                errorEmail: "Please input your E-mail!",
                errorEmailValid: "The input is not valid E-mail!",
                errorPhone: "Please input your phone number!",
                errorPhoneTwo: "The phone number was entered incorrectly!",
                errorMessage: "Please input!",
                sendMessage: "Send Message",
                footerCall: "Call for questions"
            }
        ],
        Armenian: [
            {
                videoGraphic: "ՏԵՍԱՆԿԱՐԱՀԱՆՄԱՆ ԳՐԱՖԻԿԱ",
                photoGraphic: "ԼՈՒՍԱՆԿԱՐԱՀԱՆՄԱՆ ԳՐԱՖԻԿԱ",
                headinng: "Որակյալ տեսանկարահանման ծառայություններ",
                headinngTwo: "Որակյալ լուսանկարահանման ծառայություններ",
                expert: "13+ տարվա փորձ",
                home: "Գլխավոր",
                about: "Մասին",
                aboutUs: "Մեր մասին",
                aboutUsData: "Ընկերության ուժեղ կողմերը",
                aboutText: "GVG ստուդիան իր գործունեությունը սկսել է 2010թ.-ից: Մինչ ստուդիայի ձևավորումը, այն ուներ երկար տարիների հարուստ աշխատանքային փորձ գովազդի, ֆիլմերի, անիմացիոն հոլովակների, տարբեր իրադարձությունների տեսահոլովակների, ինչպես նաև լուսանկարչության և մոնտաժի ոլորտում: Աշխատանքի որակը և հաճախորդների ցանկությունների ճշգրիտ իրականացումն առաջին տեղում են։ GVG ստուդիան ունի բազմաթիվ բարձրակարգ մասնագետներ, ովքեր աշխատում են տարբեր հեռուստատեսային հեռարձակողների և այլ հայտնի ընկերությունների հետ:",
                service: "Ծառայություններ",
                ourService: "Մեր ծառայությունները",
                portfolio: "Պորտֆոլիո",
                clients: "Թիմ",
                ourClients: "Մեր Հաճախորդները",
                contact: "Կապ",
                contactUs: "Կապ մեզ հետ",
                contactAbout: "Եթե ունեք հարցեր, դիմեք մեր աջակցության թիմին",
                imigayin: "Իմիջային",
                informative: "Ինֆորմացիոն",
                playful: "Խաղարկային",
                animated: "Անիմացիոն-2D, 3D",
                watchMore: "Դիտել ավելին",
                shotingVideos: "Տեսահոլովակների նկարահանում և նպատրաստում",
                visualizationOfStartups: "Ստարտափերի վիզուալիզացում",
                reparationOfWebsites: "Կայքերի պատրաստում",
                corporateEvents: "Կորպորատիվ միջոցառումների, համերգների, հաղորդումների, ֆիլմերի նկարահանում և պատրաստում",
                ourLocation: "Մեր հասցեն",
                ourLocationText: "Տիգրան Մեծ-42",
                ourLocationTextTwo: "Հայաստան, Երևան",
                mobileNumber: "Հեռախոսահամար",
                emailAddres: "Էլ․ Հասցե",
                quickConnect: "Արագ միացում",
                contactName: "Ձեր անունը",
                contactEmail: "Ձեր էլ․ հասցեն",
                contactMobileNumber: "Ձեր հեռախոսահամարը",
                contactMessage: "Հաղորդագրություն",
                errorName: "Խնդրում ենք մուտքագրել ձեր անունը:",
                errorNameTwo: "Մուտքագրումը չպետք է պարունակի թիվ կամ նշան",
                errorEmail: "Խնդրում ենք մուտքագրել ձեր էլ. փոստի հասցեն",
                errorEmailValid: "Մուտքագրումը վավեր Էլ. փոստի հասցե չէ",
                errorPhone: "Խնդրում ենք մուտքագրել ձեր հեռախոսահամարը:",
                errorPhoneTwo: "Հեռախոսահամարը սխալ է լրացված:",
                errorMessage: "Խնդրում ենք մուտքագրել:",
                sendMessage: "Ուղարկել",
                footerCall: "Հարցերի համար զանգահարել"
            }
        ],
        Russian: [
            {
                videoGraphic: "ВИДЕОГРАФИЯ ГРАФИКА",
                photoGraphic: "ФОТОГРАФИЯ ГРАФИКА",
                headinng: "Качественные услуги видеосъемки",
                headinngTwo: "Качественные фотоуслуги",
                expert: "13+ лет опыта",
                home: "Главный",
                about: "Онас",
                aboutUs: "О нас",
                aboutUsData: "Сильные стороны компании",
                aboutText: "GVG студия начала свою деятельность в 2010 году. Основатели студии имеют большой опыт работы  в сьемке и монтаже  рекламных роликов, документальных фильмов, анимационных клипов а также фото и видео сьемок разных мероприятий. В GVG студии собраны высококвалифицированные профессионалы, имеющие опыт работы в различных телекомуникационных компаниях. Главная цель нашей студии ,обеспечение качественного выполнения работы  в короткие сроки, учитывая просьбы клиента.",
                service: "Услуги",
                ourService: "Наши сервисы",
                portfolio: "Портфолио",
                clients: "Команда",
                ourClients: "Наши Клиенты",
                contact: "Контакт",
                contactUs: "Связаться с нами",
                contactAbout: "Если у вас есть какие-либо вопросы, пожалуйста, свяжитесь с нашей службой поддержки",
                imigayin: "Имигайин",
                informative: "Информационный",
                playful: "Игривый",
                animated: "Анимированные-2D, 3D",
                watchMore: "Посмотреть больше",
                shotingVideos: "Съемки и производство видеоклипов",
                visualizationOfStartups: "Визуализация стартапов",
                reparationOfWebsites: "Подготовка сайтов",
                corporateEvents: "Корпоративные мероприятия, концерты, программы, фильмов снимаю и делаю",
                ourLocation: "Наш адрес",
                ourLocationText: "Тигран Мец-42",
                ourLocationTextTwo: "Армения, Ереван",
                mobileNumber: "Номер мобильного телефона",
                emailAddres: "Адрес эл. почты",
                quickConnect: "Быстрое соединение",
                contactName: "Ваше имя",
                contactEmail: "Ваш адрес эл․ почты адрес",
                contactMobileNumber: "Ваш номер телефона",
                contactMessage: "Сообщение",
                errorName: "Пожалуйста, введите свое имя!",
                errorNameTwo: "Ввод не должен содержать цифр и символов!",
                errorEmail: "Пожалуйста, введите свой адрес электронной почты!",
                errorEmailValid: "Введен неверный адрес электронной почты!",
                errorPhone: "Пожалуйста, введите свой номер телефона!",
                errorPhoneTwo: "Номер телефона введен неверно!",
                errorMessage: "Пожалуйста, введите!",
                sendMessage: "Отправлять",
                footerCall: "Звоните по вопросам"
            }
        ]
    }
    function arrowUp() {
        if (window.scrollY > 400) {
            setArrowUp(true)

        }
        else {
            setArrowUp(false)

        }
    }
    window.addEventListener("scroll", arrowUp)

    const scrollUp = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <main>
            <BrowserRouter>
                <Nav languageClick={languageClick} language={language} selectLanguage={selectLanguage}></Nav>
                <Routes>
                    <Route path="/" element={<Home selectLanguage={selectLanguage} language={language}></Home>}></Route>
                    <Route path="/about" element={<About selectLanguage={selectLanguage} language={language}></About>}></Route>
                    <Route path="/services" element={<Services selectLanguage={selectLanguage} language={language}></Services>}></Route>
                    <Route path="/portfolio" element={<Portfolio selectLanguage={selectLanguage} language={language}></Portfolio>}></Route>
                    <Route path="/clients" element={<Clients selectLanguage={selectLanguage} language={language}></Clients>}></Route>
                    <Route path="/contact" element={<Contact selectLanguage={selectLanguage} language={language}></Contact>}></Route>
                </Routes>
            </BrowserRouter>
            <div className={"fadeUp " + (arrowFadeUp && "activeArrowUp")} onClick={scrollUp}>
            <MdOutlineKeyboardArrowUp />
            </div>
        </main>
    )
}