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
		this.deleteItem = this.deleteItem.bind(this);
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

	editItem(id) {
		fetch('http://localhost:8080/titre/' + id, {
			headers: {
				"Authorization": `${localStorage.getItem("token")}`
			}
		})
		.then(response => response.json())
		.then(data => {
			let idInput = document.getElementsByName("track-id")[0];
			idInput.value = data.id;

			let titleInput = document.getElementsByName("track-title")[0];
			titleInput.value = data.nom

			let albumsInput = document.getElementsByName("track-album")[0];
			albumsInput.value = data.album.id;

			let lengthInput = document.getElementsByName("track-length")[0];
			lengthInput.value = data.duree;
		})
		.catch(err => console.log(err))
	}

	deleteItem(id) {
		fetch('http://localhost:8080/titre?titreId=' + id, {
			method: 'DELETE',
			headers: {
				"Authorization": `${localStorage.getItem("token")}`
			}
		})
		.then(response => response.json())
		.then(data => {
			this.componentDidMount();
		})
		.catch(err => console.log(err))
	}

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
		let idInput = document.getElementsByName("track-id")[0];
		let titleInput = document.getElementsByName("track-title")[0];
		let albumsInput = document.getElementsByName("track-album")[0];
		let lengthInput = document.getElementsByName("track-length")[0];
		event.preventDefault();
		if (idInput.value.length > 0) {
			fetch('http://localhost:8080/titre/' + idInput.value, {
				method: 'put',
				headers: {
					'Content-Type': 'application/json',
					"Authorization": `${localStorage.getItem("token")}`
				},
				body: JSON.stringify({
					nom: titleInput.value,
					album: {
						id: albumsInput.value
					},
					duree: lengthInput.value
				})
			})
			.then(response => response.json())
			.then(data => {
				idInput.value = "";
				titleInput.value = "";
				albumsInput.value = "";
				lengthInput.value = "";
				this.componentDidMount();
			})
			.catch(err => console.log(err))
		} else {
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
				idInput.value = "";
				titleInput.value = "";
				albumsInput.value = "";
				lengthInput.value = "";
				this.componentDidMount();
			})
			.catch(err => console.log(err))
		}
	}

	render() {
		let tracks = [];
		if (this.state.titres) {
			tracks = this.state.titres.map((item, index) =>
				<StyledAdminTrack trackNumber={item.id} title={item.nom} artist={item.album.nom} length={item.duree} editItem={this.editItem} deleteItem={this.deleteItem}></StyledAdminTrack>
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
							<input type="int" name="track-id" disabled style={{ display: "none" }} onChange={this.handleChange} />
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

