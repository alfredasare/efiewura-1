import React from "react";
import './contact.styles.scss';
import './animate.css';

const ContactPage = () => {

    return (
        <>
            <div className='main-body'>
                <div className='contact-container'>
                    <h1 className='main-header'>Reach EFIEWURA</h1>
                    <div className='line animated slideInLeft'/>
                    <div>
                        <a href="mailto:efiewura18@gmail.com" target="_blank"><i className='fa fa-envelope font-style animated bounceIn'/></a>
                        <a href="#"><i className='fa fa-phone font-style animated bounceIn delay-1s'/></a>
                        <a href="#"><i className='fa fa-facebook font-style fb animated bounceIn delay-2s'/></a>
                        <a href="#"><i className='fa fa-instagram font-style instagram animated bounceIn delay-3s'/></a>
                        <a href="#"><i className='fa fa-twitter font-style twitter animated bounceIn delay-4s'/></a>
                    </div>
                    <div className='line second-line animated slideInRight'/>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
