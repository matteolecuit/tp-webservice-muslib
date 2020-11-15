import React, {Component} from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import StyledTrack from '../../components/Commons/Track';

class AlbumsPage extends Component {

	state = {
		playlist: {
			title: "Big Ali Best Of",
			artist: "John Bovi",
			cover: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Big_Ali_2011.jpg",
			description: "La meilleure playlist pour s'ambiancer sur du son bien lourd",
			songs: [
				{
					title: "Wati Big Ali",
					artist: "Big Ali",
					length: "300"
				},
				{
					title: "La lambada",
					artist: "Kaoma",
					length: "300"
				},
				{
					title: "Bad Guy",
					artist: "Billie Eilish",
					length: "300"
				},
				{
					title: "Mr Brightside",
					artist: "The Killers",
					length: "300"
				},
				{
					title: "Stairway to Heaven",
					artist: "Led Zeppelin",
					length: "300"
				},
				{
					title: "Bohemian Rhapsody",
					artist: "Queen",
					length: "300"
				},
				{
					title: "The man who sold the world",
					artist: "Nirvana",
					length: "300"
				},
				{
					title: "Wati House",
					artist: "Sexion d'assaut",
					length: "300"
				},
				
			]
		}
	};
	
	// List Tracks
	tracks = this.state.playlist.songs.map((item, index) =>
		<StyledTrack trackNumber={index + 1} title={item.title} artist={item.artist} length={item.length}></StyledTrack>
	);
	
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<img src={this.state.playlist.cover} alt="Album Cover" style={{filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25))", maxWidth: "300px", maxHeight: "300px"}}/>
					</Col>
					<Col>
						<h2 style={{margin: "20px 0", fontWeight: "900", fontSize: "3rem"}}>{this.state.playlist.title}</h2>
						<h3 style={{margin: "20px 0", color: "0F1E36", opacity: "50%"}}>{this.state.playlist.artist}</h3>
						<p style={{color: "0F1E36", opacity: "50%"}}>{this.state.playlist.description}</p>
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
