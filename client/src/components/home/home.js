import React from 'react';
import './home.scss';
import ReverseTitle from '../reverse-title/reverse-title';




const Home = () => {

const dataText = ["I am a web-developer...", "I am based in berlin","I love to code"]
const dataText2 = ["I am Carina ","I am a web-developer ", "I am based in berlin ","I love to code "]

return(
    <div id="home">
        <div className='typewriter title-large-screen'>
            <ReverseTitle heading="My name is Carina and " dataText={dataText}></ReverseTitle>
        </div>
        <div className='typewriter title-small-screen' hidden>
            <ReverseTitle dataText={dataText2}></ReverseTitle>
        </div>
        <div className="square"></div>
        <div className="triangle"></div>
        <div className="circle"></div>
    </div>
);
}

export default Home;