import React, { Component } from 'react';

class newEnrollment extends Component {

    render() {
        return(
        <div>
            <h3>Add New Enrollment</h3>
            <form>
                <div class="form-group">
                    <label>Add student name</label>
                    <input type="text" class="form-control"/>
                </div>
            </form>
        </div>
        )
    }
}

export default newEnrollment;