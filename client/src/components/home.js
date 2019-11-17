import React, { Component } from 'react';
import Admin from './admin';

class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            isAdmin: true
        }
    };

    render() {
        
        return (
            <>
            {/* <div>
                <h2>Welcome to iEnrol</h2>
                 <p><h4>To our busy parents out there, never again submit your child's enrollment form late</h4></p>
            </div> */}
            {/* pass in data as props */}
            {this.props.isAdmin && <Admin/>}
            </>
            
        )

    }
}

export default Home
