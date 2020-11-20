import React, { Component } from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

class Sidebar extends Component {
	items = [];
	playlistsLabel = {};
	playlists = [];
	state = {
		playlists: [
		]
	}
	constructor(props) {
		super();
		this.items = props.items;
		this.playlistsLabel = props.playlistsLabel;
		this.playlists = props.playlists;

		// List Items
		this.itemsList = this.items.map((item) =>
			<Link to={item.url}>
				<SidebarItem>
					<Icon
						name={item.icon}
						size="large"
						fill="#000000"     // small, medium, large, xlarge
						animation={{
							type: "pulse",  // zoom, pulse, shake, flip
							hover: true,
							infinite: false
						}}
					/>
					<SidebarItemLabel>{item.label}</SidebarItemLabel>
				</SidebarItem>
			</Link>
		);

		// Print Playlists Label
		if (this.playlistsLabel) {
			this.playlistsLabelShow =
				<Link to={this.playlistsLabel.url}>
					<SidebarPlaylist>
						<SidebarItemLabel>{this.playlistsLabel.label}</SidebarItemLabel>
						<Icon
							name={this.playlistsLabel.icon}
							size="large"
							fill="#000000"     // small, medium, large, xlarge
							animation={{
								type: "pulse",  // zoom, pulse, shake, flip
								hover: true,
								infinite: false
							}}
						/>
					</SidebarPlaylist>
				</Link>
		}

		// Print Playlists


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

	render() {
		this.playlistsList = this.playlists.map((playlist) =>
			<Link to={'/playlists/' + playlist.id}>
				<SidebarItem>
					<Icon
						name="folder-outline"
						size="large"
						fill="#000000"     // small, medium, large, xlarge
						animation={{
							type: "pulse",  // zoom, pulse, shake, flip
							hover: true,
							infinite: false
						}}
					/>
					<SidebarItemLabel>{playlist.nom}</SidebarItemLabel>
				</SidebarItem>
			</Link>
		);

		return (
			<StyledSidebar>
				<SidebarLogo id="logo">
					<Link to="/"><SidebarLogoImg src="https://i.redd.it/fnutbjqyahj21.jpg" /></Link>
					<SidebarLogoTitle>Tongo Music</SidebarLogoTitle>
				</SidebarLogo>

				<div id="navbar">
					<SidebarNav>
						{this.itemsList}
						{this.playlistsLabelShow}
						{this.playlistsList}

					</SidebarNav>
				</div>
			</StyledSidebar>
		);
	};
}

export default Sidebar;

const StyledSidebar = styled.section`
  color: white;
  padding: 20px;
  height: 100vh;
  z-index: 1;
  position: fixed;
  width: 12vw;
  background-color: #FFF;

  a:hover {
	  text-decoration: none;
  }
`;

const SidebarLogo = styled.section`
  display: flex;
  align-items: center;
  margin: 30px 0 60px 0;
`;

const SidebarLogoImg = styled.img`
	margin-right: 20px;
	height: 40px;
  	width: 60px;
`;

const SidebarLogoTitle = styled.h2`
  	color: #0F1D36;
	font-size: 1.2rem;
`;

const SidebarItem = styled.li`
  display: flex;
  color: #0F1D36;
  opacity: 50%;
  list-style-type: none;
  padding: none;
  margin: 20px 0;
  transition: 0.3s;

  &:hover {
	  color: #3E2AD1;
	  opacity: 100%;
	  cursor: pointer;
	  transition: 0.3s;
  }
`;

const SidebarPlaylist = styled.li`
  display: flex;
  color: #0F1D36;
  opacity: 100%;
  list-style-type: none;
  padding: none;
  margin: 20px 0;
  transition: 0.3s;

  &:hover {
	  color: #0F1D36;
	  opacity: 100%;
	  cursor: pointer;
	  transition: 0.3s;
  }
`;


const SidebarItemLabel = styled.span`
  margin: 0 10px;
  font-size: 1.2rem;
  
`;

const SidebarNav = styled.li`
  padding: none;
`;




