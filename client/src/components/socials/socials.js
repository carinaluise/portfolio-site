import React from 'react';
import './socials.scss';

const Social = ({link, classN}) =>{

    return(<a className="social" href={link}><i className={`fab ${classN}`}></i></a>)
}

export default Social;