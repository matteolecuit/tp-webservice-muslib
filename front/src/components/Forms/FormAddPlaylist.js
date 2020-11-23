import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class PlaylistAddEditForm extends React.Component {
  state = {
    nom: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitFormAdd = (e) => {
    e.preventDefault();
    fetch("https://ws-tp-muslib-back.serveurspaul.duckdns.org/utilisateur/playlist", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        nom: this.state.nom,
      }),
    })
      .then((response) => response.json())
      .then((item) => {
        if (Array.isArray(item)) {
          this.props.addItemToState(item[0]);
          this.props.toggle();
        } else {
          console.log("failure");
        }
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    // if item exists, populate the state with proper data
    if (this.props.item) {
      const { nom } = this.props.item;
      this.setState({ nom });
    }
  }

  render() {
    return (
      <Form onSubmit={this.submitFormAdd}>
        <FormGroup>
          <Label for="first">Nom</Label>
          <Input
            type="text"
            name="nom"
            id="nom"
            onChange={this.onChange}
            value={this.state.nom === null ? "" : this.state.nom}
          />
        </FormGroup>
        <Button>Ajouter</Button>
      </Form>
    );
  }
}

export default PlaylistAddEditForm;
