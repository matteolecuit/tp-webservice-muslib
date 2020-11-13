import React, { Component } from 'react'
import NewReleases from "@material-ui/icons/NewReleases";
import Album from "@material-ui/icons/Album";
import Person from "@material-ui/icons/Person";
import ThumbUpAlt from "@material-ui/icons/ThumbUpAlt";
// import Settings from "@material-ui/icons/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './components/Modals/Modal'
import DataTable from './components/Tables/DataTable'
import { CSVLink } from "react-csv"

function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
}

const navItems = [
  { 
    name: "Discover", 
    label: "Discover", 
    Icon: NewReleases },
  {
    name: "Albums",
    label: "Albums",
    Icon: Album,
  },
  {
    name: "Artists",
    label: "Artists",
    Icon: Person,
  },
  {
    name: "Favourites",
    label: "Favourites",
    Icon: ThumbUpAlt,
  }
];

class App extends Component {
  state = {
    items: []
  }
  
  getItems(){
    fetch('http://localhost:3000/crud')
      .then(response => response.json())
      .then(items => this.setState({items}))
      .catch(err => console.log(err))
  }

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

  componentDidMount(){
    this.getItems()
  }

  render() {
    return (
      // <Container className="App">
      //   <Row>
      //     <Col>
      //       <h1 style={{margin: "20px 0"}}>CRUD Database</h1>
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col>
      //       <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col>
      //       <CSVLink
      //         filename={"db.csv"}
      //         color="primary"
      //         style={{float: "left", marginRight: "10px"}}
      //         className="btn btn-primary"
      //         data={this.state.items}>
      //         Download CSV
      //       </CSVLink>
      //       <ModalForm buttonLabel="Add Item" addItemToState={this.addItemToState}/>
      //     </Col>
      //   </Row>
      // </Container>
      
      <div style={{
		  height: "100vh",
		  width: "200px"
		}}>
        <Sidebar items={navItems}/>
      </div>
    )
  }
}

export default App