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
        this.onSubmit = this.onSubmit.bind(this);
        this.postData = this.postData.bind(this);
        
        this.state = {
            name: "",
            age: "",
            gender: "",
            mother: "",
            father: "",
            contact: "",
            address: "",
            id: ""
        }
    }
    
    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        const paramsID = urlParams.get('id');
        console.log('paramsID', paramsID);
        axios.get("/enrollment/edit/" + paramsID)
        .then(res =>{
            console.log(res);
            this.setState({
                name: res.data.name,
                age: res.data.age,
                gender: res.data.gender,
                mother: res.data.mother,
                father: res.data.father,
                contact: res.data.contact,
                address: res.data.address,
                id: paramsID
            })
        })
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

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        })
    };

    onChangeMotherName(e) {
        this.setState({
            mother: e.target.value
        })
    };

    onChangeFatherName(e) {
        this.setState({
            father: e.target.value
        })
    };

    onChangeContact(e) {
        this.setState({
            contact: e.target.value
        })
    };

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    };
    
    postData(data) {
        axios.post("/enrollment/update/" + this.state.id, data)
        .then(res => console.log (res))
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender,
            mother: this.state.mother,
            father: this.state.father,
            contact: this.state.contact,
            address: this.state.address,
        };
        this.postData(obj)
    }

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
                    <input type="text" className="form-control" value={this.state.mother} onChange={this.onChangeMotherName} />
                </div>
                <div className="form-group">
                    <label>Father</label>
                    <input type="text" className="form-control" value={this.state.father} onChange={this.onChangeFatherName} />
                </div>
                <div className="form-group">
                    <label>Contact</label>
                    <input type="text" className="form-control" value={this.state.contact} onChange={this.onChangeContact} />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" value={this.state.address} onChange={this.onChangeAddress} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Update Enrollment" className="btn btn-primary"/>
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