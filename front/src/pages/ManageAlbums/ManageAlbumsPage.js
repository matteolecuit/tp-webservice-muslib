import React, { Component } from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import StyledAdminTrack from '../../components/Commons/AdminTrack';

class ManageAlbumsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			albums: [],
			addAlbum: {
				date_publication: "",
				nom: "",
				imageUrl: "",
				artiste: {
					id: ""
				}
			}
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	getArtistes() {
		fetch('http://localhost:8080/artiste/', {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": `${localStorage.getItem("token")}`
			}
		})
			.then(response => response.json())
			.then(artists => {
				this.setState({ artists });
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
		this.getAlbums();
		this.getArtistes();
	}

	handleChange(event) {
		switch (event.target.name) {
			case ("track-title"):
				this.state.addAlbum.nom = event.target.value;
				break;

			case ("track-album"):
				this.state.addAlbum.artiste.id = event.target.value;
				break;

			case ("track-image"):
				this.state.addAlbum.imageUrl = event.target.value;
				break;
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		fetch('http://localhost:8080/album', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				"Authorization": `${localStorage.getItem("token")}`
			},
			body: JSON.stringify({
				date_publication: this.state.addAlbum.date_publication,
				nom: this.state.addAlbum.nom,
				imageUrl: this.state.addAlbum.imageUrl,
				artiste: {
					id: this.state.addAlbum.artiste.id
				}
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
		if (this.state.albums) {
			tracks = this.state.albums.map((item, index) =>
				<StyledAdminTrack trackNumber={index + 1} title={item.nom} artist={item.artiste} image={item.imageUrl} length={item.duree}></StyledAdminTrack>
			);
		}

		let artists = [];
		if (this.state.artists) {
			artists = this.state.artists.map((item, index) =>
				<option value={item.id}>{item.alias}</option>
			);
		}

		return (
			<Container>
				<Row>
					<Col>
						<ul style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", padding: "0", margin: "20px 0", flexWrap: "wrap" }}>
							{tracks}
						</ul>
						<form onSubmit={this.handleSubmit} style={{ display: "flex" }}>
							<input type="text" name="track-title" placeholder="Title" style={{ flex: 5 }} onChange={this.handleChange} />
							<select name="track-album" placeholder="Album" style={{ flex: 5 }} onChange={this.handleChange}>
								{artists}
							</select>
							<input type="text" name="track-image" placeholder="Image" style={{ flex: 5 }} onChange={this.handleChange} />
							<input type="submit" value="Envoyer" />
						</form>
					</Col>
				</Row>
			</Container>
		);
	};
}

export default ManageAlbumsPage

