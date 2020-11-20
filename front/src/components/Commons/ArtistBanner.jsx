import React from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Button } from "@material-ui/core";

export default (props) => {
    return (
        <StyledArtistBanner style={{ backgroundImage: `url(${props.bannerImg})` }}>
            <div class="banner">
                <div class="banner-img">
                    <img src={props.img} alt="Artist Img" />
                </div>
                <div class="banner-content">
                    <h1 class="artist-name">{props.name}</h1>
                    <div class="artist-infos">
                        <div class="album-count">
                            <span>Total</span>
                            <span class="albums-number">{props.albumsCount}</span>
                        </div>
                        <Button onClick={() => setFavoris(props.id)}>
                            <Icon name={iconName} size="large" fill="#FFF" animation={{ type: "pulse", hover: true, infinite: false }} />
                        </Button>
                    </div>
                </div>
            </div>
        </StyledArtistBanner>)
};

let iconName = 'heart-outline';

function setFavoris(id) {
    fetch("http://localhost:8080/utilisateur/favoris/artiste?artisteId=" + id, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `${localStorage.getItem("token")}`,
        },
    })
        .then((response) => response.json())
        .then(() => {
            iconName = 'heart';
        })
        .catch((err) => console.log(err));
}

const StyledArtistBanner = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20px;
    height: 300px;
    width: 100%;

    .banner {
        margin-bottom: 0;
        display: flex;

        .banner-img {
            margin: 0 20px;
            height: 80px;
            width: 80px;

            img {
                border-radius: 50%;
                height: 100%;
                width: 100%;
            }
        }

        .banner-content {
            .artist-name {
                color: #FFF;
                font-size: 2.5rem;
                font-weight: 600;
            }

            .artist-infos {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .album-count {
                    color: #FFF;
                    display: flex;
                    flex-direction: column;

                    .albums-number {
                        font-weight: 900;
                    }
                }   
            }
        }
    }
`;
