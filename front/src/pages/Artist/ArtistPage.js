import React, { Component } from "react";
import { Container, Row } from 'reactstrap'
import StyleCard from '../../components/Commons/Card';
import StyledArtistBanner from '../../components/Commons/ArtistBanner'


class ArtistPage extends Component {
	id = this.props.match.params.id
	state = {
		artist: {
		}
	};

	getArtist() {
		fetch('http://localhost:8080/artiste/' + this.id, {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": `${localStorage.getItem("token")}`
			}
		})
			.then(res => res.json())
			.then(artist => {
				this.setState({ artist })
			})
			.catch(console.log)
	}

	setFavoris(id) {
		fetch("http://localhost:8080/utilisateur/favoris/artiste?artisteId=" + id, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `${localStorage.getItem("token")}`,
			},
		})
			.then((response) => response.json())
			.then(() => {

			})
			.catch((err) => console.log(err));
	}

	componentDidMount() {
		this.getArtist()
	}

	render() {
		let albums = [];
		if (this.state.artist.albums) {
			albums = this.state.artist.albums.map((item) =>
				<StyleCard imgUrl={item.imageUrl} titre={item.nom} link={"/albums/" + item.id}></StyleCard>
			);
		}

		return (
			<Container>
				<Row>
					<StyledArtistBanner bannerImg={this.state.artist.imageUrl} img={this.state.artist.imageUrl} name={this.state.artist.alias} albumsCount={albums.length} id={this.state.artist.id}></StyledArtistBanner>
					<h2 style={{margin: "20px 0", width: "100%", textAlign: "left"}}>Albums</h2>
					<ul style={{ display: "flex", justifyContent: "flex-start", padding: "0", flexWrap: "wrap" }}>
						{albums}
					</ul>
				</Row>
			</Container>
		);
	};
}

export default ArtistPage
