import React from 'react';
import './contact.scss';

import Form from '../form/form';
import Social from '../socials/socials';



const Contact = () => {
    return(<div id="contact">
        <div className="section-title contact-title"><h1>Get in touch!</h1></div>

    <Form></Form>
    <div className="socials">
        <Social 
        link="https://www.linkedin.com/in/carina-robinson-586923127/"
        classN="fa-linkedin-in"
        ></Social>
        <Social 
        link="https://www.facebook.com/carina.robinson.503/"
        classN="fa-facebook-f"
        ></Social>
        <Social 
        link="https://github.com/carinaluise"
        classN="fa-github"
        ></Social>
    </div>
    
    </div>
    );
}

export default Contact;