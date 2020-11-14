import React from "react";
import styled from "styled-components";

export default (props) => {
	return (
		<StyledArtistCard>
			<a href={props.link}>
				<div class="card">
					<img src={props.imgUrl} class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">{props.titre}</h5>
						<p class="card-text">{props.artiste}</p>
					</div>
				</div>
			</a>
		</StyledArtistCard>)
};

const StyledArtistCard = styled.div`
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
			margin: auto;
			height: 100px;
			width: 100px;
			border-radius: 100%;
			filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25));
		}

		.card-title {
			text-align: center;
		}
	}
`;
