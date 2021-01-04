import React from 'react';
import './tech.scss';



const Tech = () => {
    return(<div id="tech">
    <div className="section-title"><h1>Technologies</h1></div>
    <div className="shapes-container">
        <div className="shape" id="circle"><img src="../../../html.png"></img><h3>Html</h3></div>
        <div className="shape" id="circle"><img src="../../../css-3.png"></img><h3>Css</h3></div>
        <div className="shape" id="circle"><img src="../../../atom.png"></img><h3>React</h3></div>
        <div className="shape" id="circle"><img src="../../../js-format.png"></img><h3>Js</h3></div>

        <div className="shape" id="circle"><img src="../../../git.png"></img><h3>Git</h3></div>
        <div className="shape" id="circle"><img src="../../../nodejs.png"></img><h3>NodeJs</h3></div>
        <div className="shape" id="circle"><img src="../../../sass.png"></img><h3>Sass</h3></div>
        <div className="shape" id="circle"><img src="../../../github.png"></img><h3>Github</h3></div>

        <div className="shape" id="circle"><img src="../../../mongoose.png"></img><h3>Mongoose</h3></div>
        <div className="shape" id="circle"><img src="../../../api.png"></img><h3>Api</h3></div>
        <div className="shape" id="circle"><img src="../../../terminal.png"></img><h3>Hyper</h3></div>
        <div className="shape" id="circle"><img src="../../../mongodb.png"></img><h3>MongoDb</h3></div>

    </div>
    </div>
    );
}

export default Tech;