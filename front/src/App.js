import React, { Component } from 'react'
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	Link
  } from "react-router-dom";
import HomePage from './pages/Home/HomePage';
import AlbumsPage from './pages/Albums/AlbumsPage';
import ArtistsPage from './pages/Artists/ArtistsPage';
import FavoritesPage from './pages/Favorites/FavoritesPage';
import Topbar from './components/Topbar/Topbar';
import { Container, Row, Col } from 'reactstrap'
import TitreModalForm from './components/Modals/AddTitreModal'
import TitreTable from './components/Tables/TitreTable'
import { CSVLink } from "react-csv"
import LoginForm from './components/Login/Login'

class App extends Component {

  render() {
    return (
      <Container className="App">
        <Row>
          <Col>
            <h1 style={{ margin: "20px 0" }}>CRUD Database</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <TitreTable titres={this.state.titres} updateState={this.updateState} deleteTitreFromState={this.deleteTitreFromState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CSVLink
              filename={"db.csv"}
              color="primary"
              style={{ float: "left", marginRight: "10px" }}
              className="btn btn-primary"
              data={this.state.titres}>
              Download CSV
            </CSVLink>
            <TitreModalForm buttonLabel="Add Titre" addTitreToState={this.addTitreToState} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;