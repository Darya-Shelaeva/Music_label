import React from "react";
import './ContactForm.scss';

const ContactForm = () => {
    return(
        <div className="form">
            <p className='form_write'>Напишите нам</p>
            <textarea className="form_text"></textarea>
            <button className="form_button">Отправить</button>
        </div>
    )
}

export default ContactForm;