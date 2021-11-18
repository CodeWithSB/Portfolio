import React, {useState} from 'react';
import { Formik, } from 'formik';
import * as Yup from "yup";
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
    const {REACT_APP_EMAIL_JS_SEVICEID, REACT_APP_EMAIL_JS_TEMPLATEID, REACT_APP_EMAIL_JS_USERID} = process.env;
    const [messageSent, setMessageSent] = useState(false)
    const ContactSchema = Yup.object().shape({
        name: Yup.string()
                    .min(2, 'Name is too short')
                    .max(30, 'Name is too long')
                    .required('Name is required'),
        email: Yup.string()
                    .email('Provided Email is Invalid')
                    .required('Email is required'),
        subject: Yup.string()
                    .required('Subject is required'), 
        message: Yup.string()
                    .required('Message is required'), 
      });

    return (
        <>
            {messageSent && <h4 className="text-lg text-green-500"> Your message has been sent successfully... </h4>}
            {messageSent===false &&
            <Formik 
                initialValues={{name:'', email:'', subject:'', message:''}}
                validationSchema = { ContactSchema }
                onSubmit={(values) => {
                    setTimeout(() => {
                        // You can use any kind of email service here to send yourself an email...
                        emailjs.send(REACT_APP_EMAIL_JS_SEVICEID, REACT_APP_EMAIL_JS_TEMPLATEID, values, REACT_APP_EMAIL_JS_USERID)
                        .then((result) => {
                            setMessageSent(true);
                        }, (error) => {
                            alert(error.text);
                            console.log(error.text);
                        });
                    }, 500);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleSubmit,
                    handleBlur,
                    handleChange
                }) => (
                    <form className="w-full md:w-3/4 m-auto px-2 font-semibold text-left" onSubmit={handleSubmit}>

                        <input 
                            type="text" 
                            className={`border boder-gray-400 font-semibold rounded-md bg-transparent dark:text-gray-50 w-full h-12 pl-2 mt-4 outline-none ${(errors.name && touched.name)? "text-red-500": "text-gray-500"} ${(errors.name)? "animate-wiggle": "animate-none"}`}
                            placeholder="Your Name*" 
                            name="name" 
                            id="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={values.name}
                        />
                        {
                           errors.name && touched.name &&  
                           <p className="text-xs text-red-500 w-full px-2">
                              {errors.name} 
                            </p>
                        }
                        

                        <input 
                            type="text" 
                            className={`border boder-gray-400 font-semibold rounded-md bg-transparent dark:text-gray-50 w-full h-12 pl-2 mt-4 outline-none ${(errors.email && touched.email)? "text-red-500": "text-gray-500"} ${(errors.email)? "animate-wiggle": "animate-none"}`}
                            placeholder="Your Email*" 
                            name="email" 
                            id="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={values.email}
                        />
                        {
                            errors.email && touched.email && 
                            <p className="text-xs text-red-500 w-full px-2">
                                { errors.email }
                            </p>
                        }

                        <input 
                            type="text" 
                            className={`border boder-gray-400 font-semibold rounded-md bg-transparent dark:text-gray-50 w-full h-12 pl-2 mt-4 outline-none ${(errors.subject && touched.subject)? "text-red-500": "text-gray-500"} ${(errors.subject)? "animate-wiggle": "animate-none"}`}
                            placeholder="Subject*" 
                            name="subject" 
                            id="subject"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={values.subject}
                        />
                        {
                            errors.subject && touched.subject &&
                            <p className="text-xs text-red-500 w-full px-2">
                                { errors.subject }
                            </p>
                        }

                        <textarea
                            rows="4" 
                            className={`border boder-gray-400 font-semibold rounded-md bg-transparent dark:text-gray-50 w-full pl-2 mt-4 outline-none ${(errors.message && touched.message)? "text-red-500": "text-gray-500"} ${(errors.message)? "animate-wiggle": "animate-none"}`}
                            placeholder="Your Message*" 
                            name="message" 
                            id="message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={values.message}>
                        </textarea>
                        {
                            errors.message && touched.message &&
                            <p className="text-xs text-red-500 w-full px-2">
                                { errors.message }
                            </p>    
                        }

                        <div className="flex justify-end items-end">
                            <button type="submit" className="flex justify-center items-center mt-4 bg-green-500 text-white px-6 py-1.5 rounded-full hover:bg-green-400">
                                <FontAwesomeIcon icon={faPaperPlane} className="mr-2"/> Send
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
            }       
        </>
    )
}
