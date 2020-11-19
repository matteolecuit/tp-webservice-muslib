import React, { Component } from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import StyledTrack from '../../components/Commons/Track';

class AlbumsPage extends Component {

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
		}
	};
	id = this.props.match.params.id;

	getAlbum() {
		fetch('http://localhost:8080/album/' + this.id)
			.then(response => response.json())
			.then(album => {
				album.artiste = album.artiste.alias;
				this.setState({ album });
				console.log(this.state.album);
			})
			.catch(err => console.log(err))
	};

	componentDidMount() {
		this.getAlbum();
	}

	render() {
		let tracks = [];
		if (this.state.album.titres) {
			tracks = this.state.album.titres.map((item, index) =>
				<StyledTrack trackNumber={index + 1} title={item.nom} length={item.duree}></StyledTrack>
			);
		}

		return (
			<Container>
				<Row>
					<Col>
						<img src={this.state.album.imageUrl} alt="Album Cover" style={{ filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25))", maxWidth: "300px", maxHeight: "300px" }} />
					</Col>
					<Col>
						<h2 style={{ margin: "20px 0", fontWeight: "900", fontSize: "3rem" }}>{this.state.album.nom}</h2>
						<h3 style={{ margin: "20px 0", color: "0F1E36", opacity: "50%" }}>{this.state.album.artiste}</h3>
						<Icon
							name="heart-outline"
							size="large"
							fill="#0F1E36"     // small, medium, large, xlarge
							animation={{
								type: "pulse",  // zoom, pulse, shake, flip
								hover: true,
								infinite: false
							}}
						/>
						<ul style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", padding: "0", margin: "20px 0", flexWrap: "wrap" }}>
							{tracks}
						</ul>
					</Col>
				</Row>
			</Container>
		);
	};
}

export default AlbumsPage

