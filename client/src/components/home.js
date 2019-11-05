import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super()
    };

    render() {
        const imageStyle = {
            width: 400
        };
        
        return (
            <div>
                <h3>Enrol now to secure your spot</h3>
                <img style={imageStyle} src="https://media.istockphoto.com/photos/megaphone-and-enroll-now-picture-id507178000?k=6&m=507178000&s=612x612&w=0&h=uWy8mrGhBUzv_jUUlw48VQ0is7-UfI7f_vj5WORBsHY=" />
            </div>
        )

    }
}

export default Home
