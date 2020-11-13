import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import ModalForm from "../Modals/Modal";

class TitreTable extends Component {
  deleteTitre = (id) => {
    let confirmDelete = window.confirm("Delete titre forever?");
    if (confirmDelete) {
      fetch("http://localhost:8080/titre", {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      })
        .then((response) => response.json())
        .then((titre) => {
          this.props.deleteTitreFromState(id);
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    const titres = this.props.titres.map((titre) => {
      return (
        <tr key={titre.id}>
          <th scope="row">{titre.id}</th>
          <td>{titre.nom}</td>
          <td>{titre.duree}</td>
          <td>{titre.artistes}</td>
          <td>
            <ul>
              {titre.artistes.map((artist) => {
                return <li>{artist}</li>;
              })}
            </ul>
          </td>
          <td>{titre.album}</td>
          <td>
            <div style={{ width: "110px" }}>
              <ModalForm
                buttonLabel="Edit"
                titre={titre}
                updateState={this.props.updateState}
              />{" "}
              <Button color="danger" onClick={() => this.deleteTitre(titre.id)}>
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
        <tbody>{titres}</tbody>
      </Table>
    );
  }
}

export default TitreTable;
