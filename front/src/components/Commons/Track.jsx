import React from "react";
import styled from "styled-components";
import Icon from "react-eva-icons";
import { Link } from "react-router-dom";
import AddToPlaylistModalForm from "../Modals/AddToPlaylistModal";
import { Button } from "@material-ui/core";

export default (props) => {
  let icon = null;
  if (props.like == true) {
    icon = <Icon
      name='heart'
      size="large"
      fill="#0F1E36"     // small, medium, large, xlarge
      animation={{
        type: "pulse",  // zoom, pulse, shake, flip
        hover: true,
        infinite: false
      }}
    />
  } else if (props.like == false) {
    icon = <Icon
      name='heart-outline'
      size="large"
      fill="#0F1E36"     // small, medium, large, xlarge
      animation={{
        type: "pulse",  // zoom, pulse, shake, flip
        hover: true,
        infinite: false
      }}
    />
  }
  function getMethod() {
    if (props.like == false) {
      return "post";
    } else if (props.like == true) {
      return "delete";
    }
  }

  return (
    <StyledTrack>
      <div class="track">
        <span class="track-number">{props.trackNumber}</span>
        <AddToPlaylistModalForm id={props.id} />
        <Button onClick={() => setFavoris(props.id, getMethod())}>
          {icon}
        </Button>
        <span class="track-title">{props.title}</span>
        <span class="track-artist">{props.artist}</span>
        <span class="track-length">{props.length}</span>
      </div>
    </StyledTrack>
  );
};

function setFavoris(id, method) {
  fetch("http://localhost:8080/utilisateur/favoris/titre?titreId=" + id, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `${localStorage.getItem("token")}`,
    },
  })
    .then((response) => response.json())
    .then(() => {
      window.location.reload(false);
    })
    .catch((err) => console.log(err));
}

const StyledTrack = styled.div`
  .track {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 5px 0;
    padding: 5px 0;
    border-bottom: solid 1px rgb(15, 30, 54, 0.1);
    height: 40px;
    width: 100%;

    .track-number {
      flex: 1;
      color: #0f1e36;
      opacity: 50%;
    }

    .track-add {
      flex: 1;
    }

    .track-title {
      flex: 5;
      font-size: 0.9rem;
      color: #0f1e36;
      opacity: 100%;
    }

    .track-artist {
      flex: 5;
      color: #0f1e36;
      opacity: 50%;
    }

    .track-length {
      flex: 3;
      color: #0f1e36;
      opacity: 50%;
    }
  }
`;
