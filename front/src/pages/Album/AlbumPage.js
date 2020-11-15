import React, {Component} from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import StyledTrack from '../../components/Commons/Track';

class AlbumsPage extends Component {

	state = {
		album: {
			title: "The Slow Rush",
			artist: "Tame Impala",
			cover: "https://e-cdns-images.dzcdn.net/images/cover/d8eb61bd4becf79a602a75b69eebde7d/264x264-000000-80-0-0.jpg",
			description: "The Slow Rush est le quatrième album studio du projet musical australien Tame Impala, sorti en 2020. Tout comme les albums précédents, il est écrit, enregistré, interprété et produit par Kevin Parker.",
			songs: [
				{
					title: "One More Year",
					length: "300"
				},
				{
					title: "Instant Destiny",
					length: "300"
				},
				{
					title: "Borderline",
					length: "300"
				},
				{
					title: "Posthumous Forgiveness",
					length: "300"
				},
				{
					title: "Breathe Deeper",
					length: "300"
				},
				{
					title: "Tomorrow's Dust",
					length: "300"
				},
				{
					title: "On Track",
					length: "300"
				},
				{
					title: "Lost In Yesterday",
					length: "300"
				},
			]
		}
	};
	
	// List Tracks
	tracks = this.state.album.songs.map((item, index) =>
		<StyledTrack trackNumber={index + 1} title={item.title} length={item.length}></StyledTrack>
	);
	
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<img src={this.state.album.cover} alt="Album Cover" style={{filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25))", maxWidth: "300px", maxHeight: "300px"}}/>
					</Col>
					<Col>
						<h2 style={{margin: "20px 0", fontWeight: "900", fontSize: "3rem"}}>{this.state.album.title}</h2>
						<h3 style={{margin: "20px 0", color: "0F1E36", opacity: "50%"}}>{this.state.album.artist}</h3>
						<p style={{color: "0F1E36", opacity: "50%"}}>{this.state.album.description}</p>
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
						<ul style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", padding: "0", margin: "20px 0", flexWrap: "wrap"}}>
							{this.tracks}
						</ul>
					</Col>
				</Row>
			</Container>
		);
	};
}

export default AlbumsPage

