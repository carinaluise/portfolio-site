import React from 'react';
import './nav-link.scss'


const NavLink = (props) => {

return ( <a className={`nav-link ${props.class}`} href={props.link}>{props.linkName}</a>)
     
}

export default NavLink;