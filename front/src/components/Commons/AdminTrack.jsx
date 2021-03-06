import React from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import { Link } from "react-router-dom";
import { render } from "react-dom";

export default (props) => {

    function deleteItem(e) {
        console.log("Child Clicked");
        // Pass event to caller via the onChild2Event prop.
        // You can do something with the event, or just pass it.
        this.props.deleteItem(e.target.value);
    };

    function editItem(e) {
        this.props.editItem(e.target.value);
    }

	return (
		<StyledTrack>
            <div class="track">
                <span class="track-number">{props.trackNumber}</span>
                <span class="track-title">{props.title}</span>
                <span class="track-artist">{props.artist}</span>
                <span class="track-image">{props.image}</span>
                <span class="track-length">{props.length}</span>
				<span onClick={ () => {props.editItem(props.trackNumber)}}><Icon 
						name="edit-outline"
						size="large"
						fill="#0F1E36"     // small, medium, large, xlarge
						animation={{
						type: "pulse",  // zoom, pulse, shake, flip
						hover: true,
						infinite: false 
						}}
					/></span>
				<span onClick={ () => {props.deleteItem(props.trackNumber)}}><Icon 
						name="trash-2-outline"
                        size="large"
						fill="#0F1E36"     // small, medium, large, xlarge
						animation={{
						type: "pulse",  // zoom, pulse, shake, flip
						hover: true,
						infinite: false 
						}}
					/></span>
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
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .track-image {
            flex: 5;
            color: #0F1E36;
            opacity: 50%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .track-length {
            flex: 3;
            color: #0F1E36;
            opacity: 50%;
		}
		
		Icon {
			flex: 2;
			color: #0F1E36;
            opacity: 50%;
		}
    }
`;
