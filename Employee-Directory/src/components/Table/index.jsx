import React, { useState } from "react";
import Data from "../../utils/MOCK_DATA.json";
import Row from "../Row";
import AscendingButton from "../AscendingButton";
import DescendingButton from "../DescendingButton";
import _ from "lodash";

function Table() {
  const [data, setData] = useState(Data);
  const ascending = function (sortBy) {
    const cloned = _.cloneDeep(data);
    cloned.sort(function (a, b) {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      } else {
        return 1;
      }
    });
    setData(cloned);
  };

  const descending = function (sortBy) {
    const cloned = _.cloneDeep(data);
    cloned.sort(function (a, b) {
      if (a[sortBy] > b[sortBy]) {
        return -1;
      } else {
        return 1;
      }
    });
    setData(cloned);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            First Name{" "}
            <AscendingButton onClick={() => ascending("first_name")} />{" "}
            <DescendingButton onClick={() => descending("first_name")} />{" "}
          </th>
          <th>
            Last Name <AscendingButton onClick={() => ascending("last_name")} />{" "}
            <DescendingButton onClick={() => descending("last_name")} />{" "}
          </th>
          <th>
            Gender <AscendingButton onClick={() => ascending("gender")} />{" "}
            <DescendingButton onClick={() => descending("gender")} />{" "}
          </th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>
            Country <AscendingButton onClick={() => ascending("country")} />{" "}
            <DescendingButton onClick={() => descending("country")} />{" "}
          </th>
          <th>
            Department{" "}
            <AscendingButton onClick={() => ascending("department")} />{" "}
            <DescendingButton onClick={() => descending("department")} />{" "}
          </th>
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
