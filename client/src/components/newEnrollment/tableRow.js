import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "./tablerow.css";

const instance = axios.create({
    baseURL: "http://localhost:3001"
  });

class TableRow extends Component {

    constructor(props) {
        super()
        this.state = {
            enrollments: [],
            messages: [],
            showModal: false
        }
    };

    delete(id) {
        console.log("Delete", this.props);
        if(this.props.isAdmin) {
            instance.delete(`/enrollment/delete/${id}`).then((response)=> {
                const newEnrollmentArray = this.state.enrollments.filter((enrollment, index) => {
                    return enrollment._id !== response.data._id;
                })
                this.setState({
                    enrollments: newEnrollmentArray
                })
            }).catch(err => {
                console.log(err)
            })
        }
    };

    // if isAdmin is true, fetch all data
    // if isAdmin is false, only fetch data related to the uid (user login id)
    fetch() {
        let fetchData;
        if(this.props.isAdmin) {
            fetchData = instance.get('/enrollment/get');
        } else {
            fetchData = instance.get('/enrollment/get/' + this.props.uid);
        }
        fetchData.then(res => {
            console.log(res);
            this.setState({
                enrollments: res.data
            });
        })
        .catch(err => {
            console.log(err)
        })
       
    }

    // Fetch the enrollment id
    componentDidMount() {
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
            <>
                {this.state.showModal && <MyModal messages={this.state.messages} />}
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
                            <Th>Message</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {this.state.enrollments.map(({ _id, name, age, gender, mother, father, contact, address, messages }) => (
                            <Tr key={_id}>
                                <Td>{name}</Td>
                                <Td>{age}</Td>
                                <Td>{gender}</Td>
                                <Td>{mother}</Td>
                                <Td>{father}</Td>
                                <Td>{contact}</Td>
                                <Td>{address}</Td>
                                
                                <Td>
                                    <Link to={"/enrollment/edit?id=" + _id} className="btn btn-primary">Edit</Link>
                                </Td>

                                <Td>
                                    <button onClick={() => this.setState({ messages, showModal: !this.state.showModal })}>
                                        {this.state.showModal ? 'Hide' : 'Show'} Modal
                                    </button>
                                </Td>

                                {
                                    isAdmin && (
                                    <Td>
                                        <Link to={"/add-message/?id=" + _id} className="btn btn-dark">Add Message</Link>
                                        <button onClick={() =>{this.delete( _id)}} className="btn btn-danger">Delete</button>
                                    </Td>)
                                }
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </>
        );
    }

    render() {

        console.log(this.state.enrollments)
            
        return (this.props.isLoggedIn ?  <div>
            <Link to="/enrollment/add/" className="btn btn-primary add" onClick={this.AddEnrollment}>New Enrollment</Link>
            {this.renderTable(this.props.isAdmin )}
        </div>
        : <p>Please Login In</p>
        )
    }
}

const MyModal = ({ messages }) => (
    <div styles={{ position: 'absolute', top: 0 }}>
        {messages.map(({ message, createdAt }) => (
            <>
                <p>message: {message}</p>
                <p>created at: {createdAt}</p>
            </>
        ))}
    </div>
)

export default TableRow;