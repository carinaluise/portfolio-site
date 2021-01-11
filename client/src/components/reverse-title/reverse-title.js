import React from 'react';
import './reverse-title.scss';

class ReverseTitle extends React.Component{

constructor(props){
    super(props);
    this.state = {
        isDeleting : false,
        text : '',
        loopNum: 0,
        typingSpeed: 150
    };
    this.handleType = this.handleType.bind(this);

}

handleType(){
    const { dataText } = this.props;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
        text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
        typingSpeed: isDeleting ? 30 : 150
    });

    if (!isDeleting && text === fullText) {     
        setTimeout(() => this.setState({ isDeleting: true }), 500);   
    } else if (isDeleting && text === '') {
        this.setState({
            isDeleting: false,
            loopNum: loopNum + 1
        });      
    }

    setTimeout(this.handleType, typingSpeed);
    
};

componentDidMount(){
    this.handleType();
}


    render(){

        return(<div> 
            <div className="type-container">
            <h1>{this.props.heading}<span className="txt-type">{this.state.text}</span><span id="cursor"></span></h1>
            </div>
        </div>)
    }

}

export default ReverseTitle;

