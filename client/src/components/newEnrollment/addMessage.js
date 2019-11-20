import React, { Component } from 'react';
import axios from 'axios';

class AddMessage extends Component {
    
    constructor(props) {
        super(props);
        
        this.onSubmit = this.onSubmit.bind(this);
        this.postData = this.postData.bind(this);
        
        this.state = {
            message: ""
        }
    }
    
    postData(data) {
        const urlParams = new URLSearchParams(window.location.search);
        axios.post("/enrollment/message/" + urlParams.get('id'), data)
        .then(res => {
            window.location = window.location.origin;
        })
    };

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            message: this.state.message
        };
        this.postData(obj);
    }

    render() {
        return(
        <div className="container">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Message</label>
                    <textarea type="message" className="message" name="message" value={this.state.message} onChange={ e => this.setState({message: e.target.value})} />
                </div>
                <div className="form-group">
                    <td></td><button className="btn btn-primary" type="submit" value={this.onSubmit}>Submit</button>
                </div>
            </form>
        </div>
        )
    }
}

export default AddMessage;