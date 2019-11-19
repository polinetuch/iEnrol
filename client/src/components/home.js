import React, { Component } from "react";
import LoginForm from "./login-form";
import { Link } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            isLoggedIn: false
        }
    };

    render() {
        
        return (
            
            this.props.isLoggedIn ?
                <div>
                <h2>Welcome to iEnrol</h2>
                 <p>Have you ever been so busy and come to realize that your child’s enrollment form is due tomorrow? Do you ever need to step out of your office chair to try and call the admin so you can change your contact details and address? Or to find out about your loved one’s day being their first time at an educational setting? The anticipation is over! I have developed a solution that can save you time from taking annual leave or leave work early so you can have a chat with one of the admins at your child’s school or kinder.</p>
            </div> : <LoginForm/>
            
           
        
            
        )

    }
}

export default Home
