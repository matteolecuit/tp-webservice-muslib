import React, {Component} from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import StyleCard from '../../components/Commons/Card';
import StyledArtistBanner from '../../components/Commons/ArtistBanner'


class ArtistsPage extends Component {

	state = {
		artist: {
			name: "Pink Floyd",
			img: "https://e-cdn-images.dzcdn.net/images/artist/32f4286d3082999df24439308e2d7669/264x264-000000-80-0-0.jpg",
			bannerImg: "https://s3-eu-west-1.amazonaws.com/images.linnlive.com/fe50132e61c7590af0f3485de98353dd/66bd9ea3-36f7-4ff6-8ae7-69d50cfca420.jpg",
			albums: [
				{
					name: "The Wall",
					img: "https://e-cdns-images.dzcdn.net/images/cover/8f7ff24dbbb77f281bf7f7ae0be72c0c/264x264-000000-80-0-0.jpg",
					url: "/albums/1"
				},
				{
					name: "The Wall",
					img: "https://e-cdns-images.dzcdn.net/images/cover/8f7ff24dbbb77f281bf7f7ae0be72c0c/264x264-000000-80-0-0.jpg",
					url: "/albums/1"
				},
				{
					name: "The Wall",
					img: "https://e-cdns-images.dzcdn.net/images/cover/8f7ff24dbbb77f281bf7f7ae0be72c0c/264x264-000000-80-0-0.jpg",
					url: "/albums/1"
				},
				{
					name: "The Wall",
					img: "https://e-cdns-images.dzcdn.net/images/cover/8f7ff24dbbb77f281bf7f7ae0be72c0c/264x264-000000-80-0-0.jpg",
					url: "/albums/1"
				},
				{
					name: "The Wall",
					img: "https://e-cdns-images.dzcdn.net/images/cover/8f7ff24dbbb77f281bf7f7ae0be72c0c/264x264-000000-80-0-0.jpg",
					url: "/albums/1"
				},
				{
					name: "The Wall",
					img: "https://e-cdns-images.dzcdn.net/images/cover/8f7ff24dbbb77f281bf7f7ae0be72c0c/264x264-000000-80-0-0.jpg",
					url: "/albums/1"
				},
				{
					name: "The Wall",
					img: "https://e-cdns-images.dzcdn.net/images/cover/8f7ff24dbbb77f281bf7f7ae0be72c0c/264x264-000000-80-0-0.jpg",
					url: "/album/1"
				},
				{
					name: "The Wall",
					img: "https://e-cdns-images.dzcdn.net/images/cover/8f7ff24dbbb77f281bf7f7ae0be72c0c/264x264-000000-80-0-0.jpg",
					url: "/albums/1"
				},
			]
		}
	};
	
	// List Albums
	albums = this.state.artist.albums.map((item) =>
		<StyleCard imgUrl={item.img} titre={item.name} link={item.url}></StyleCard>
	);
	
	render() {
		return (
			<Container>
				<Row>
					<StyledArtistBanner bannerImg={this.state.artist.bannerImg} img={this.state.artist.img} name={this.state.artist.name} albumsCount={this.state.artist.albums.length}></StyledArtistBanner>
					<h2 style={{margin: "20px 0"}}>Albums</h2>
					<ul style={{display: "flex", justifyContent: "flex-start", padding: "0", flexWrap: "wrap"}}>
						{this.albums}
					</ul>
				</Row>
			</Container>
		);
	};
}

export default ArtistsPage
