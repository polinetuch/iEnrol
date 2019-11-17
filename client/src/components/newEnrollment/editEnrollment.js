import React, { Component } from 'react';
import axios from 'axios';

class EditEnrollment extends Component {
    
    constructor(props) {
        super(props);
        
        this.onChangeData = this.onChangeData.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.postData = this.postData.bind(this);
        this.updateData = this.updateData.bind(this);
        
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
        if(paramsID) {
            axios.get("/enrollment/edit/" + paramsID)
            .then(res =>{
                console.log(res);
                this.setState({
                    id: paramsID,
                    name: res.data.name,
                    age: res.data.age,
                    gender: res.data.gender,
                    mother: res.data.mother,
                    father: res.data.father,
                    contact: res.data.contact,
                    address: res.data.address,
                    uid: res.data.uid
                })
            })
            .catch(function (error) {
                console.log("error occurred" + error);
            })
        }
        
    };

    onChangeData = e => {
        const { name, value } = e.target;
        console.log('triggered', name);
        this.setState({
            [name]: value
        });
    }

    updateData(data) {
        axios.post("/enrollment/update/" + this.state.id, data)
        .then(res => {
            window.location = window.location.origin
        })
    };

    postData(data) {
        axios.post("/enrollment/add", data)
        .then(res => {
            window.location = window.location.origin;
        })
    };

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
        this.state.id ?
        this.updateData(obj) : 
        this.postData(obj);
    }

    render() {
        const label = this.state.id ? 'Edit' : 'Add';
        return(
        <div className="container">
            <h3>{`${label} Enrollment`}</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChangeData} />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" name="age" value={this.state.age} onChange={this.onChangeData} />
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <input type="text" className="form-control" name="gender" value={this.state.gender} onChange={this.onChangeData} />
                </div>
                <div className="form-group">
                    <label>Mother</label>
                    <input type="text" className="form-control" name="mother" value={this.state.mother} onChange={this.onChangeData} />
                </div>
                <div className="form-group">
                    <label>Father</label>
                    <input type="text" className="form-control" name="father" value={this.state.father} onChange={this.onChangeData} />
                </div>
                <div className="form-group">
                    <label>Contact</label>
                    <input type="text" className="form-control" name="contact" value={this.state.contact} onChange={this.onChangeData} />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.onChangeData} />
                </div>
                <div className="form-group">
                    <label>User ID</label>
                    <input type="text" className="form-control" name="userId" value={this.state.uid} onChange={this.onChangeData} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit" value={`${label} Enrollment`}>Submit</button>
                </div>
            </form>

        </div>
        )
    }
}

export default EditEnrollment;