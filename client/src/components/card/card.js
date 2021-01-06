import React from 'react';
import './card.scss';

const Card = (props) => {
    const {link, src, alt, title, information} = props;

return(
    <div className="card-container">
    <a href={link}>
        <div className="card-image-container">
            <img src={src} alt={alt}></img>
        </div>
        <div className="card-content-container">
            <h1 className="card-title">{title}</h1>
            <p className="card-information">{information}</p>
        </div>
    </a>
    </div>
)
}

export default Card;