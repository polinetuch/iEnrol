import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EditEnrollment from './editEnrollment';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';   

class TableRow extends Component {

    constructor(props) {
        super()
        this.state = {
            enrollments: []
            
        }
    }

    componentWillMount() {
        console.log(this.props);
        axios.get('/api/enrollment/')
            .then(res => this.setState({
                enrollments: res.data
            }))
      }

    render() {
        console.log(this.state.enrollments)
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
                            <Td>
                            <Link to={"api/enrollment/edit?id=" + _id} className="btn btn-primary">Edit</Link>
                            </Td>
                            <Td>
                                <button className="btn btn-danger">Delete</button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            
        )
    }
}

export default TableRow;