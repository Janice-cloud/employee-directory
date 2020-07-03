import React from "react";

function Row(props) {
  return (
    <tbody>
      {console.log(props)}
      {
        <tr>
          <td>{props.first_name}</td>
          <td>{props.last_name}</td>
          <td>{props.gender}</td>
          <td>{props.email}</td>
          <td>{props.phone}</td>
          <td>{props.country}</td>
          <td>{props.department}</td>
        </tr>
      }
    </tbody>
  );
}

export default Row;
