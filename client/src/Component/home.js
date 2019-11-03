import React, { Component } from "react";

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>Wellcome to iEnrol</p>
                <img stype={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" />
            </div>
        )
    }
}

export default Home;