import React from "react";


function Table(props) {
    return (
        <table class="table">
        <thead>
          <tr>
            <th onClick={() => sortFunc("name")}><Button>First Name</Button></th>
            <th>Lastname</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>Male</td>
            <td>john@example.com</td>
            <td>02 9438 4837</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>Female</td>
            <td>mary@example.com</td>
            <td>03 9438 4838</td>
            <td>25</td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>Female</td>
            <td>july@example.com</td>
            <td>03 9438 4839</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>

    );
  }

  export default Table;