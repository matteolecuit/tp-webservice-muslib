import React, {Component} from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import StyleCard from '../../components/Commons/Card';
import StyledArtistBanner from '../../components/Commons/ArtistBanner'


class ArtistsPage extends Component {

	state = {
		user: {
			name: "John Bovi",
			img: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/50496073_372353200233680_4618796985325977600_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=_uc12sulTCkAX-_QX8z&_nc_ht=scontent-cdt1-1.xx&oh=9f4ec88556fd1165347daeed0b3099ca&oe=5FD49437",
			bannerImg: "https://s3-eu-west-1.amazonaws.com/images.linnlive.com/fe50132e61c7590af0f3485de98353dd/66bd9ea3-36f7-4ff6-8ae7-69d50cfca420.jpg",
			playlists: [
				{
					name: "Best Of Big Ali",
					img: "https://e-cdns-images.dzcdn.net/images/cover/8f7ff24dbbb77f281bf7f7ae0be72c0c/264x264-000000-80-0-0.jpg",
					url: "/playlists/1"
				},
				{
					name: "Fiesta",
					img: "https://e-cdns-images.dzcdn.net/images/cover/8f7ff24dbbb77f281bf7f7ae0be72c0c/264x264-000000-80-0-0.jpg",
					url: "/playlists/1"
				},
				{
					name: "Motivation",
					img: "https://e-cdns-images.dzcdn.net/images/cover/8f7ff24dbbb77f281bf7f7ae0be72c0c/264x264-000000-80-0-0.jpg",
					url: "/playlists/1"
				},
			]
		}
	};
	
	// List Playlists
	playlists = this.state.user.playlists.map((item) =>
		<StyleCard imgUrl={item.img} titre={item.name} link={item.url}></StyleCard>
	);
	
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<StyledArtistBanner bannerImg={this.state.user.bannerImg} img={this.state.user.img} name={this.state.user.name} albumsCount={this.state.user.playlists.length}></StyledArtistBanner>
						<h2 style={{margin: "20px 0"}}>Playlists</h2>
						<ul style={{display: "flex", justifyContent: "flex-start", padding: "0", flexWrap: "wrap"}}>
							{this.playlists}
						</ul>
					</Col>
				</Row>
			</Container>
		);
	};
}

export default ArtistsPage
