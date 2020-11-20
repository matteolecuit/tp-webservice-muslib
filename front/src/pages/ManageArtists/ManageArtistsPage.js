import React, { Component } from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import StyledAdminTrack from '../../components/Commons/AdminTrack';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

class ManageArtistsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			artists: [],
			addArtist: {
				alias: "",
				imageUrl: ""
			}
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}
	

	getArtists() {
		fetch('http://localhost:8080/artiste', {
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

	deleteItem(id) {
		fetch('http://localhost:8080/artiste?artisteId=' + id, {
			method: 'DELETE',
			headers: {
				"Authorization": `${localStorage.getItem("token")}`
			}
		})
		.then(response => response.json())
		.then(data => {
			this.componentDidMount();
		})
		.catch(err => console.log(err))
	}

	editItem(id) {
		fetch('http://localhost:8080/artiste/' + id, {
			headers: {
				"Authorization": `${localStorage.getItem("token")}`
			}
		})
		.then(response => response.json())
		.then(data => {
			let idInput = document.getElementsByName("track-id")[0];
			idInput.value = data.id;

			let titleInput = document.getElementsByName("track-title")[0];
			titleInput.value = data.alias

			let imageInput = document.getElementsByName("track-image")[0];
			imageInput.value = data.imageUrl;
		})
		.catch(err => console.log(err))
	}

	componentDidMount() {
		this.getArtists();
	}

	handleChange(event) {
		switch (event.target.name) {
			case ("track-title"):
				this.state.addArtist.alias = event.target.value;
				break;

			case ("track-image"):
				this.state.addArtist.imageUrl = event.target.value;
				break;
		}
	}
	
	handleSubmit(event) {
		let idInput = document.getElementsByName("track-id")[0];
		let titleInput = document.getElementsByName("track-title")[0];
		let imageInput = document.getElementsByName("track-image")[0];
		event.preventDefault();
		if (idInput.value.length > 0) {
			fetch('http://localhost:8080/artiste/' + idInput.value, {
				method: 'put',
				headers: {
					'Content-Type': 'application/json',
					"Authorization": `${localStorage.getItem("token")}`
				},
				body: JSON.stringify({
					alias: titleInput.value,
					imageUrl: imageInput.value
				})
			})
			.then(response => response.json())
			.then(data => {
				idInput.value = "";
				titleInput.value = "";
				imageInput.value = "";
				this.componentDidMount();
			})
			.catch(err => console.log(err))
		} else {
			fetch('http://localhost:8080/artiste', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					"Authorization": `${localStorage.getItem("token")}`
				},
				body: JSON.stringify({
					alias: this.state.addArtist.alias,
					imageUrl: this.state.addArtist.imageUrl
				})
			})
			.then(response => response.json())
			.then(data => {
				idInput.value = "";
				titleInput.value = "";
				imageInput.value = "";
				this.componentDidMount();
			})
			.catch(err => console.log(err))
		}
	}

	render() {
		let artists = [];
		if (this.state.artists) {
			artists = this.state.artists.map((item, index) =>
				<StyledAdminTrack trackNumber={item.id} title={item.alias} image={item.imageUrl} editItem={this.editItem} deleteItem={this.deleteItem}></StyledAdminTrack>
			);
		}

		return (
			<Container>
				<Row>
					<Col>
						<div style={{ display: "flex" }}>
							<Link to="/manage/albums"><button style={{ backgroundColor: "#FFF", border: "solid 1px #000", borderRadius: "5px", marginRight: "10px" }}>Albums</button></Link>
							<Link to="/manage/songs"><button style={{ backgroundColor: "#FFF", border: "solid 1px #000", borderRadius: "5px", marginRight: "10px" }}>Titres</button></Link>
						</div>
						<h2 style={{ margin: "20px 0" }}>Artists</h2>
						<ul style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", padding: "0", margin: "20px 0", flexWrap: "wrap" }}>
							{artists}
						</ul>
						<form onSubmit={this.handleSubmit} style={{ display: "flex" }}>
							<input type="int" name="track-id" disabled style={{ display: "none" }} onChange={this.handleChange} />
							<input type="text" name="track-title" placeholder="Nom" style={{ flex: 5 }} onChange={this.handleChange} />
							<input type="text" name="track-image" placeholder="Image" style={{ flex: 5 }} onChange={this.handleChange} />
							<input type="submit" value="Envoyer" />
						</form>
					</Col>
				</Row>
			</Container>
		);
	};
}

export default ManageArtistsPage

