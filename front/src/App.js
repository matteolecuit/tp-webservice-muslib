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
import ManageSongsPage from './pages/ManageSongs/ManageSongsPage';
import ManageAlbumsPage from './pages/ManageAlbums/ManageAlbumsPage';
import ManageArtistsPage from './pages/ManageArtists/ManageArtistsPage';
import Topbar from './components/Topbar/Topbar';

class App extends Component {

	state = {
		utilisateur: {
		},
		items: [
			{
				icon: "activity-outline",
				label: "Discover",
				url: "/"
			},
			{
				icon: "book-open-outline",
				label: "Albums",
				url: "/albums"
			},
			{
				icon: "person-outline",
				label: "Artists",
				url: "/artists"
			},
			{
				icon: "heart-outline",
				label: "Favorites",
				url: "/favorites"
			}
		],
		playlistsLabel: {
			label: "Playlists",
			icon: "plus-circle-outline",
			url: "/playlists"
		},
		playlists: [
			{
				id: 1,
				nom: "DJ Abdel Megamix"
			}
		]
	};
	getUserData() {
		fetch('http://localhost:8080/utilisateur', {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": `${localStorage.getItem("token")}`
			}
		})
			.then(response => response.json())
			.then(utilisateur => {
				this.setState({ utilisateur });
				console.log(utilisateur);
			})
			.catch(err => console.log(err))
	};
	componentDidMount() {
		this.getUserData();
	}

	render() {
		return (
			<Router>
				<Container>
					<Sidebar items={this.state.items} playlistsLabel={this.state.playlistsLabel} playlists={this.state.playlists}></Sidebar>
					<div style={{ width: "100%", zIndex: "0" }}>
						<Topbar firstname={this.state.utilisateur.pseudo} profilePic={this.state.utilisateur.avatar} admin={this.state.utilisateur.admin}></Topbar>
						<div style={{ background: "linear-gradient(180deg, rgba(244, 249, 255, 0.01) 0%, #F4F9FF 50.23%)", height: "100%", marginTop: "100px" }}>
							<Switch>
								<Route exact path="/" component={HomePage} />
								<Route exact path="/albums" component={AlbumsPage} />
								<Route exact path="/artists" component={ArtistsPage} />
								<Route exact path="/favorites" component={FavoritesPage} />
								<Route exact path="/albums/:id" component={AlbumPage} />
								<Route exact path="/artists/:id" component={ArtistPage} />
								<Route exact path="/playlists/" component={PlaylistsPage} />
								<Route exact path="/playlists/:id" component={PlaylistPage} />
								<Route exact path="/manage/songs" component={ManageSongsPage} />
								<Route exact path="/manage/albums" component={ManageAlbumsPage} />
								<Route exact path="/manage/artists" component={ManageArtistsPage} />
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

export default App;

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;