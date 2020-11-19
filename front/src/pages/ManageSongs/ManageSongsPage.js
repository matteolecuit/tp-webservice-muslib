import React, { Component } from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import StyledTrack from '../../components/Commons/Track';

class ManageSongsPage extends Component {

	state = {
		titres: []
	};

	getTitres() {
		fetch('http://localhost:8080/titre/', {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": `${localStorage.getItem("token")}`
			}
		})
			.then(response => response.json())
			.then(titres => {
				this.setState({ titres });
			})
			.catch(err => console.log(err))
	};

	componentDidMount() {
		this.getTitres();
	}

	render() {
		let tracks = [];
		if (this.state.titres) {
			tracks = this.state.titres.map((item, index) =>
				<StyledTrack trackNumber={index + 1} title={item.nom} artist={item.artiste} length={item.duree}></StyledTrack>
			);
		}

		return (
			<Container>
				<Row>
					<Col>
						<h2 style={{margin: "20px 0"}}>Songs</h2>
						<ul style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", padding: "0", margin: "20px 0", flexWrap: "wrap" }}>
							{tracks}
						</ul>
					</Col>
				</Row>
			</Container>
		);
	};
}

export default ManageSongsPage

