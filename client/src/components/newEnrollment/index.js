import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './tableRow';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {enrollment: []}
    }

    componentDidMount() {
        axios.get("http://localhost:3000/enrollment")
        .then((response) => {
            console.log("response from axios", response)
            this.setState({ enrollment: response.data });
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    tableRow() {
        return this.state.enrollment.map(function(object, i) {
            return <TableRow object={object} key={i} />
        })
    };

    render() {
        return(
        <div>
            <h3>Enrollment List</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Student's Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Mother's Name</th>
                        <th>Father's Name</th>
                        <th>Contact</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    { this.TableRow() }
                </tbody>
            </table>
        </div>
        )
    }
};

export default Index;