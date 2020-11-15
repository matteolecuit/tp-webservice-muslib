import React from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Link } from "react-router-dom";

export default (props) => {
	return (
		<StyledTrack>
            <div class="track">
                <span class="track-number">{props.trackNumber}</span>
                <span class="track-add"><Icon name="plus-circle-outline" size="large" fill="rgb(15,30,54, 0.5)" animation={{type: "pulse", hover: true, infinite: false}}/></span>
                <span class="track-title">{props.title}</span>
                <span class="track-artist">{props.artist}</span>
                <span class="track-length">{props.length}</span>
            </div>
		</StyledTrack>)
};

const StyledTrack = styled.div`
	.track {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 5px 0;
        padding: 5px 0;
        border-bottom: solid 1px rgb(15,30,54, 0.1);
        height: 40px;
        width: 100%;

        .track-number {
            flex: 1;
            color: #0F1E36;
            opacity: 50%;
        }

        .track-add {
            flex: 1;
        }

        .track-title {
            flex: 5;
            font-size: 0.9rem;
            color: #0F1E36;
            opacity: 100%;
        }

        .track-artist {
            flex: 5;
            color: #0F1E36;
            opacity: 50%;
        }

        .track-length {
            flex: 3;
            color: #0F1E36;
            opacity: 50%;
        }
    }
`;
