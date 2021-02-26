import React from 'react';
import './space.scss';
import ReverseTitle from '../reverse-title/reverse-title';

const Space = ({first, second}) => {
if(first){
    return(<div id="space">
{/* <h3 className="space-title">My coding journey starts here </h3>

    <div className="flex-container">
    <div className="shape-container">
        <div className="shape" id="square"><p>I spent my childhood fasinated by computers. IT was one of my favourite subjects in school and I chose to build a website for my personal project. I also loved video games!</p></div>
    </div>
    <div className="shape-container">
        <div className="shape" id="square"><p>I attended a CODE FOR GIRLS workshop at the shazam headquarters in London.</p></div>
    </div>
    <div className="shape-container">
        <div className="shape" id="square"><p>I landed a job as a coding instructor/ tutor where I ran afterschool coding clubs helping troubleshoot problems and teach P5JS as well as scratch.</p></div>
    </div>
    <div className="shape-container">
        <div className="shape" id="square"><p>Now I am freelancing whilst continuing to build my portfolio and knowledge of development.</p></div>
    </div>

    </div> */}
</div>
    )
    }
if(second){
    return(<div id="space">
                {/* <h3 className="space-title"> Some of my qualifications </h3>
                <div className="flex-container">
                <div className="shape-container">
                    <div className="shape" id="square"><h3 className="cert">BA in sound engineering</h3></div>
                </div>
                <div className="shape-container">
                    <div className="shape" id="square"><h3 className="cert">Complete 2020 Web-development Bootcamp</h3></div>
                </div>
                <div className="shape-container">
                    <div className="shape" id="square"><h3 className="cert">Complete React Developer in 2021</h3></div>
                </div>
                <div className="shape-container">
                    <div className="shape" id="square"><h3 className="cert">Computer design course(max msp)</h3></div>
                </div>
                </div> */}
                {/* <h3 className="space-title-large" hidden >My coding journey start here </h3>
                <img className="space-arrow" hidden src="../../../right-drawn-arrow.png"></img> */}
           </div>)
}

return(<div id="space">
            {/* <div className="typewriter title-large-screen">
                <ReverseTitle dataText={["Some of my top interpersonal skills are ..."]}></ReverseTitle>
            </div>
            <div className="typewriter title-small-screen" hidden>
            <ReverseTitle dataText={["Some of my other skills are..."]}></ReverseTitle>
            </div> */}

            {/* <h3 className="space-title title-large-screen"> Some of my top interpersonal skills </h3>
            <h3 className="space-title title-small-screen" hidden> Some of my other skills </h3>


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
                </div> */}
                    {/* </div> */}
            </div>)
}

export default Space;