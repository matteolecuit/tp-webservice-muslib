import React, {Component} from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import StyledArtistCard from '../../components/Commons/ArtistCard';


class ArtistsPage extends Component {

	state = {
		// artists: [
		// 	{
		// 		name: "Soso maness",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/3400cc35862cc7b6ba9ab5380c0efa95/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Pink Floyd",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/32f4286d3082999df24439308e2d7669/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Shaggy",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/261eb7fa5d697e73bc0262b0ce0d9e41/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Gorillaz",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/0d028aa34d7bf7980adf1bbf6e53ca22/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Xavier Lagaf",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/49c869be7d139fa7a9424c972d0353b7/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Jul",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/4ad5a1a6eebec66da3db5796d947be01/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Soso maness",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/3400cc35862cc7b6ba9ab5380c0efa95/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Pink Floyd",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/32f4286d3082999df24439308e2d7669/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Shaggy",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/261eb7fa5d697e73bc0262b0ce0d9e41/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Gorillaz",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/0d028aa34d7bf7980adf1bbf6e53ca22/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Xavier Lagaf",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/49c869be7d139fa7a9424c972d0353b7/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Jul",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/4ad5a1a6eebec66da3db5796d947be01/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Soso maness",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/3400cc35862cc7b6ba9ab5380c0efa95/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Pink Floyd",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/32f4286d3082999df24439308e2d7669/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Shaggy",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/261eb7fa5d697e73bc0262b0ce0d9e41/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Gorillaz",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/0d028aa34d7bf7980adf1bbf6e53ca22/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Xavier Lagaf",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/49c869be7d139fa7a9424c972d0353b7/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Jul",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/4ad5a1a6eebec66da3db5796d947be01/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Soso maness",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/3400cc35862cc7b6ba9ab5380c0efa95/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Pink Floyd",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/32f4286d3082999df24439308e2d7669/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Shaggy",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/261eb7fa5d697e73bc0262b0ce0d9e41/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Gorillaz",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/0d028aa34d7bf7980adf1bbf6e53ca22/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Xavier Lagaf",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/49c869be7d139fa7a9424c972d0353b7/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Jul",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/4ad5a1a6eebec66da3db5796d947be01/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Soso maness",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/3400cc35862cc7b6ba9ab5380c0efa95/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Pink Floyd",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/32f4286d3082999df24439308e2d7669/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Shaggy",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/261eb7fa5d697e73bc0262b0ce0d9e41/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Gorillaz",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/0d028aa34d7bf7980adf1bbf6e53ca22/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Xavier Lagaf",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/49c869be7d139fa7a9424c972d0353b7/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	},
		// 	{
		// 		name: "Jul",
		// 		img: "https://e-cdn-images.dzcdn.net/images/artist/4ad5a1a6eebec66da3db5796d947be01/264x264-000000-80-0-0.jpg",
		// 		url: "/artists/1"
		// 	}
		// ],
		artists: []
	};

	getArtists() {
		fetch('http://localhost:8080/artiste/')
			.then(response => response.json())
			.then(artists => {
				this.setState({ artists });
			})
			.catch(err => console.log(err))
	};

	componentDidMount() {
		this.getArtists();
	}
	
	// List Albums
	artists = this.state.artists.map((item) =>
		<StyledArtistCard imgUrl={item.img} titre={item.name} link={item.url}></StyledArtistCard>
	);
	
	render() {
		const artists = this.state.artists.map((item) =>
			<StyledArtistCard imgUrl={item.imageUrl} titre={item.alias} link={'/artists/' + item.id}></StyledArtistCard>
		);

		return (
			<Container>
				<Row>
					<Col>
						<h2 style={{margin: "20px 0"}}>Featured Artists</h2>
						<ul style={{display: "flex", justifyContent: "flex-start", padding: "0", flexWrap: "wrap"}}>
							{artists}
						</ul>
					</Col>
				</Row>
			</Container>
		);
	};
}

export default ArtistsPage
