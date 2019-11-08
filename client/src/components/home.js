import React, { Component } from 'react';
import Admin from './admin';

class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            isAdmin: true
        }
        // pass the admin as props under state 

    };

    render() {
        const imageStyle = {
            width: 400
        };
        
        return (
            <>
            <div>
                <h4>Enrol now to secure your spot</h4>
                {/* <img style={imageStyle} src="https://media.istockphoto.com/photos/megaphone-and-enroll-now-picture-id507178000?k=6&m=507178000&s=612x612&w=0&h=uWy8mrGhBUzv_jUUlw48VQ0is7-UfI7f_vj5WORBsHY=" /> */}
            </div>
            {/* pass in data as props */}
            {this.props.isAdmin && <Admin/>}
            
            </>
            
        )

    }
}

export default Home
