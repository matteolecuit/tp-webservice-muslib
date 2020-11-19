import React, { Component } from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import StyledTrack from '../../components/Commons/Track';

class PlaylistPage extends Component {

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

	id = this.props.match.params.id;

	getPlaylist() {
		fetch('http://localhost:8080/utilisateur/playlist/' + this.id, {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": `${localStorage.getItem("token")}`
			}
		})
			.then(response => response.json())
			.then(playlist => {
				if (playlist.titres.length > 0) {
					playlist.imageUrl = playlist.titres[0].imageUrl;
				}
				this.setState({ playlist });
				console.log(this.state.playlist);
			})
			.catch(err => console.log(err))
	};

	componentDidMount() {
		console.log(this.id);
		this.getPlaylist();
	}
	componentDidUpdate(prevProps, prevState) {
		/**
		* this is the initial render
		* without a previous prop change
		*/
		if (prevProps == undefined) {
			return false
		}

		/**
		 * new Project in town ?
		 */
		if (this.id != this.props.match.params.id) {
			this.id = this.props.match.params.id;
			this.getPlaylist();
		}
	}

	render() {
		let tracks = [];
		if (this.state.playlist.titres) {
			tracks = this.state.playlist.titres.map((item, index) =>
				<StyledTrack trackNumber={index + 1} title={item.nom} length={item.duree}></StyledTrack>
			);
		}

		return (
			<Container>
				<Row>
					<Col>
						<img src={this.state.playlist.imageUrl} alt="Album Cover" style={{ filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25))", maxWidth: "300px", maxHeight: "300px" }} />
					</Col>
					<Col>
						<h2 style={{ margin: "20px 0", fontWeight: "900", fontSize: "3rem" }}>{this.state.playlist.nom}</h2>
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

export default PlaylistPage

