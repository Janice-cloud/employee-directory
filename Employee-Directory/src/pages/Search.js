import React, { Component } from "react";
import Container from "../components/Container";
import Table from "../components/Table";

class Search extends Component {
  state = {
    first_name: [],
    last_name: [],
    gender: [],
    country: [],
    department: []
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  
//   componentDidMount() 
// {
//         fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
//             .then((data) => {
//                 data.sort(function (a, b) {
//                     return a.userId> b.userId;
//                 })
//                 data.sort();
//                 this.setState({data: data});

//             });

//     }



  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-left" style={{ paddingTop: "30px", paddingBottom: "30px"}}>Connect with the team!</h1>

          <Table>
          
          </Table>

        </Container>
      </div>
    );
  }
}

export default Search;
