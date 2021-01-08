import React from 'react';
import './tech2.scss';

const Tech2 = () => {

    return(<div id="tech2">
        <div className="typewriter2 title-large-screen">
            <h1>Some of my top interpersonal skills are ...</h1>
        </div>
        <div className="typewriter2 title-small-screen" hidden>
            <h1>Other skills I have...</h1>
        </div>



        <div className="shapes-container">
        
        <div className="shape" id="square1"><img src="../../../happy.png"></img><h3>Good Communicator</h3></div>
        <div className="shape" id="square"><img src="../../../pencil.png"></img><h3>Fast Learner</h3></div>
        <div className="shape" id="square"><img src="../../../reliability.png"></img><h3>Reliable</h3></div>
        <div className="shape" id="square"><img src="../../../adaptation.png"></img><h3>Adaptable</h3></div>
        </div>
    </div>)

}


export default Tech2;