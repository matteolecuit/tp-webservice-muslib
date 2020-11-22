import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import LoginForm from "../Forms/FormLogin";
import Icon from "react-eva-icons";

class AddToPlaylistModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      playlists: [],
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  getPlaylist() {
    fetch("http://localhost:8080/utilisateur/playlist", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((playlists) => {
        this.setState({ playlists });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getPlaylist();
  }

  setPlaylist(titreId, event) {
    fetch(
      "http://localhost:8080/utilisateur/playlist/" +
      event.target.value +
      "?titreId=" +
      titreId,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        this.toggle();
      })
      .catch((err) => window.alert("Wrong login"));
  }

  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );

    let playlists = [];
    if (!this.state.playlists.error) {
      playlists = this.state.playlists.map((item) => (
        <option value={item.id}>{item.nom}</option>
      ));
    }
    return (
      <div>
        <span onClick={this.toggle}>
          <Icon
            name="plus-circle-outline"
            size="large"
            fill="rgb(15,30,54, 0.5)"
            animation={{ type: "pulse", hover: true, infinite: false }}
          />
        </span>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            Ajouter à une playlist
          </ModalHeader>
          <ModalBody>
            <select
              name="track-album"
              placeholder="Album"
              style={{ flex: 5 }}
              onChange={(event) => this.setPlaylist(this.props.id, event)}
            >
              <option value="0">Sélectionnez une playlist</option>
              {playlists}
            </select>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AddToPlaylistModalForm;
