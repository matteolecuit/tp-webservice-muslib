import React from "react";
import styled from "styled-components";

export default (props) => {
  return (
    <StyledCard>
      <div class="card">
        <img src={props.imgUrl} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.titre}</h5>
          <p class="card-text">{props.artiste}</p>
        </div>
      </div>
    </StyledCard>)
};

const StyledCard = styled.div`
width: 18rem;
`;
