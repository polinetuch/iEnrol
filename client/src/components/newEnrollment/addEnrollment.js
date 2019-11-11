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
    }

    render() {
        return(
        <div>
            <h3>Add New Enrollment</h3>
            <form>
                <div class="form-group">
                    <label>Student name</label>
                    <input type="text" class="form-control"/>
                </div>
            </form>
        </div>

        )
    }
}

export default addEnrollment;