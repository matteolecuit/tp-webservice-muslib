import React, { Component } from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import ModalForm from '../../components/Modals/Modal'
import StyledBanner from '../../components/Commons/Banner';
import StyledArtistCard from '../../components/Commons/ArtistCard';
import StyledCard from '../../components/Commons/Card';

class HomePage extends Component {
	state = {
		artists: [],
		albums: [],
	};

	getAlbums() {
		fetch('http://localhost:8080/album/random?numRand=10', {
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
	getArtists() {
		fetch('http://localhost:8080/artiste/random?numRand=10', {
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
	componentDidMount() {
		this.getArtists();
		this.getAlbums();
	}

	render() {
		let artists = [];
		if (this.state.artists) {
			artists = this.state.artists.map((item) =>
				<StyledArtistCard imgUrl={item.imageUrl} titre={item.alias} link={'/artists/' + item.id}></StyledArtistCard>
			);
		}
		let albums = [];
		if (this.state.albums) {
			albums = this.state.albums.map((item) =>
				<StyledCard imgUrl={item.imageUrl} titre={item.nom} link={'/albums/' + item.id} artiste={item.artiste}></StyledCard>
			);
		}
		return (
			<Container className="App">
				<Row>
					<StyledBanner></StyledBanner>
				</Row>
				<Row>
					<Col>
						{/* <h1 style={{ margin: "20px 0" }}>CRUD Database</h1> */}
					</Col>
				</Row>
				<Row>
					<Col>
						{/* <TitreTable titres={this.state.titres} updateState={this.updateState} deleteTitreFromState={this.deleteTitreFromState} /> */}
					</Col>
				</Row>
				<Row>
					<Col>
						{/* <TitreModalForm buttonLabel="Add Titre" addTitreToState={this.addTitreToState} /> */}
					</Col>
				</Row>
				<Row>
					<Col>
						<h2 style={{ margin: "20px 0" }}>Featured Artists</h2>
						<ul style={{ display: "flex", justifyContent: "flex-start", padding: "0", overflowX: "scroll" }}>
							{artists}
						</ul>
					</Col>
				</Row>
				<Row>
					<Col>
						<h2 style={{ margin: "20px 0" }}>Featured Albums</h2>
						<ul style={{ display: "flex", justifyContent: "flex-start", padding: "0", overflowX: "scroll" }}>
							{albums}
						</ul>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default HomePage;




