import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Icon from "react-eva-icons";
import StyledArtistCard from "../../components/Commons/ArtistCard";
import StyledCard from "../../components/Commons/Card";

class FavoritesPage extends Component {
  state = {
    artistes: [],
    albums: [],
    titres: [],
  };

  getFavorites() {
    fetch("http://localhost:8080/utilisateur/favoris/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((favorites) => {
        this.setState({
          artistes: favorites.artistes,
          albums: favorites.albums,
          titres: favorites.titres,
        });
        console.log(favorites);
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getFavorites();
  }

  render() {
    let artists = [];
    if (this.state.artistes) {
      artists = this.state.artistes.map((item) => (
        <StyledArtistCard
          imgUrl={item.imageUrl}
          titre={item.alias}
          link={"/artists/" + item.id}
        ></StyledArtistCard>
      ));
    }

    let albums = [];
    if (this.state.albums) {
      albums = this.state.albums.map((item) => (
        <StyledCard
          imgUrl={item.imageUrl}
          titre={item.nom}
          link={"/albums/" + item.id}
          artiste={item.artist}
        ></StyledCard>
      ));
    }
    return (
      <Container className="App">
        <Row>
          <Col>
            <h2 style={{ margin: "20px 0" }}>Liked Songs</h2>
            <StyledCard
              imgUrl={this.state.songsImg}
              link={this.state.songsUrl}
            ></StyledCard>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 style={{ margin: "20px 0" }}>Liked Artists</h2>
            <ul
              style={{
                display: "flex",
                justifyContent: "flex-start",
                padding: "0",
                overflowX: "scroll",
              }}
            >
              {artists}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 style={{ margin: "20px 0" }}>Liked Albums</h2>
            <ul
              style={{
                display: "flex",
                justifyContent: "flex-start",
                padding: "0",
                overflowX: "scroll",
              }}
            >
              {albums}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FavoritesPage;
