import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const setUser = (payload) => ({ type: "SET_USER", payload })

class RegisterForm extends React.Component {
  state = {
    identifiant: '',
    password: '',
    pseudo: '',
    avatar: '',
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('https://ws-tp-muslib-back.serveurspaul.duckdns.org/utilisateur/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.identifiant,
        avatar: this.state.avatar,
        pseudo: this.state.pseudo,
        password: this.state.password,
      })
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem("token", data.token)
        window.location.reload(false);
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Form onSubmit={this.submitFormAdd}>
        <FormGroup>
          <Label for="first">Adresse email</Label>
          <Input type="text" name="identifiant" id="identifiant" onChange={this.onChange} value={this.state.identifiant === null ? '' : this.state.identifiant} />
        </FormGroup>
        <FormGroup>
          <Label for="last">Mot de passe</Label>
          <Input type="password" name="password" id="password" onChange={this.onChange} value={this.state.password === null ? '' : this.state.password} />
        </FormGroup>
        <FormGroup>
          <Label for="last">Pseudo</Label>
          <Input type="text" name="pseudo" id="pseudo" onChange={this.onChange} value={this.state.pseudo === null ? '' : this.state.pseudo} />
        </FormGroup>
        <FormGroup>
          <Label for="last">Avatar</Label>
          <Input type="text" name="avatar" id="avatar" onChange={this.onChange} value={this.state.avatar === null ? '' : this.state.avatar} />
        </FormGroup>
        <Button>Inscription</Button>
      </Form>
    );
  }
}

export default RegisterForm