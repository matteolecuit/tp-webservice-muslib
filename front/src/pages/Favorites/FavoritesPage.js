import React, {Component} from "react";
import styled from "styled-components";
import { Container, Row, Col } from 'reactstrap'
import Icon from 'react-eva-icons';
import StyledArtistCard from '../../components/Commons/ArtistCard';
import StyledCard from '../../components/Commons/Card';

class FavoritesPage extends Component {

	state = {
		artists: [
			{
				name: "Soso maness",
				img: "https://e-cdn-images.dzcdn.net/images/artist/3400cc35862cc7b6ba9ab5380c0efa95/264x264-000000-80-0-0.jpg",
				url: "/artists/1"
			},
			{
				name: "Pink Floyd",
				img: "https://e-cdn-images.dzcdn.net/images/artist/32f4286d3082999df24439308e2d7669/264x264-000000-80-0-0.jpg",
				url: "/artists/1"
			},
			{
				name: "Shaggy",
				img: "https://e-cdn-images.dzcdn.net/images/artist/261eb7fa5d697e73bc0262b0ce0d9e41/264x264-000000-80-0-0.jpg",
				url: "/artists/1"
			},
			{
				name: "Gorillaz",
				img: "https://e-cdn-images.dzcdn.net/images/artist/0d028aa34d7bf7980adf1bbf6e53ca22/264x264-000000-80-0-0.jpg",
				url: "/artists/1"
			},
			{
				name: "Xavier Lagaf",
				img: "https://e-cdn-images.dzcdn.net/images/artist/49c869be7d139fa7a9424c972d0353b7/264x264-000000-80-0-0.jpg",
				url: "/artists/1"
			},
			{
				name: "Jul",
				img: "https://e-cdn-images.dzcdn.net/images/artist/4ad5a1a6eebec66da3db5796d947be01/264x264-000000-80-0-0.jpg",
				url: "/artists/1"
			}
		],
		albums: [
			{
				name: "La Machine Jul",
				artist: "Jul",
				img: "https://e-cdns-images.dzcdn.net/images/cover/c11689c8ecc5d4030b31a7bccfa0c910/264x264-000000-80-0-0.jpg",
				url: "/albums/1"
			},
			{
				name: "The Slow Rush",
				artist: "Tame Impala",
				img: "https://e-cdns-images.dzcdn.net/images/cover/d8eb61bd4becf79a602a75b69eebde7d/264x264-000000-80-0-0.jpg",
				url: "/albums/1"
			},
			{
				name: "Song Machine Season 1",
				artist: "Gorillaz",
				img: "https://e-cdns-images.dzcdn.net/images/playlist/4f23dfad4433da7407a0c246ed63e708/264x264-000000-80-0-0.jpg",
				url: "/albums/1"
			},
			{
				name: "Rumours",
				artist: "Fleetwood Mac",
				img: "https://e-cdns-images.dzcdn.net/images/cover/9732751ce91d786dcf30069853697078/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Nevermind",
				artist: "Nirvana",
				img: "https://e-cdns-images.dzcdn.net/images/cover/f0282817b697279e56df13909962a54a/264x264-000000-80-0-0.jpg",
				url: "/albums/1"
			},
			{
				name: "The Velvet Underground",
				artist: "The Velvet Underground",
				img: "https://e-cdns-images.dzcdn.net/images/cover/5722e04a2ba2539c02ac2afb655a4f93/264x264-000000-80-0-0.jpg",
				url: "/albums/1"
			},
		],
		songsImg: "https://e-cdns-images.dzcdn.net/images/playlist/510b6a39695df5bf96a650394790f2bb/264x264-000000-80-0-0.jpg",
		songsUrl: "/playlists/1"
	};

	// List Artists
	artists = this.state.artists.map((item) =>
		<StyledArtistCard imgUrl={item.img} titre={item.name} link={item.url}></StyledArtistCard>
	);

	// List Albums
	albums = this.state.albums.map((item) =>
		<StyledCard imgUrl={item.img} titre={item.name} link={item.url} artiste={item.artist}></StyledCard>
	);


	render() {
		return (
			<Container className="App">
				<Row>
					<Col>
						<h2 style={{margin: "20px 0"}}>Liked Songs</h2>
						<StyledCard imgUrl={this.state.songsImg} link={this.state.songsUrl}></StyledCard>
					</Col>
				</Row>
				<Row>
					<Col>
						<h2 style={{margin: "20px 0"}}>Liked Artists</h2>
						<ul style={{display: "flex", justifyContent: "flex-start", padding: "0", overflowX: "scroll"}}>
							{this.artists}
						</ul>
					</Col>
				</Row>
				<Row>
					<Col>
						<h2 style={{margin: "20px 0"}}>Liked Albums</h2>
						<ul style={{display: "flex", justifyContent: "flex-start", padding: "0", overflowX: "scroll"}}>
							{this.albums}
						</ul>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default FavoritesPage;
