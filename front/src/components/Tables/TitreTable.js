import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import ModalForm from "../Modals/Modal";

class TitreTable extends Component {
  deleteItem = (id) => {
    let confirmDelete = window.confirm("Delete item forever?");
    if (confirmDelete) {
      fetch("http://localhost:3000/titre", {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      })
        .then((response) => response.json())
        .then((item) => {
          this.props.deleteItemFromState(id);
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    const items = this.props.items.map((item) => {
      return (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.nom}</td>
          <td>{item.duree}</td>
          <td>{item.artistes}</td>
          <td>
            <ul>
              {item.artistes.map((artist) => {
                return <li>{artist}</li>;
              })}
            </ul>
          </td>
          <td>{item.album}</td>
          <td>
            <div style={{ width: "110px" }}>
              <ModalForm
                buttonLabel="Edit"
                item={item}
                updateState={this.props.updateState}
              />{" "}
              <Button color="danger" onClick={() => this.deleteItem(item.id)}>
                Del
              </Button>
            </div>
          </td>
        </tr>
      );
    });

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Length</th>
            <th>Artists</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </Table>
    );
  }
}

export default DataTable;
