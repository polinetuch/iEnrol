import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import './tablerow.css';

class TableRow extends Component {

    constructor(props) {
        super()
        this.state = {
            enrollments: []

        }
    }

    fetch() {
        var fetchData;
        console.log('fetch ', this.props);
        if(this.props.isAdmin) {
            fetchData = axios.get('/enrollment/get');
        } else {
            fetchData = axios.get('/enrollment/get/' + this.props.uid);
        }
        fetchData.then(res => {
            console.log(res);
            this.setState({
                enrollments: res.data
            });
        })
        .catch(err => {
            console.log('catch fetch ', this.props);
            console.log(err)
        })
       
    }

    // Fetch the enrollment id
    componentDidMount() {
        console.log('componentDidMount', this.props);
        this.props.isLoggedIn && this.fetch();
    }

    // gets called everytime props change
    componentDidUpdate(prevProps) {
        // prevProps what it used to
        // if change that means swap user and check enrollment again || if it's not the same run Fetch function
        if (this.props.id !== prevProps.id) {
            this.fetch();
        } 
    }

    renderTable = (isAdmin) => {
        return (
            <Table>
                <Thead>
                    <Tr>
                        <Th>Student's Name</Th>
                        <Th>Age</Th>
                        <Th>Gender</Th>
                        <Th>Mother</Th>
                        <Th>Father</Th>
                        <Th>Contact</Th>
                        <Th>Address</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {this.state.enrollments.map(({ _id, name, age, gender, mother, father, contact, address }) => (
                        <Tr key={_id}>
                            <Td>{name}</Td>
                            <Td>{age}</Td>
                            <Td>{gender}</Td>
                            <Td>{mother}</Td>
                            <Td>{father}</Td>
                            <Td>{contact}</Td>
                            <Td>{address}</Td>
                            {
                                isAdmin && (<Td>
                                <Link to={"/enrollment/edit?id=" + _id} className="btn btn-primary">Edit</Link>
                                </Td>)
                            }
                             {
                                isAdmin && (
                                <Td>
                                    <button className="btn btn-danger">Delete</button>
                                </Td>)
                            }
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        );
    }

    render() {

            // console.log(this.state.enrollments.name)

        console.log(this.state.enrollments)
        // const table = 
            
        return (this.props.isLoggedIn ?  <div>
            <Link to="/enrollment/add/" className="btn btn-link text-secondary" onClick={this.AddEnrollment}>New Enrollment</Link>
            {this.renderTable(this.props.isAdmin )}
        </div>
        : <p>Please Login In</p>
        )
    }
}

export default TableRow;