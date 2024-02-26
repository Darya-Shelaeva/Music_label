import React from "react";
import './Footer.scss';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="container">
            <div className="container_contacts">
                <Link className="container_contacts_con" to={"/contacts"}><p className="text">Контакты</p></Link>
            
            <p>E-mail</p>
            </div>
            <div className="container_data">
            <p>+7-495-204-24-50</p>
            <p>info@musiclabel.ru</p>
            </div>
            <div className="container_socials">
                <p><img src="" alt="vk" /></p>
                <p><img src="" alt="facebook" /></p>
            
            </div>
        </div>
    )
}

export default Footer;