import React, {Component} from "react";
import { Container, Row } from 'reactstrap'
import StyleCard from '../../components/Commons/Card';
import StyledArtistBanner from '../../components/Commons/ArtistBanner'


class ArtistsPage extends Component {
	id = this.props.match.params.id
	state = {
		artist: {
		}
	};
	
	getArtist() {
		fetch('http://localhost:8080/artiste/' + this.id)
			.then(res => res.json())
			.then(artist => {
				this.setState({artist})
			})
			.catch(console.log)
	}

	componentDidMount() {
		this.getArtist()
	}

	render() {
		let albums = [];
		if(this.state.artist.albums){
			albums = this.state.artist.albums.map((item) =>
			<StyleCard imgUrl={item.imageUrl} titre={item.nom} link={"/album/" + item.id}></StyleCard>
			);
		}
		
		return (
			<Container>
				<Row>
					<StyledArtistBanner bannerImg={this.state.artist.imageUrl} img={this.state.artist.imageUrl} name={this.state.artist.alias} albumsCount={albums.length}></StyledArtistBanner>
					<h2 style={{margin: "20px 0"}}>Albums</h2>
					<ul style={{display: "flex", justifyContent: "flex-start", padding: "0", flexWrap: "wrap"}}>
						{albums}
					</ul>
				</Row>
			</Container>
		);
	};
}

export default ArtistsPage
