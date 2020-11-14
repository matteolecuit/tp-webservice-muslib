import React, { Component } from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import ModalForm from '../../components/Modals/Modal'
import StyledBanner from '../../components/Commons/Banner';
import TitreModalForm from '../../components/Modals/AddTitreModal'
import TitreTable from '../../components/Tables/TitreTable'
import LoginForm from '../../components/Login/Login'
import { CSVLink } from "react-csv"

class HomePage extends Component {
	state = {
		items: [],
		titres: []
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

	render() {
		return (
			<Container className="App">
				<Row>
					<StyledBanner></StyledBanner>
				</Row>
				<Row>
					<Col>
						<h1 style={{ margin: "20px 0" }}>CRUD Database</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						<TitreTable titres={this.state.titres} updateState={this.updateState} deleteTitreFromState={this.deleteTitreFromState} />
					</Col>
				</Row>
				<Row>
					<Col>
						<CSVLink
						filename={"db.csv"}
						color="primary"
						style={{ float: "left", marginRight: "10px" }}
						className="btn btn-primary"
						data={this.state.titres}>
						Download CSV
						</CSVLink>
						<TitreModalForm buttonLabel="Add Titre" addTitreToState={this.addTitreToState} />
					</Col>
				</Row>
			</Container>
		)
	}
}

export default HomePage;




