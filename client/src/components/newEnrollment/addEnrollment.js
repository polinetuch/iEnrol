import React, { Component } from 'react';

class addEnrollment extends Component {
    constructor(props) {
        super(props)
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeMotherName = this.onChangeMotherName.bind(this);
        this.onChangeFatherName = this.onChangeFatherName.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);

        this.state = {
            name: "",
            age: "",
            gender: "",
            mother: "",
            father: "",
            contact: "",
            address: ""
        }
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
    }

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

    onSubmit(e) {
        e.preventDefault();
        const object = {
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender,
            mother: this.state.mother,
            father: this.state.father,
            contact: this.state.contact,
            address: this.state.address
        }
    }


    render() {
        return(
        <div>
            <h3>Add New Enrollment</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Student Name: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onChangeStudentName} />
                    </div>

                    <div className="form-group">
                        <label>Student Age: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.age}
                        onChange={this.onChangeAge} />
                    </div>

                    <div className="form-group">
                        <label>Student Gender: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.gender}
                        onChange={this.onChangeGender} />
                    </div>
                </form>
        </div>

        )
    }
}

export default addEnrollment;