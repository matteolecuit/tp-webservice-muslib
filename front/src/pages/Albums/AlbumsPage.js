import React, { Component } from "react";
import styled from "styled-components";
import Icon from "react-eva-icons";
import { Container, Row } from "reactstrap";
import StyledCard from "../../components/Commons/Card";

class AlbumsPage extends Component {
  state = {
    albums: [
      {
        name: "La Machine Jul",
        artist: "Jul",
        img:
          "https://e-cdns-images.dzcdn.net/images/cover/c11689c8ecc5d4030b31a7bccfa0c910/264x264-000000-80-0-0.jpg",
        url: "/albums/1",
      },
      {
        name: "The Slow Rush",
        artist: "Tame Impala",
        img:
          "https://e-cdns-images.dzcdn.net/images/cover/d8eb61bd4becf79a602a75b69eebde7d/264x264-000000-80-0-0.jpg",
        url: "/albums/1",
      },
      {
        name: "Song Machine Season 1",
        artist: "Gorillaz",
        img:
          "https://e-cdns-images.dzcdn.net/images/playlist/4f23dfad4433da7407a0c246ed63e708/264x264-000000-80-0-0.jpg",
        url: "/albums/1",
      },
      {
        name: "Rumours",
        artist: "Fleetwood Mac",
        img:
          "https://e-cdns-images.dzcdn.net/images/cover/9732751ce91d786dcf30069853697078/264x264-000000-80-0-0.jpg",
        url: "/albums/1",
      },
      {
        name: "Nevermind",
        artist: "Nirvana",
        img:
          "https://e-cdns-images.dzcdn.net/images/cover/f0282817b697279e56df13909962a54a/264x264-000000-80-0-0.jpg",
        url: "/albums/1",
      },
      {
        name: "The Velvet Underground",
        artist: "The Velvet Underground",
        img:
          "https://e-cdns-images.dzcdn.net/images/cover/5722e04a2ba2539c02ac2afb655a4f93/264x264-000000-80-0-0.jpg",
        url: "/albums/1",
      },
      {
        name: "La Machine Jul",
        artist: "Jul",
        img:
          "https://e-cdns-images.dzcdn.net/images/cover/c11689c8ecc5d4030b31a7bccfa0c910/264x264-000000-80-0-0.jpg",
        url: "/albums/1",
      },
      {
        name: "The Slow Rush",
        artist: "Tame Impala",
        img:
          "https://e-cdns-images.dzcdn.net/images/cover/d8eb61bd4becf79a602a75b69eebde7d/264x264-000000-80-0-0.jpg",
        url: "/albums/1",
      },
      {
        name: "Song Machine Season 1",
        artist: "Gorillaz",
        img:
          "https://e-cdns-images.dzcdn.net/images/playlist/4f23dfad4433da7407a0c246ed63e708/264x264-000000-80-0-0.jpg",
        url: "/albums/1",
      },
      {
        name: "Rumours",
        artist: "Fleetwood Mac",
        img:
          "https://e-cdns-images.dzcdn.net/images/cover/9732751ce91d786dcf30069853697078/264x264-000000-80-0-0.jpg",
        url: "/albums/1",
      },
      {
        name: "Nevermind",
        artist: "Nirvana",
        img:
          "https://e-cdns-images.dzcdn.net/images/cover/f0282817b697279e56df13909962a54a/264x264-000000-80-0-0.jpg",
        url: "/albums/1",
      },
      {
        name: "The Velvet Underground",
        artist: "The Velvet Underground",
        img:
          "https://e-cdns-images.dzcdn.net/images/cover/5722e04a2ba2539c02ac2afb655a4f93/264x264-000000-80-0-0.jpg",
        url: "/albums/1",
      },
      {
        name: "La Machine Jul",
        artist: "Jul",
        img:
          "https://e-cdns-images.dzcdn.net/images/cover/c11689c8ecc5d4030b31a7bccfa0c910/264x264-000000-80-0-0.jpg",
        url: "/albums/1",
      },
      {
        name: "The Slow Rush",
        artist: "Tame Impala",
        img:
          "https://e-cdns-images.dzcdn.net/images/cover/d8eb61bd4becf79a602a75b69eebde7d/264x264-000000-80-0-0.jpg",
        url: "/albums/1",
      },
      {
        name: "Song Machine Season 1",
        artist: "Gorillaz",
        img:
          "https://e-cdns-images.dzcdn.net/images/playlist/4f23dfad4433da7407a0c246ed63e708/264x264-000000-80-0-0.jpg",
        url: "/albums/1",
      },
      {
        name: "Rumours",
        artist: "Fleetwood Mac",
        img:
          "https://e-cdns-images.dzcdn.net/images/cover/9732751ce91d786dcf30069853697078/264x264-000000-80-0-0.jpg",
        url: "/albums/1",
      },
      {
        name: "Nevermind",
        artist: "Nirvana",
        img:
          "https://e-cdns-images.dzcdn.net/images/cover/f0282817b697279e56df13909962a54a/264x264-000000-80-0-0.jpg",
        url: "/albums/1",
      },
      {
        name: "The Velvet Underground",
        artist: "The Velvet Underground",
        img:
          "https://e-cdns-images.dzcdn.net/images/cover/5722e04a2ba2539c02ac2afb655a4f93/264x264-000000-80-0-0.jpg",
        url: "/albums/1",
      },
    ],
  };

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
          artiste={item.artist}
        ></StyledCard>
      ));
    }
    return (
      <Container>
        <Row>
          <h2 style={{ margin: "20px 0" }}>Featured Albums</h2>
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
