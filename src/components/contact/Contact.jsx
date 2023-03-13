import { useState } from 'react';
import Button from '../button/Button';
import './Contact.css';
import './Contact.Responsive.css'

function Contact({ lang }) {
    const language = lang;
    const API_URL = 'https://portfolio-server-production-ae5c.up.railway.app/api'
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState({
        name: '',
        from: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: null,
        from: null,
        message: null,
        status: false
    });

    const content = [
        {
            esp: {
                title: '¿Quieres contactarte conmigo?',
                labels: ['Nombre', 'Email', 'Mensaje', 'Enviar'],
                placeholders: ['Escribe tu nombre', 'Escribe tu email', 'Escribe tu mensaje'],
                errors: ['Este campo no puede estar vacio.', 'Solo caracteres alfanumericos.', 'El email debe ser valido.', 'Debe contener almenos 3 caracteres.', 'Debe contener entre 15 y 255 caracteres.']
            },
            eng: {
                title: 'Want to get in touch?',
                labels: ['Name', 'Email', 'Message', 'Submit'],
                placeholders: ['Enter your name', 'Enter your email', 'Enter your message'],
                errors: ['This field can not be blank.', 'Only alphanumeric characters.', 'Email must be valid.', 'Must contain at least 3 digits.']
            }
        }
    ]

    const contentOn = language == 'es-ES' ? content[0].esp : content[0].eng

    const handleChange = (e) => {
        setEmail({ ...email, [e.target.name]: e.target.value })
    }

    const sanitizeName = (value) => {
        const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        if (value.length == 0 || value == null) {
            setErrors({ ...errors, name: contentOn.errors[0], status: true });
        } else if (!regexName.test(value)) {
            setErrors({ ...errors, name: contentOn.errors[1], status: true });
        } else if (value.length < 3) {
            setErrors({ ...errors, name: contentOn.errors[3], status: true });
        }
    }

    const sanitizeFrom = (value) => {
        const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        if (value.length == 0 || value == null) {
            setErrors({ ...errors, from: contentOn.errors[0], status: true });
        } else if (!regexEmail.test(value)) {
            setErrors({ ...errors, from: contentOn.errors[2], status: true })
        }
    }

    const sanitizeMessage = (value) => {
        const regexMessage = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü¡!¿?.:\s]+$/;
        if (value.length == 0 || value == null) {
            setErrors({ ...errors, message: contentOn.errors[0], status: true });
        } else if (!regexMessage.test(value)) {
            setErrors({ ...errors, message: contentOn.errors[1], status: true })
        } else if (value.length < 15 || value.length > 255) {
            setErrors({ ...errors, message: contentOn.errors[4], status: true });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        sanitizeName(email.name);
        sanitizeFrom(email.from);
        sanitizeMessage(email.message);
        console.log(errors);
        if (errors.status) {
            console.log('Wait.');
        } else {
            setLoading(true);
            await fetch(`${API_URL}/email/new`, {
                method: 'POST',
                body: JSON.stringify(email),
                headers: { 'Content-Type': 'application/json' }
            });
            setLoading(false);
        }
    }

    return (
        <div id='contactme' className='grid-contact-container'>
            <div className='contact-content left'>
                <h4>{contentOn.title}</h4>
            </div>
            <div className='contact-content right'>
                <form id='contact-form' className='grid-contact-form'>
                    <div className='contact-input name'>
                        <label>{contentOn.labels[0]}</label>
                        <input
                            name='name'
                            type='text'
                            placeholder={contentOn.placeholders[0]}
                            onChange={handleChange}
                        />
                        {
                            errors.name != null ? <span className='input-error'>{errors.name}</span> : null
                        }
                    </div>
                    <div className='contact-input email'>
                        <label>{contentOn.labels[1]}</label>
                        <input
                            name='from'
                            type='text'
                            placeholder={contentOn.placeholders[1]}
                            onChange={handleChange}
                        />
                        {
                            errors.from != null ? <span className='input-error'>{errors.from}</span> : null
                        }
                    </div>
                    <div className='contact-input message'>
                        <label>{contentOn.labels[2]}</label>
                        <textarea
                            name='message'
                            type='text'
                            placeholder={contentOn.placeholders[2]}
                            onChange={handleChange}
                        />
                        {
                            errors.message != null ? <span className='input-error'>{errors.message}</span> : null
                        }
                    </div>
                </form>
                <Button
                    type={loading ? 'dark disabled' : 'dark'}
                    size='normal'
                    onClick={loading ? null : handleSubmit}
                >{contentOn.labels[3]}</Button>
            </div>
        </div>
    );
}

export default Contact;