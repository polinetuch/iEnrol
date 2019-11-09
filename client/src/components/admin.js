import React, { Component } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import './admin.css';

const Admin = props => {
        return (
<div>
    <p>Manage Student Enrollment</p>

    <Table>
        <Thead>
            <Tr>    
                <Th>Child's name</Th>
                <Th>Age</Th>
                <Th>Gender</Th>
                <Th>Mother's name</Th>
                <Th>Father's name</Th>
                <Th>Contact Number</Th>
            </Tr>
        </Thead>
        <Tbody>
            <Tr>
                <Td>Sara Alabama</Td>
                <Td>4</Td>
                <Td>Male</Td>
                <Td>Nisha Alabama</Td>
                <Td>Shahan Alabama</Td>
                <Td>3473 443 323 </Td>
            </Tr>
            <Tr>
                <Td>Rose Evans</Td>
                <Td>4</Td>
                <Td>Female</Td>
                <Td>Flower Evans</Td>
                <Td>Toner Evans</Td>
                <Td>0442 375 854</Td>
            </Tr>
            <Tr>
                <Td>Con Jowers</Td>
                <Td>5</Td>
                <Td>Male</Td>
                <Td>Anna Jowers</Td>
                <Td>Shei Jowers</Td>
                <Td>0435 231 739</Td>
            </Tr>
            <Tr>
                <Td>Sasha Cederholm</Td>
                <Td>4</Td>
                <Td>Female</Td>
                <Td>Annette Cederholm</Td>
                <Td>Mike Cederholm</Td>
                <Td>0404 785 453</Td>
            </Tr>
            <Tr>
                <Td>Johannas Acker</Td>
                <Td>5</Td>
                <Td>Male</Td>
                <Td>Jane Acker</Td>
                <Td>Jon Acker</Td>
                <Td>0423 456 654</Td>
            </Tr>
        </Tbody>
    </Table>
</div>
        )
}


export default Admin;