import React, { Component } from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Container, Row, Col } from 'reactstrap'
import ModalForm from '../../components/Modals/Modal'
import TitreModalForm from '../../components/Modals/AddTitreModal'
import DataTable from '../../components/Tables/DataTable'
import { CSVLink } from "react-csv"


class HomePage extends Component {


	state = {
		items: []
	};
	
	getItems() {
		fetch('http://localhost:3000/crud')
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
		return(
			<Container>
				<Row>
					<Col>
						<h1 style={{ margin: "20px 0" }}>CRUD Database</h1>
					</Col>
				</Row>
				<Row>
					<Col>
					</Col>
				</Row>
				<Row>
					<Col>
						<ModalForm buttonLabel="Add Item" addItemToState={this.addItemToState} />
						<TitreModalForm buttonLabel="Add Titre" addItemToState={this.addItemToState} />
					</Col>
				</Row>
			</Container>
		)
	}
}

export default HomePage;



