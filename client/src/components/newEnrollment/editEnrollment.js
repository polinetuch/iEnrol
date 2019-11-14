import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// const queryString = require('query-string');

// const parsed = queryString.parse(props.location.search);

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
        axios.get("/api/enrollment/edit" + this.props.match.params.id)
        .then(res => this.setState({
            name: res.data.name,
            age: res.data.age,
            gender: res.data.gender,
            mother: res.data.mother,
            father: res.data.father,
            contact: res.data.contact,
            address: res.data.address,
        }))
        .catch(function (error) {
            console.log("error occurred" + error);
        })
    }

    onChangeStudentName(e) {
        this.setState({
            name: e.target.value
        })
    };

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        })
    };

    render() {
        return(
        <div>
            <h3>Edit Enrollment</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeStudentName} />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" value={this.state.age} onChange={this.onChangeAge} />
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <input type="text" className="form-control" value={this.state.gender} onChange={this.onChangeGender} />
                </div>
                <div className="form-group">
                    <label>Mother</label>
                    <input type="text" className="form-control" value={this.state.mother} onChange={this.onChangeMother} />
                </div>
                <div className="form-group">
                    <label>Father</label>
                    <input type="text" className="form-control" value={this.state.father} onChange={this.onChangeFather} />
                </div>
                <div className="form-group">
                    <label>Contact</label>
                    <input type="text" className="form-control" value={this.state.contact} onChange={this.onChangeContact} />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" value={this.state.address} onChange={this.onChangeAddress} />
                </div>
            </form>

        </div>
        )
    }
}

export default EditEnrollment;

// get value from query string
// if value contains id then make an axios fetch enrollment by id
// update the form field 