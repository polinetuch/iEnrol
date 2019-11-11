import React, { Component } from 'react';

class addEnrollment extends Component {

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