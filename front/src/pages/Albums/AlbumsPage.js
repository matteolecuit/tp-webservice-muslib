import React, { Component } from "react";
import styled from "styled-components";
import Icon from "react-eva-icons";
import { Container, Row } from "reactstrap";
import StyledCard from "../../components/Commons/Card";

class AlbumsPage extends Component {
  state = {
    albums: []
  };

  getAlbums() {
    fetch("https://ws-tp-muslib-back.serveurspaul.duckdns.org/album/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((albums) => {
        console.log(albums);
        this.setState({ albums });
      })
      .catch((err) => console.log(err));
  }
  componentDidMount() {
    this.getAlbums();
  }

  render() {
    let albums = [];
    if (this.state.albums) {
      albums = this.state.albums.map((item) => (
        <StyledCard
          imgUrl={item.imageUrl}
          titre={item.nom}
          link={"/albums/" + item.id}
          artiste={item.artiste.alias}
        ></StyledCard>
      ));
    }
    return (
      <Container>
        <Row>
          <h2 style={{ margin: "20px 0", width: "100%", textAlign: "left" }}>Featured Albums</h2>
          <ul
            style={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "0",
              flexWrap: "wrap",
            }}
          >
            {albums}
          </ul>
        </Row>
      </Container>
    );
  }
}

export default AlbumsPage;
