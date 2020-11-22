import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'
import LoginForm from '../Forms/FormLogin'
import Icon from 'react-eva-icons';

class ChangeUserInfoModalForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      playlists: [],
      pseudo: null,
      url: null,
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  getPlaylist() {
    fetch('http://localhost:8080/utilisateur/playlist', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(playlists => {
        this.setState({ playlists });
      })
      .catch(err => console.log(err))
  };

  componentDidMount() {
    this.getPlaylist();
  }

  submitForm = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/utilisateur", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        avatar: this.state.url,
        pseudo: this.state.pseudo,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.reload(false);
      })
      .catch((err) => window.alert(err));
  };

  render() {

    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>

    let playlists = [];
    if (this.state.playlists) {
      playlists = this.state.playlists.map((item) =>
        <option value={item.id}>{item.nom}</option>
      );
    }
    return (
      <div>
        <img onClick={this.toggle} src={this.props.src} alt="profile picture" height="35px" width="35px" />
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Editer le profil</ModalHeader>
          <ModalBody>
            <Form
              onSubmit={this.props.item ? this.submitFormEdit : this.submitForm}
            >
              <FormGroup>
                <Label for="first">Pseudo</Label>
                <Input
                  type="text"
                  name="pseudo"
                  id="pseudo"
                  onChange={this.onChange}
                  value={
                    this.state.pseudo === null ? "" : this.state.pseudo
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="last">Url de l'image de profil</Label>
                <Input
                  type="text"
                  name="url"
                  id="url"
                  onChange={this.onChange}
                  value={this.state.url === null ? "" : this.state.url}
                />
              </FormGroup>
              <Button>Valider</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ChangeUserInfoModalForm