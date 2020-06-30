import React from "react";

function Table(props) {
    return (
        <table class="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Country</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.first_name}</td>
            <td>{props.last_name}</td>
            <td>{props.gender}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.department}</td>
          </tr>
        </tbody>
      </table>

    );
  }

  export default Table;