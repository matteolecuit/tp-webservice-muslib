import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import ModalForm from "../Modals/Modal";

class AlbumTable extends Component {
  deleteAlbum = (id) => {
    let confirmDelete = window.confirm("Delete album forever?");
    if (confirmDelete) {
      fetch("https://ws-tp-muslib-back.serveurspaul.duckdns.org/album", {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      })
        .then((response) => response.json())
        .then((album) => {
          this.props.deleteAlbumFromState(id);
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    const albums = this.props.albums.map((album) => {
      return (
        <tr key={album.id}>
          <th scope="row">{album.id}</th>
          <td>{album.nom}</td>
          <td>{album.date_publication}</td>
          <img url={album.imageUrl} alt={album.nom} />
          <td>
            <ul>
              {album.artistes.map((artist) => {
                return <li>{artist}</li>;
              })}
            </ul>
          </td>
          <td>
            <div style={{ width: "110px" }}>
              <ModalForm
                buttonLabel="Edit"
                album={album}
                updateState={this.props.updateState}
              />{" "}
              <Button color="danger" onClick={() => this.deleteAlbum(album.id)}>
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
            <th>Publishing date</th>
            <th>Image Url</th>
            <th>Artists</th>
          </tr>
        </thead>
        <tbody>{albums}</tbody>
      </Table>
    );
  }
}

export default AlbumTable;
