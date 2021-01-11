import React from 'react';
import './tech2.scss';
import ReverseTitle from '../reverse-title/reverse-title';

const Tech2 = () => {

    return(<div id="tech2">
        <div className="typewriter title-large-screen">
            <ReverseTitle dataText={["Some of my top interpersonal skills are ..."]}></ReverseTitle>
        </div>
        <div className="typewriter title-small-screen" hidden>
        <ReverseTitle dataText={["Some of my other skills are..."]}></ReverseTitle>
        </div>



        <div className="shapes-container">
        
        <div className="shape" id="square"><img src="../../../happy.png"></img><h3>Communication</h3></div>
        <div className="shape" id="square"><img src="../../../pencil.png"></img><h3>Fast Learner</h3></div>
        <div className="shape" id="square"><img src="../../../reliability.png"></img><h3>Reliable</h3></div>
        <div className="shape" id="square"><img src="../../../adaptation.png"></img><h3>Adaptable</h3></div>
        </div>
    </div>)

}


export default Tech2;