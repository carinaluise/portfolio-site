import React from 'react';
import './space.scss';
import ReverseTitle from '../reverse-title/reverse-title';

const Space = ({first, second}) => {
if(first){
    return(<div id="space">
            <div id="hyper-terminal"> My coding journey started a few years ago when I was offered a position within a tutoring company, where I ended up running coding clubs in and around the brighton primary school circle. I would have to supervise the children and troubleshoot coding errors with them. In the clubs we primarly used P5JS and Scratch. I then went on to teach myself how to use HTML , CSS and Javascript aswell as frameworks such as JQuery, React, Sass, GsapTimeline and more. Once I felt I had a good understanding of front end languages I moved on to experimenting with backend functionality, databases and security measures, as well as learning how to make API calls. I love technology and I am always up for learning more!</div>
           </div>)
    }
if(second){
    return(<div id="space">
                <div className="flex-container">
                <div className="shape-container">
                    <div className="shape" id="square"></div>
                </div>
                <div className="shape-container">
                    <div className="shape" id="square"></div>
                </div>
                <div className="shape-container">
                    <div className="shape" id="square"></div>
                </div>

                </div>
           </div>)
}

return(<div id="space">
            <div className="typewriter title-large-screen">
                <ReverseTitle dataText={["Some of my top interpersonal skills are ..."]}></ReverseTitle>
            </div>
            <div className="typewriter title-small-screen" hidden>
            <ReverseTitle dataText={["Some of my other skills are..."]}></ReverseTitle>
            </div>



            <div className="flex-container">
                <div className="shape-container">
                    <div className="shape" id="square"><img src="../../../happy.png"></img><h3>Communication</h3></div>
                </div>
                <div className="shape-container">
                    <div className="shape" id="square"><img src="../../../pencil.png"></img><h3>Fast Learner</h3></div>
                </div>
                <div className="shape-container">
                    <div className="shape" id="square"><img src="../../../reliability.png"></img><h3>Reliable</h3></div>
                </div>
                <div className="shape-container">
                    <div className="shape" id="square"><img src="../../../adaptation.png"></img><h3>Adaptable</h3></div>
                </div>
                    </div>
            </div>)
}

export default Space;