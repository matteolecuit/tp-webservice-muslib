import React, {Component} from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import StyledArtistCard from '../../components/Commons/ArtistCard';


class ArtistsPage extends Component {

	state = {
		artists: [
			{
				name: "Soso maness",
				img: "https://e-cdn-images.dzcdn.net/images/artist/3400cc35862cc7b6ba9ab5380c0efa95/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Pink Floyd",
				img: "https://e-cdn-images.dzcdn.net/images/artist/32f4286d3082999df24439308e2d7669/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Shaggy",
				img: "https://e-cdn-images.dzcdn.net/images/artist/261eb7fa5d697e73bc0262b0ce0d9e41/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Gorillaz",
				img: "https://e-cdn-images.dzcdn.net/images/artist/0d028aa34d7bf7980adf1bbf6e53ca22/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Xavier Lagaf",
				img: "https://e-cdn-images.dzcdn.net/images/artist/49c869be7d139fa7a9424c972d0353b7/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Jul",
				img: "https://e-cdn-images.dzcdn.net/images/artist/4ad5a1a6eebec66da3db5796d947be01/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Soso maness",
				img: "https://e-cdn-images.dzcdn.net/images/artist/3400cc35862cc7b6ba9ab5380c0efa95/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Pink Floyd",
				img: "https://e-cdn-images.dzcdn.net/images/artist/32f4286d3082999df24439308e2d7669/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Shaggy",
				img: "https://e-cdn-images.dzcdn.net/images/artist/261eb7fa5d697e73bc0262b0ce0d9e41/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Gorillaz",
				img: "https://e-cdn-images.dzcdn.net/images/artist/0d028aa34d7bf7980adf1bbf6e53ca22/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Xavier Lagaf",
				img: "https://e-cdn-images.dzcdn.net/images/artist/49c869be7d139fa7a9424c972d0353b7/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Jul",
				img: "https://e-cdn-images.dzcdn.net/images/artist/4ad5a1a6eebec66da3db5796d947be01/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Soso maness",
				img: "https://e-cdn-images.dzcdn.net/images/artist/3400cc35862cc7b6ba9ab5380c0efa95/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Pink Floyd",
				img: "https://e-cdn-images.dzcdn.net/images/artist/32f4286d3082999df24439308e2d7669/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Shaggy",
				img: "https://e-cdn-images.dzcdn.net/images/artist/261eb7fa5d697e73bc0262b0ce0d9e41/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Gorillaz",
				img: "https://e-cdn-images.dzcdn.net/images/artist/0d028aa34d7bf7980adf1bbf6e53ca22/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Xavier Lagaf",
				img: "https://e-cdn-images.dzcdn.net/images/artist/49c869be7d139fa7a9424c972d0353b7/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Jul",
				img: "https://e-cdn-images.dzcdn.net/images/artist/4ad5a1a6eebec66da3db5796d947be01/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Soso maness",
				img: "https://e-cdn-images.dzcdn.net/images/artist/3400cc35862cc7b6ba9ab5380c0efa95/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Pink Floyd",
				img: "https://e-cdn-images.dzcdn.net/images/artist/32f4286d3082999df24439308e2d7669/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Shaggy",
				img: "https://e-cdn-images.dzcdn.net/images/artist/261eb7fa5d697e73bc0262b0ce0d9e41/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Gorillaz",
				img: "https://e-cdn-images.dzcdn.net/images/artist/0d028aa34d7bf7980adf1bbf6e53ca22/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Xavier Lagaf",
				img: "https://e-cdn-images.dzcdn.net/images/artist/49c869be7d139fa7a9424c972d0353b7/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Jul",
				img: "https://e-cdn-images.dzcdn.net/images/artist/4ad5a1a6eebec66da3db5796d947be01/264x264-000000-80-0-0.jpg",
				url: "#"
			}
		],
	};
	
	// List Albums
	artists = this.state.artists.map((item) =>
		<StyledArtistCard imgUrl={item.img} titre={item.name} link={item.url}></StyledArtistCard>
	);
	
	render() {
		return (
			<Container>
				<Row>
					<h2 style={{margin: "20px 0"}}>Featured Artists</h2>
					<ul style={{display: "flex", justifyContent: "flex-start", padding: "0", flexWrap: "wrap"}}>
						{this.artists}
					</ul>
				</Row>
			</Container>
		);
	};
}

export default ArtistsPage
