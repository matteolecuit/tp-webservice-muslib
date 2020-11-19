import React, { Component } from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import StyledAdminTrack from '../../components/Commons/AdminTrack';

class ManageSongsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			titres: [],
			addSong: {
				titre: "",
				artiste: "",
				duree: ""
			}
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

	componentDidMount() {
		this.getTitres();
	}

	handleChange(event) {
		switch (event.target.name) {
			case ("track-title"):
				this.state.addSong.titre = event.target.value;
				console.log(this.state.addSong.titre);
				break;

			case ("track-album"):
				this.state.addSong.album = event.target.value;
				console.log(this.state.addSong.album);
				break;

			case ("track-length"):
				this.state.addSong.duree = event.target.value;
				console.log(this.state.addSong.duree);
				break;

		}
	}

	handleSubmit(event) {
		event.preventDefault();
		fetch('http://localhost:8080/titre', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				titre: this.state.addSong.titre,
				album: this.state.addSong.album,
				duree: this.state.addSong.duree
			})
		})
		.then(response => response.json())
		.then(data => {
			console.log(data);
		})
		.catch(err => console.log(err))
	}

	render() {
		let tracks = [];
		if (this.state.titres) {
			tracks = this.state.titres.map((item, index) =>
				<StyledAdminTrack trackNumber={index + 1} title={item.nom} artist={item.artiste} length={item.duree}></StyledAdminTrack>
			);
		}

		return (
			<Container>
				<Row>
					<Col>
						<h2 style={{ margin: "20px 0" }}>Songs</h2>
						<ul style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", padding: "0", margin: "20px 0", flexWrap: "wrap" }}>
							{tracks}
						</ul>
						<form onSubmit={this.handleSubmit} style={{ display: "flex" }}>
							<input type="text" disabled style={{ flex: 1, maxWidth: "25px" }}></input>
							<input type="text" name="track-title" placeholder="Title" style={{ flex: 5 }} onChange={this.handleChange} />
							<input type="text" name="track-album" placeholder="Album" style={{ flex: 5 }} onChange={this.handleChange} />
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

