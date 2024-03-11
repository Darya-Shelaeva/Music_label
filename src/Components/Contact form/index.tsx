import React from "react";
import './ContactForm.scss';

const ContactForm = () => {
    return(
        <div className="form">
            <p className='form__write'>Напишите нам</p>
            <textarea className="form__text"></textarea>
            <button className="form__button">Отправить</button>
        </div>
    )
}

export default ContactForm;