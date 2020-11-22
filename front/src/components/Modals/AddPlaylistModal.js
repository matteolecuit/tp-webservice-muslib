import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import FormAddPlaylist from "../Forms/FormAddPlaylist";
import Icon from "react-eva-icons";

class AddPlaylistModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );

    return (
      <div>
        <span onClick={this.toggle}>
          <Icon
            name="plus-circle-outline"
            size="large"
            fill="#000000"
            animation={{ type: "pulse", hover: true, infinite: false }}
          />
        </span>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            Create a playlist
          </ModalHeader>
          <ModalBody>
            <FormAddPlaylist
              item={this.props.item}
              toggle={this.props.toggle}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AddPlaylistModalForm;
