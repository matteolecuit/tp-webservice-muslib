import React, { Component } from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import StyledAdminTrack from '../../components/Commons/AdminTrack';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

class ManageSongsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			titres: [],
			addSong: {
				nom: "",
				artiste: "",
				duree: ""
			},
			albums: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	getTitres() {
		fetch('http://localhost:8080/titre/', {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": `${localStorage.getItem("token")}`
			}
		})
			.then(response => response.json())
			.then(titres => {
				this.setState({ titres });
			})
			.catch(err => console.log(err))
	};

	getAlbums() {
		fetch('http://localhost:8080/album/', {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": `${localStorage.getItem("token")}`
			}
		})
			.then(response => response.json())
			.then(albums => {
				albums.forEach(album => {
					album.artiste = album.artiste.alias
				});
				this.setState({ albums });
			})
			.catch(err => console.log(err))
	};

	componentDidMount() {
		this.getTitres();
		this.getAlbums();
	}

	handleChange(event) {
		switch (event.target.name) {
			case ("track-title"):
				this.state.addSong.nom = event.target.value;
				break;

			case ("track-album"):
				this.state.addSong.album = event.target.value;
				break;

			case ("track-length"):
				this.state.addSong.duree = event.target.value;
				break;

		}
	}
	
	handleSubmit(event) {
		event.preventDefault();
		fetch('http://localhost:8080/titre', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				"Authorization": `${localStorage.getItem("token")}`
			},
			body: JSON.stringify({
				nom: this.state.addSong.nom,
				album: {
					id: this.state.addSong.album
				},
				duree: this.state.addSong.duree
			})
		})
		.then(response => response.json())
		.then(data => {
			this.componentDidMount();
		})
		.catch(err => console.log(err))
	}

	render() {
		let tracks = [];
		if (this.state.titres) {
			tracks = this.state.titres.map((item, index) =>
				<StyledAdminTrack trackNumber={index + 1} title={item.nom} artist={item.album.nom} length={item.duree}></StyledAdminTrack>
			);
		}

		let albums = [];
		if (this.state.albums) {
			albums = this.state.albums.map((item, index) =>
				<option value={item.id}>{item.nom}</option>
			);
		}

		return (
			<Container>
				<Row>
					<Col>
						<div style={{ display: "flex" }}>
							<Link to="/manage/artists"><button style={{ backgroundColor: "#FFF", border: "solid 1px #000", borderRadius: "5px", marginRight: "10px" }}>Artistes</button></Link>
							<Link to="/manage/albums"><button style={{ backgroundColor: "#FFF", border: "solid 1px #000", borderRadius: "5px", marginRight: "10px" }}>Albums</button></Link>
						</div>
						<h2 style={{ margin: "20px 0" }}>Songs</h2>
						<ul style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", padding: "0", margin: "20px 0", flexWrap: "wrap" }}>
							{tracks}
						</ul>
						<form onSubmit={this.handleSubmit} style={{ display: "flex" }}>
							<input type="text" name="track-title" placeholder="Title" style={{ flex: 5 }} onChange={this.handleChange} />
							<select name="track-album" placeholder="Album" style={{ flex: 5 }} onChange={this.handleChange}>
								{albums}
							</select>
							<input type="text" name="track-length" placeholder="Length" style={{ flex: 3 }} onChange={this.handleChange} />
							<input type="submit" value="Envoyer" />
						</form>
					</Col>
				</Row>
			</Container>
		);
	};
}

export default ManageSongsPage

