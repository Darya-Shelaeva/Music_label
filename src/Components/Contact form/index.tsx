import React, { useState } from "react";
import './ContactForm.scss';

interface IText{
    text: string,
}

const text: IText = {
    text: '',
}

const ContactForm = () => {
    const [formValues, setFormValues] = useState('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValues(e.target.value)
    }
    return(
        <div className="form">
            <p className='form__write'>Напишите нам</p>
            <textarea onChange={onChange} className="form__text" name="text" value={formValues}/>
            <button className="form__button">Отправить</button>
        </div>
    )
}

export default ContactForm;