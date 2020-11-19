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
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'

class App extends Component {

	state = {
		user: {
			firstname: "John",
			lastname: "Bovi",
			profilePic: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/50496073_372353200233680_4618796985325977600_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=_uc12sulTCkAX-_QX8z&_nc_ht=scontent-cdt1-1.xx&oh=9f4ec88556fd1165347daeed0b3099ca&oe=5FD49437"
		},
		sidebar: {
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
					label: "Liked Songs",
					icon: "folder-outline",
					url: "/playlists/1"
				},
				{
					label: "Best Of Big Ali",
					icon: "folder-outline",
					url: "/playlists/1"
				},
				{
					label: "Fiesta",
					icon: "folder-outline",
					url: "/playlists/1"
				},
				{
					label: "Motivation",
					icon: "folder-outline",
					url: "/playlists/1"
				},
			]
		}
	};

	render() {
		const store = createStore(rootReducer, applyMiddleware(thunk))
		return (
			<Provider store={store}>
				<Router>
					<Container>
						<Sidebar items={this.state.sidebar.items} playlistsLabel={this.state.sidebar.playlistsLabel} playlists={this.state.sidebar.playlists}></Sidebar>
						<div style={{ width: "100%", zIndex: "0" }}>
							<Topbar firstname={this.state.user.firstname} lastname={this.state.user.lastname} profilePic={this.state.user.profilePic}></Topbar>
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
								</Switch>
							</div>
						</div>
						<script>
							eva.replace();
				</script>
					</Container>
				</Router>
			</Provider>
		)
	}
}

export default App

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;