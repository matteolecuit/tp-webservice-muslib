import React, { Component } from 'react'
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import HomePage from './pages/Home/HomePage';
import AlbumsPage from './pages/Albums/AlbumsPage';
import AlbumPage from './pages/Album/AlbumPage';
import ArtistsPage from './pages/Artists/ArtistsPage';
import ArtistPage from './pages/Artist/ArtistPage';
import FavoritesPage from './pages/Favorites/FavoritesPage';
import PlaylistPage from './pages/Playlist/PlaylistPage';
import PlaylistsPage from './pages/Playlists/PlaylistsPage';
import Topbar from './components/Topbar/Topbar';

class App extends Component {

  render() {
    return (
      <Router>
        <Container>
          <Sidebar></Sidebar>
          <div style={{ width: "100%", zIndex: "0" }}>
            <Topbar></Topbar>
            <div style={{ background: "linear-gradient(180deg, rgba(244, 249, 255, 0.01) 0%, #F4F9FF 50.23%)", height: "100%" , marginTop: "100px"}}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/albums" component={AlbumsPage} />
                <Route exact path="/artists" component={ArtistsPage} />
                <Route exact path="/favorites" component={FavoritesPage} />
                <Route exact path="/albums/:id" component={AlbumPage} />
                <Route exact path="/artists/:id" component={ArtistPage} />
                <Route exact path="/playlists/" component={PlaylistsPage} />
                <Route exact path="/playlists/:id" component={PlaylistPage} />
              </Switch>
            </div>
          </div>
          <script>
            eva.replace();
				</script>
        </Container>
      </Router>
    )
  }
}

export default App

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;