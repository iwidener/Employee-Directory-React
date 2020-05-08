import React from "react";
// import React, { Component } from "react";
//import ReactDOM from "react-dom";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "./components/Container";
import Navbar from "./components/Navbar"
//import Home from "../src/pages/Home";
// import Table from "./components/Table/index.js";
// import EmployeesData from "./data/employees.json";
import * as ReactBootstrap from "react-bootstrap";

const App = () => {
  const employees = [
    {
      id: 1,
      firstName: "Peter",
      lastName: "Smith",
      contactPhone: "214 121 1211"
    },
    {
      id: 2,
      firstName: "Olha",
      lastName: "Shevchenko",
      contactPhone: "214 122 1222"
    },
    {
      id: 3,
      firstName: "Kevin",
      lastName: "Brown",
      contactPhone: "214 133 2373"
    },
    {
      id: 4,
      firstName: "Brad",
      lastName: "Coore",
      contactPhone: "214 244 4741"
    },
    {
      id: 5,
      firstName: "Sofia",
      lastName: "Lysenko",
      contactPhone: "214 525 1595"
    }
  ]

  const renderEmployee = (employee, index) => {
    return (
      <tr key={index}>
        <td>{employee.id}</td>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.contactPhone}</td>
      </tr>
    )
  }

  return (
    <div className="App">
      <Jumbotron fluid>
        <h1>Welcome to Home Page</h1>/>
      </Jumbotron>

        <Navbar>
          <ReactBootstrap.Form inline>
            <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </ReactBootstrap.Form>
        </ Navbar>

      <Container>
        <h2>A Table of Employees</h2>

        <ReactBootstrap.Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact Phone</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(renderEmployee)}
          </tbody>
        </ReactBootstrap.Table>

      </Container>
      
    </div>
  )
}

export default App;
