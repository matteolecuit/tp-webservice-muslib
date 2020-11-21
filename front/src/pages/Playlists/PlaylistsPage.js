import React, { Component } from "react";
import styled from "styled-components";
import Icon from "react-eva-icons";
import { Container, Row, Col } from "reactstrap";
import StyleCard from "../../components/Commons/Card";
import StyledArtistBanner from "../../components/Commons/ArtistBanner";

class ArtistsPage extends Component {
  state = {
    playlists: [],
  };
  getPlaylists() {
    fetch("http://ws-tp-muslib-back.serveurspaul.duckdns.org/utilisateur/playlist/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((playlists) => {
        this.setState({ playlists });
        console.log(this.state.playlists);
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getPlaylists();
  }

  // List Playlists

  render() {
    let playlists = [];
    if (this.state.playlists) {
      playlists = this.state.playlists.map((item) => {
        let imageUrl;
        if (item.titres.length > 0) {
          imageUrl = item.titres[0].imageUrl;
        }
        return (
          <StyleCard
            imgUrl={imageUrl}
            titre={item.nom}
            link={"/playlists/" + item.id}
          ></StyleCard>
        );
      });
    }
    return (
      <Container>
        <Row>
          <Col>
            <h2 style={{ margin: "20px 0" }}>Playlists</h2>
            <ul
              style={{
                display: "flex",
                justifyContent: "flex-start",
                padding: "0",
                flexWrap: "wrap",
              }}
            >
              {playlists}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ArtistsPage;
