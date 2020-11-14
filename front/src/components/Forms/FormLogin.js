import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginForm extends React.Component {
  state = {
    identifiant: '',
    password: '',
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
          <Label for="first">Adresse email</Label>
          <Input type="text" name="identifiant" id="identifiant" onChange={this.onChange} value={this.state.identifiant === null ? '' : this.state.identifiant} />
        </FormGroup>
        <FormGroup>
          <Label for="last">Mot de passe</Label>
          <Input type="password" name="password" id="password" onChange={this.onChange} value={this.state.password === null ? '' : this.state.password} />
        </FormGroup>
        <Button>Connexion</Button>
      </Form>
    );
  }
}

export default LoginForm