import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditEnrollment extends Component {

    constructor(props) {
        super(props);

        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeMotherName = this.onChangeMotherName.bind(this);
        this.onChangeFatherName = this.onChangeFatherName.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);

        this.state = {
            enrollment: []
        }
    }

    componentDidMount() {
        axios.get("/api/enrollment")
        .then(res => this.setState({
            enrollments: res.data
        }))
        .catch(function (error) {
            console.log("error occurred" + error);
        })
    }

    render() {
        return(
        <div>
            <h3>Edit Enrollment</h3>
            <Link to={"api/enrollment/edit" + this.state.enrollment._id} className="btn btn-primary">Edit</Link>
        </div>
        )
    }
}

export default EditEnrollment;