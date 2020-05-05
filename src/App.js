import React, { Component } from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "./components/Container";
import Home from "../src/pages/Home";
import Table from "./components/Table";

class App extends Component() {
  constructor(props) {
    super(props)
    this.state = {
      data: data
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Jumbotron fluid>
            <Route exact path="/" component={Home} />
          </Jumbotron>

          <Container>
            <h1>A Table of Employees</h1>
            <Table />
          </Container>
        </div>

      </Router>
    );
  }
}

export default App;
