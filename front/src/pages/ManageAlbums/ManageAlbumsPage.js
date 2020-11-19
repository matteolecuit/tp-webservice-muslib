import React, { Component } from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import StyledTrack from '../../components/Commons/Track';

class ManageAlbumsPage extends Component {

	state = {
		album: {
			titre: "The Slow Rush",
			artiste: "Tame Impala",
			imageUrl: "https://e-cdns-images.dzcdn.net/images/cover/d8eb61bd4becf79a602a75b69eebde7d/264x264-000000-80-0-0.jpg",
			description: "The Slow Rush est le quatrième album studio du projet musical australien Tame Impala, sorti en 2020. Tout comme les albums précédents, il est écrit, enregistré, interprété et produit par Kevin Parker.",
			titres: [
				{
					nom: "One More Year",
					duree: "300"
				},
				{
					nom: "One More Year",
					duree: "300"
				},
			]
		},
		albums: []
	};

	getAlbums() {
		fetch('http://localhost:8080/album/')
			.then(response => response.json())
			.then(albums => {
				this.setState({ albums });
				console.log(albums);
			})
			.catch(err => console.log(err))
	};

	componentDidMount() {
		this.getAlbums();
	}

	render() {
		let tracks = [];
		if (this.state.albums) {
			tracks = this.state.albums.map((item, index) =>
				<StyledTrack trackNumber={index + 1} title={item.nom} artist={item.artiste} length={item.duree}></StyledTrack>
			);
		}

		return (
			<Container>
				<Row>
					<Col>
						<ul style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", padding: "0", margin: "20px 0", flexWrap: "wrap" }}>
							{tracks}
						</ul>
					</Col>
				</Row>
			</Container>
		);
	};
}

export default ManageAlbumsPage

