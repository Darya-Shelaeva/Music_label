import React from "react";
import './Footer.scss';
import '../../index';

const Footer = () => {
    return (
        <div className="container">
            <div className="container_contacts">
            <p className="text">Контакты</p>
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