import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import TitreModalForm from './components/Modals/AddTitreModal'
import TitreTable from './components/Tables/TitreTable'
import { CSVLink } from "react-csv"

class App extends Component {
  state = {
    titres: []
  }

  getTitres() {
    fetch('http://localhost:8080/titre')
      .then(response => response.json())
      .then(titres => this.setState({ titres }))
      .catch(err => console.log(err))
  }

  addTitreToState = (titre) => {
    this.setState(prevState => ({
      titres: [...prevState.titres, titre]
    }))
  }

  updateState = (titre) => {
    const titreIndex = this.state.titres.findIndex(data => data.id === titre.id)
    const newArray = [
      // destructure all titres from beginning to the indexed titre
      ...this.state.titres.slice(0, titreIndex),
      // add the updated titre to the array
      titre,
      // add the rest of the titres to the array from the index after the replaced titre
      ...this.state.titres.slice(titreIndex + 1)
    ]
    this.setState({ titres: newArray })
  }

  deleteTitreFromState = (id) => {
    const updatedTitres = this.state.titres.filter(titre => titre.id !== id)
    this.setState({ titres: updatedTitres })
  }

  componentDidMount() {
    this.getTitres()
  }

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