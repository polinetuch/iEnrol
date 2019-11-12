import React, { Component } from 'react';

class tableRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.age}
                </td>
                <td>
                    {this.props.obj.gender}
                </td>
                <td>
                    {this.props.obj.mother}
                </td>
                <td>
                    {this.props.obj.father}
                </td>
                <td>
                    {this.props.obj.contact}
                </td>
                <td>
                    {this.props.obj.address}
                </td>
                <td>
                    <button className="btn btn-primary">Edit</button>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}