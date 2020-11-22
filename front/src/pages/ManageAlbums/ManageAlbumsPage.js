import React, { Component } from "react";
import styled from "styled-components";
import Icon from "react-eva-icons";
import { Container, Row, Col } from "reactstrap";
import StyledAdminTrack from "../../components/Commons/AdminTrack";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class ManageAlbumsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      addAlbum: {
        date_publication: "",
        nom: "",
        imageUrl: "",
        artiste: {
          id: "",
        },
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  getArtistes() {
    fetch("http://localhost:8080/artiste/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((artists) => {
        this.setState({ artists });
      })
      .catch((err) => console.log(err));
  }

  getAlbums() {
    fetch("http://localhost:8080/album/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((albums) => {
        albums.forEach((album) => {
          album.artiste = album.artiste.alias;
        });
        this.setState({ albums });
      })
      .catch((err) => console.log(err));
  }

  editItem(id) {
    fetch("http://localhost:8080/album/" + id, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let idInput = document.getElementsByName("track-id")[0];
        idInput.value = data.id;

        let titleInput = document.getElementsByName("track-title")[0];
        titleInput.value = data.nom;

        let imageInput = document.getElementsByName("track-image")[0];
        imageInput.value = data.imageUrl;
      })
      .catch((err) => console.log(err));
  }

  deleteItem(id) {
    let confirmDelete = window.confirm("Delete album forever?");
    if (confirmDelete) {
      fetch("http://localhost:8080/album?albumId=" + id, {
        method: "DELETE",
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.componentDidMount();
        })
        .catch((err) => console.log(err));
    }
  }

  componentDidMount() {
    this.getAlbums();
    this.getArtistes();
  }

  handleChange(event) {
    switch (event.target.name) {
      case "track-title":
        this.state.addAlbum.nom = event.target.value;
        break;

      case "track-album":
        this.state.addAlbum.artiste.id = event.target.value;
        break;

      case "track-image":
        this.state.addAlbum.imageUrl = event.target.value;
        break;
    }
  }

  handleSubmit(event) {
    let idInput = document.getElementsByName("track-id")[0];
    let titleInput = document.getElementsByName("track-title")[0];
    let imageInput = document.getElementsByName("track-image")[0];
    event.preventDefault();
    if (idInput.value.length > 0) {
      fetch("http://localhost:8080/album/" + idInput.value, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          nom: titleInput.value,
          imageUrl: imageInput.value,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          idInput.value = "";
          titleInput.value = "";
          imageInput.value = "";
          this.componentDidMount();
        })
        .catch((err) => console.log(err));
    } else {
      fetch("http://localhost:8080/album", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          date_publication: this.state.addAlbum.date_publication,
          nom: this.state.addAlbum.nom,
          imageUrl: this.state.addAlbum.imageUrl,
          artiste: {
            id: this.state.addAlbum.artiste.id,
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          idInput.value = "";
          titleInput.value = "";
          imageInput.value = "";
          this.componentDidMount();
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    let tracks = [];
    if (this.state.albums) {
      tracks = this.state.albums.map((item, index) => (
        <StyledAdminTrack
          trackNumber={item.id}
          title={item.nom}
          artist={item.artiste}
          image={item.imageUrl}
          length={item.duree}
          editItem={this.editItem}
          deleteItem={this.deleteItem}
        ></StyledAdminTrack>
      ));
    }

    let artists = [];
    if (this.state.artists) {
      artists = this.state.artists.map((item, index) => (
        <option value={item.id}>{item.alias}</option>
      ));
    }

    return (
      <Container>
        <Row>
          <Col>
            <div style={{ display: "flex" }}>
              <Link to="/manage/artists">
                <button
                  style={{
                    backgroundColor: "#FFF",
                    border: "solid 1px #000",
                    borderRadius: "5px",
                    marginRight: "10px",
                  }}
                >
                  Artistes
                </button>
              </Link>
              <Link to="/manage/songs">
                <button
                  style={{
                    backgroundColor: "#FFF",
                    border: "solid 1px #000",
                    borderRadius: "5px",
                    marginRight: "10px",
                  }}
                >
                  Titres
                </button>
              </Link>
            </div>
            <h2 style={{ margin: "20px 0" }}>Albums</h2>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: "0",
                margin: "20px 0",
                flexWrap: "wrap",
              }}
            >
              {tracks}
            </ul>
            <form onSubmit={this.handleSubmit} style={{ display: "flex" }}>
              <input
                type="int"
                name="track-id"
                disabled
                style={{ display: "none" }}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="track-title"
                placeholder="Title"
                style={{ flex: 5 }}
                onChange={this.handleChange}
              />
              <select
                name="track-album"
                placeholder="Album"
                style={{ flex: 5 }}
                onChange={this.handleChange}
              >
                {artists}
              </select>
              <input
                type="text"
                name="track-image"
                placeholder="Image"
                style={{ flex: 5 }}
                onChange={this.handleChange}
              />
              <input type="submit" value="Envoyer" />
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ManageAlbumsPage;
