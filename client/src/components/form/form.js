import React from 'react';
import './form.scss';
import axios from 'axios'

class Form extends React.Component{

    constructor(){
        super();

            this.state= {
                email: "",
                topic: "",
                query: ""
            }
    }

     handleSubmit =(event)=> {

        event.preventDefault();

        const {email, topic, query} = this.state;
        const data ={
            email,
            topic,
            query
        };

       axios
        .post('http://localhost:5000/submit', data)
        .then(() => console.log('email sent'))
        .catch(err => {console.error(err)})

    }

    onChange = (event) => this.setState({
        [event.target.name]: event.target.value
      });
  

    
    render(){
        // const{input1, input2, input3} = this.props;
        // const {form1, form2, form3} = this.state;
        console.log(this.state);
    return(
            <div>
                <form action="/submit" method="POST" className="contact-form" >

                                <label className="contact-label">Email
                                <input type="text" name="email"  onChange={this.onChange} />
                                </label>

                                <label className="contact-label">Topic
                                <input type="text" name="topic" value={this.state.form2} onChange={this.onChange}/>
                                </label>

                                <label className="contact-label">Query
                                <textarea name="query" value={this.state.form3} onChange={this.onChange} id="" cols="30" rows="10"></textarea>
                                </label>

                                <button type="submit" className="submit-button" onSubmit={this.handleSubmit}>Send Email</button>

                </form>
            </div>
        )
    }
}

export default Form;