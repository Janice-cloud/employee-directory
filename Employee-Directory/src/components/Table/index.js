import React from "react";
import Data from "../../utils/MOCK_DATA.json"
import Row from "../Row";

function Table(props) {
    return (
        <table className="table">
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
          {Data.map( item => (
            <Row 
            key={item.id}
            first_name = {item.first_name} 
            last_name = {item.last_name}
            gender = {item.gender}
            email = {item.email}
            phone = {item.phone_number}
            country = {item.country}
            department = {item.department}
            >
          
             </Row>

          ))}
         
      
        
        
       
      </table>

    );
  }

  export default Table;