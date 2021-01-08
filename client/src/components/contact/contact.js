import React from 'react';
import './contact.scss';

import Form from '../form/form';
import Social from '../socials/socials';



const Contact = () => {
    return(<div id="contact">
    
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
        link=""
        classN="fa-twitter"
        ></Social>
    </div>
    
    </div>
    );
}

export default Contact;