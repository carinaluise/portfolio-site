import React from 'react';
import './form.scss';
import axios from 'axios'

class Form extends React.Component{

    constructor(){
        super();

            this.state= {
                email: "",
                topic: "",
                query: "",
                result: "",


            }

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleRefresh = this.handleRefresh.bind(this);
    }

     handleSubmit = (event)=> {
        event.preventDefault();

        const {email, topic, query, error, success} = this.state;
        const data ={
            email,
            topic,
            query
        };

        axios
            .post('/form', data)
            .then((res) => {
                
                this.setState({result: "success"})
            })
            .catch(err => {
                console.error(err)
                this.setState({result: "fail"})
            })
        }

    handleChange = (event) => this.setState({
        [event.target.name]: event.target.value
    });

    handleRefresh = () => {
        this.setState({
            email: "",
            topic: "",
            query: "",
            result: "",
        })
    }
  

    
    render(){
        const {result, topic, email, query, refresh} = this.state;

        if(result === "success"){
            return(<div className="form-response">
                    <h1>Email successfully sent!</h1>
                    <img src="../../../checked.png"></img>
                    <h3>I will be in touch shortly.</h3>
                </div>
            );
        }
        else if(result === "fail"){
            return(<div className="form-response">
                    <h1>Oh no! Something went wrong.</h1>
                    <img src="../../../fail.png"></img>
                    <h3>Please check you are using a valid email address and <a href="Javascript:void(0)" onClick={this.handleRefresh}>try again.</a></h3>
                </div>
            );
        } else{
        return(
                <div>
                    <form className="contact-form" onSubmit={this.handleSubmit}>

                                    <label className="contact-label">Email
                                    <input type="text" name="email"  value={email} onChange={this.handleChange} />
                                    </label>

                                    <label className="contact-label">Topic
                                    <input type="text" name="topic" value={topic} onChange={this.handleChange}/>
                                    </label>

                                    <label className="contact-label">Query
                                    <textarea name="query" value={query} onChange={this.handleChange} id="" cols="30" rows="10"></textarea>
                                    </label>

                                    <button type="submit" className="submit-button">Send Email</button>

                    </form>
                </div>
            )
        }
    }  
}

export default Form;