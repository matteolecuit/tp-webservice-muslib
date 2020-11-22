import React, {Component} from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import StyledArtistCard from '../../components/Commons/ArtistCard';


class ArtistsPage extends Component {

	state = {
		artists: []
	};

	getArtists() {
		fetch('http://localhost:8080/artiste/', {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": `${localStorage.getItem("token")}`
			}
		})
			.then(response => response.json())
			.then(artists => {
				console.log(artists);
				this.setState({ artists });
			})
			.catch(err => console.log(err))
	};

	componentDidMount() {
		this.getArtists();
	}
	
	render() {
		const artists = this.state.artists.map((item) =>
			<StyledArtistCard imgUrl={item.imageUrl} titre={item.alias} link={'/artists/' + item.id}></StyledArtistCard>
		);

		return (
			<Container>
				<Row>
					<Col>
						<h2 style={{margin: "20px 0", width: "100%", textAlign: "left"}}>Featured Artists</h2>
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
