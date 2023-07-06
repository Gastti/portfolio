import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Button from "../button/Button";
import "./Contact.css";
import "./Contact.Responsive.css";
import FormButton from "../formbutton/FormButton";

function Contact({ lang }) {
  const form = useRef();
  const language = lang;
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    user_name: null,
    user_email: null,
    message: null,
  });

  const content = [
    {
      esp: {
        title: "Te gustó mi trabajo? Hablemos!",
        labels: ["Nombre", "Email", "Mensaje", "Enviar"],
        placeholders: [
          "Escribe tu nombre",
          "Escribe tu email",
          "Escribe tu mensaje",
        ],
        errors: [
          "Este campo no puede estar vacio.",
          "Solo caracteres alfanumericos.",
          "El email debe ser valido.",
          "Debe contener almenos 3 caracteres.",
          "Debe contener entre 15 y 255 caracteres.",
        ],
        my_contact_message_title: "Email Enviado",
        my_contact_message:
          "¡Hola! Muchas gracias por contactarte, responderé tu mensaje a la brevedad.",
      },
      eng: {
        title: "Did you like my work? Let's talk!",
        labels: ["Name", "Email", "Message", "Submit"],
        placeholders: [
          "Enter your name",
          "Enter your email",
          "Enter your message",
        ],
        errors: [
          "This field can not be blank.",
          "Only alphanumeric characters.",
          "Email must be valid.",
          "Must contain at least 3 digits.",
        ],
        my_contact_message_title: "Email sent",
        my_contact_message:
          "Hello, thank you very much for contacting me, I will answer your message as soon as possible",
      },
    },
  ];

  const contentOn = language == "es-ES" ? content[0].esp : content[0].eng;

  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  const sanitizeName = (value) => {
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    if (value.trim().length == 0 || !value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        user_name: contentOn.errors[0],
      }));
      return false;
    } else if (!regexName.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        user_name: contentOn.errors[1],
      }));
      return false;
    } else if (value.length < 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        user_name: contentOn.errors[3],
      }));
      return false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        user_name: null,
      }));
      return true;
    }
  };

  const sanitizeFrom = (value) => {
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    if (value.length == 0 || value == null) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        user_email: contentOn.errors[0],
      }));
      return false;
    } else if (!regexEmail.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        user_email: contentOn.errors[2],
      }));
      return false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        user_email: null,
      }));
      return true;
    }
  };

  const sanitizeMessage = (value) => {
    const regexMessage = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü¡!¿?.:\s]+$/;
    if (value.length == 0 || value == null) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: contentOn.errors[0],
      }));
      return false;
    } else if (!regexMessage.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: contentOn.errors[1],
      }));
      return false;
    } else if (value.length < 15 || value.length > 255) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: contentOn.errors[4],
      }));
      return false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: null,
      }));
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isUsernameValid = sanitizeName(email.user_name);
    const isEmailValid = sanitizeFrom(email.user_email);
    const isMessageValid = sanitizeMessage(email.message);

    if (isUsernameValid && isEmailValid && isMessageValid) {
      setLoading(true);
      emailjs
        .sendForm(
          "service_jrwokih",
          "template_m1z0v8s",
          form.current,
          "NLpCh2t4VA9dhiQP5"
        )
        .then(
          (result) => {
            setLoading(false);
            setEmailSent(true);
          },
          (error) => {
            setLoading(false);
          }
        );
    }
  };

  return (
    <div id="contactme" className="grid-contact-container">
      <div className="contact-content left">
        <h4>{contentOn.title}</h4>
      </div>
      <div className="contact-content right">
        {!emailSent && (
          <>
            <form ref={form} id="contact-form" className="grid-contact-form">
              <div className="contact-input name">
                <label>{contentOn.labels[0]}</label>
                <input
                  name="user_name"
                  type="text"
                  placeholder={contentOn.placeholders[0]}
                  onChange={handleChange}
                />
                {errors.user_name != null ? (
                  <span className="input-error">{errors.user_name}</span>
                ) : null}
              </div>
              <div className="contact-input email">
                <label>{contentOn.labels[1]}</label>
                <input
                  name="user_email"
                  type="text"
                  placeholder={contentOn.placeholders[1]}
                  onChange={handleChange}
                />
                {errors.user_email != null ? (
                  <span className="input-error">{errors.user_email}</span>
                ) : null}
              </div>
              <div className="contact-input message">
                <label>{contentOn.labels[2]}</label>
                <textarea
                  name="message"
                  type="text"
                  placeholder={contentOn.placeholders[2]}
                  onChange={handleChange}
                />
                {errors.message != null ? (
                  <span className="input-error">{errors.message}</span>
                ) : null}
              </div>
            </form>

            <FormButton
              onClick={handleSubmit}
              loading={loading}
              emailSent={emailSent}
            >
              {contentOn.labels[3]}
            </FormButton>
          </>
        )}
        {emailSent && (
          <p className="my-contact-message">
            <b>{contentOn.my_contact_message_title}</b><br></br>
            {contentOn.my_contact_message}
            </p>
        )}
      </div>
    </div>
  );
}

export default Contact;
