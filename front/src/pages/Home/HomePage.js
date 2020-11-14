import React, { Component } from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import ModalForm from '../../components/Modals/Modal'
import StyledBanner from '../../components/Commons/Banner';
import StyledArtistCard from '../../components/Commons/ArtistCard';
import StyledCard from '../../components/Commons/Card';
import TitreModalForm from '../../components/Modals/AddTitreModal'
import TitreTable from '../../components/Tables/TitreTable'
import LoginForm from '../../components/Login/Login'
import { CSVLink } from "react-csv"

class HomePage extends Component {
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
			}
		],
		albums: [
			{
				name: "La Machine Jul",
				artist: "Jul",
				img: "https://e-cdns-images.dzcdn.net/images/cover/c11689c8ecc5d4030b31a7bccfa0c910/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "The Slow Rush",
				artist: "Tame Impala",
				img: "https://e-cdns-images.dzcdn.net/images/cover/d8eb61bd4becf79a602a75b69eebde7d/264x264-000000-80-0-0.jpg",
				url: "#"
			},
			{
				name: "Song Machine Season 1",
				artist: "Gorillaz",
				img: "https://e-cdns-images.dzcdn.net/images/playlist/4f23dfad4433da7407a0c246ed63e708/264x264-000000-80-0-0.jpg",
				url: "#"
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
				url: "#"
			},
			{
				name: "The Velvet Underground",
				artist: "The Velvet Underground",
				img: "https://e-cdns-images.dzcdn.net/images/cover/5722e04a2ba2539c02ac2afb655a4f93/264x264-000000-80-0-0.jpg",
				url: "#"
			},
		]
	};

	getItems() {
		fetch('http://localhost:8080/titre')
			.then(response => response.json())
			.then(items => this.setState({ items }))
			.catch(err => console.log(err))
	};

	addItemToState = (item) => {
		this.setState(prevState => ({
			items: [...prevState.items, item]
		}))
	}

	updateState = (item) => {
		const itemIndex = this.state.items.findIndex(data => data.id === item.id)
		const newArray = [
			// destructure all items from beginning to the indexed item
			...this.state.items.slice(0, itemIndex),
			// add the updated item to the array
			item,
			// add the rest of the items to the array from the index after the replaced item
			...this.state.items.slice(itemIndex + 1)
		]
		this.setState({ items: newArray })
	}

	deleteItemFromState = (id) => {
		const updatedItems = this.state.items.filter(item => item.id !== id)
		this.setState({ items: updatedItems })
	}

	componentDidMount() {
		this.getItems()
	}

	// List Artists
	artists = this.state.artists.map((item) =>
		<StyledArtistCard imgUrl={item.img} titre={item.name} link={item.url}></StyledArtistCard>
	);

	// List Albums
	albums = this.state.albums.map((item) =>
		<StyledCard imgUrl={item.img} titre={item.name} link={item.url}></StyledCard>
	);

	render() {
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
						<h2 style={{margin: "20px 0"}}>Featured Artists</h2>
						<ul style={{display: "flex", justifyContent: "flex-start", padding: "0", overflowX: "scroll"}}>
							{this.artists}
						</ul>
					</Col>
				</Row>
				<Row>
					<Col>
						<h2 style={{margin: "20px 0"}}>Featured Albums</h2>
						<ul style={{display: "flex", justifyContent: "flex-start", padding: "0", overflowX: "scroll"}}>
							{this.albums}
						</ul>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default HomePage;




