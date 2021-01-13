import React from 'react';
import './card.scss';

const Card = (props) => {
    const {light, link, src, alt, title, information} = props;

return(
    <div className={light ? "light-container" : "card-container"}>
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