'use client'

import styles from "@/app/contact/contact.module.css"
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';


const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_r3zl2rw', 'template_m6b1idh', form.current, {
          publicKey: '5neJEJiCAY_jzJjLM',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  


    
    return (
        <form className={styles.contact_form} 
        ref={form}  
        onSubmit={sendEmail}
        >
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Enter your name
                    <input type="text" name="username" id="username"
                        placeholder="Enter your name"
                           value="user.username"
                        //    onChange={handleChange}
                           required
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Email
                    <input type="text" name="email" id="email"
                           placeholder="Enter your email"
                           
                           value="user.email"
                        //    onChange={handleChange}
                           required
                           autoComplete="off"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Phone Number
                    <input type="number" name="phone" id="phone"
                           placeholder="Enter your phone"
                           
                           value="user.phone"
                        //    onChange={handleChange}
                           required
                            autoComplete="off"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                    <textarea  name="message" id="message" rows={5}
                           placeholder="Enter your Message"
                           
                               value="user.message"
                            //    onChange={handleChange}
                               required
                                autoComplete="off"
                    />
                </label>
            </div>

            <div>
                <button type="submit" >Send Message</button>
            </div>
        </form>
    );
};

export default ContactForm;