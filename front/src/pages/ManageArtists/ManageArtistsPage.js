import React, { Component } from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import StyledAdminTrack from '../../components/Commons/AdminTrack';

class ManageArtistsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			artists: [],
			addArtist: {
				alias: "",
				imageUrl: ""
			}
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	

	getArtists() {
		fetch('http://localhost:8080/artiste', {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": `${localStorage.getItem("token")}`
			}
		})
			.then(response => response.json())
			.then(artists => {
				console.log(artists);
				this.setState({ artists });
			})
			.catch(err => console.log(err))
	};

	componentDidMount() {
		this.getArtists();
	}

	handleChange(event) {
		switch (event.target.name) {
			case ("track-title"):
				this.state.addArtist.alias = event.target.value;
				break;

			case ("track-album"):
				this.state.addArtist.imageUrl = event.target.value;
				break;
		}
	}
	
	handleSubmit(event) {
		event.preventDefault();
		fetch('http://localhost:8080/artiste', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				"Authorization": `${localStorage.getItem("token")}`
			},
			body: JSON.stringify({
				alias: this.state.addArtist.alias,
				imageUrl: this.state.addArtist.imageUrl
			})
		})
		.then(response => response.json())
		.then(data => {
			this.componentDidMount();
		})
		.catch(err => console.log(err))
	}

	render() {
		let artists = [];
		if (this.state.artists) {
			artists = this.state.artists.map((item, index) =>
				<StyledAdminTrack trackNumber={index + 1} title={item.alias} image={item.imageUrl}></StyledAdminTrack>
			);
		}

		return (
			<Container>
				<Row>
					<Col>
						<ul style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", padding: "0", margin: "20px 0", flexWrap: "wrap" }}>
							{artists}
						</ul>
						<form onSubmit={this.handleSubmit} style={{ display: "flex" }}>
							<input type="text" name="track-title" placeholder="Title" style={{ flex: 5 }} onChange={this.handleChange} />
							<input type="text" name="track-album" placeholder="image" style={{ flex: 5 }} onChange={this.handleChange} />
							<input type="submit" value="Envoyer" />
						</form>
					</Col>
				</Row>
			</Container>
		);
	};
}

export default ManageArtistsPage

