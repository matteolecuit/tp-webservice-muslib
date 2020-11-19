import React, { Component } from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import StyledTrack from '../../components/Commons/Track';

class ManageArtistsPage extends Component {

	state = {
		artists: []
	};

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

	render() {
		let artists = [];
		if (this.state.artists) {
			artists = this.state.artists.map((item, index) =>
				<StyledTrack trackNumber={index + 1} title={item.nom} length={item.duree}></StyledTrack>
			);
		}

		return (
			<Container>
				<Row>
					<Col>
						<ul style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", padding: "0", margin: "20px 0", flexWrap: "wrap" }}>
							{artists}
						</ul>
					</Col>
				</Row>
			</Container>
		);
	};
}

export default ManageArtistsPage

