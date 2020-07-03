import React, {useState} from "react";
import Data from "../../utils/MOCK_DATA.json";
import Row from "../Row";
import Button from "../Button";
import _ from "lodash";


function Table(props) {


  const [data, setData] = useState(Data);
  const ascending = function(sortBy) {
    const cloned = _.cloneDeep(data)
    cloned.sort(function(a, b){
      if(a[sortBy] < b[sortBy]){
        return -1
      }else{ 
        return 1;
      }
    })
    setData(cloned)
  }

  return (
    <table className="table">
      <thead>
        <tr>
          
          <th>First Name <Button onClick={()=> ascending("first_name")} /> <Button/> </th>
          <th>Last Name <Button onClick={()=> ascending("last_name")} /></th>
          <th>Gender <Button onClick={()=> ascending("gender")} /></th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Country <Button onClick={()=> ascending("country")} /></th>
          <th>Department <Button onClick={()=> ascending("department")} /></th>
        </tr>
      </thead>
      {data.map((item) => (
        <Row
          key={item.id}
          first_name={item.first_name}
          last_name={item.last_name}
          gender={item.gender}
          email={item.email}
          phone={item.phone_number}
          country={item.country}
          department={item.department}
        ></Row>
      ))}
    </table>
  );
}

export default Table;
