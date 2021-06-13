import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';


const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Get in touch.'
                details='Feel free to drop me an email.'
            />

           
            {/* Form section */}
            {/* <div className='contact-form-container'>
                <form className='contact-form'>
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='email'
                        className='input-box email-input'
                        autoComplete='off'
                    />
                   
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div> */}

            {/* Social icons */}
            <div className='social-icons-container'>
            <a href='mailto:iamakhileshparmar@gmail.com' className='social-icon'>
                    <img src='assets/mail.png' alt='social' />
                </a>
                <a href='https://github.com/akhiparmar' className='social-icon'>
                    <img src='assets/github.png' alt='social' />
                </a>
                <a
                    href='https://in.linkedin.com/in/akhileshparmar'
                    className='social-icon'
                >
                    <img src='assets/linkedin.png' alt='social' />
                </a>
                <a
                    href='https://instagram.com/akhileshparmar22'
                    className='social-icon'
                >
                    <img src='assets/insta.png' alt='social' />
                </a>
            </div>

            <FooterLink
                phrase='Read more '
                toAdress='/about'
                link='about me.'
            />

            <div className='vector-frame'>
                <img
                    src={contactVector}
                    alt='vector'
                    className='about-vector'
                />
            </div>
        </div>
    );
};

export default Contact;
