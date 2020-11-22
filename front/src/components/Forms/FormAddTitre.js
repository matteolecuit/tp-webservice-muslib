import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class TitreAddEditForm extends React.Component {
  state = {
    duree: '',
    nom: '',
    artiste: null,
    album: null,
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:8080/titre', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        duree: 300,
        nom: this.state.nom,
        artiste: null,
        album: null,
      })
    })
      .then(response => response.json())
      .then(item => {
        if (Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:8080/titre', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        duree: this.state.duree,
        nom: this.state.nom,
        artiste: null,
        album: null,
      })
    })
      .then(response => response.json())
      .then(item => {
        if (Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    // if item exists, populate the state with proper data
    if (this.props.item) {
      const { nom, duree, artiste, album } = this.props.item
      this.setState({ nom, duree, artiste, album })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="first">Nom</Label>
          <Input type="text" name="nom" id="nom" onChange={this.onChange} value={this.state.nom === null ? '' : this.state.nom} />
        </FormGroup>
        <FormGroup>
          <Label for="last">Durée</Label>
          <Input type="text" name="duree" id="duree" onChange={this.onChange} value={this.state.duree === null ? '' : this.state.duree} />
        </FormGroup>
        <Button>Ajouter</Button>
      </Form>
    );
  }
}

export default TitreAddEditForm