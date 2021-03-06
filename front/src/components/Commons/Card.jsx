import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default (props) => {
	return (
		<StyledCard>
			<Link to={props.link}>
				<div class="card">
					<img src={props.imgUrl} class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">{props.titre}</h5>
						<p class="card-text">{props.artiste}</p>
					</div>
				</div>
			</Link>
		</StyledCard>)
};

const StyledCard = styled.div`
	max-width: 150px;
	width: 18rem;

	a {
		color: #000;
		text-decoration: none;
	}

	.card {
		border: none;
		background-color: transparent;

		img {
			border-radius: 3px;
			filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25));
			margin: auto;
			height: 100px;
			width: 100px;
		}

		.card-title {
			text-align: start;
		}

		.card-text {
			color: #0F1E36;
			opacity: 50%;
		}
	}
`;
