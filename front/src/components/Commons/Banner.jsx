import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default () => {
  return (
    <StyledBanner>
      <div class="banner">
        <p>EN TENDANCE</p>
        <h1>Jul - La Machine</h1>
        <StyledLink to="/albums/1">Go to Album</StyledLink>
      </div>
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  display: flex;
  align-items: flex-end;
  background: url("https://cdn.radiofrance.fr/s3/cruiser-production/2020/05/096ba162-54e2-4adb-bd65-2fdc4403d05c/801x410_whatsapp_image_2020-05-20_at_10.14.44.jpg")
    center no-repeat;
  background-size: cover;
  padding: 20px;
  height: 300px;
  width: 100%;

  .banner {
    height: 50%;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    p,
    h1 {
      color: #fff;
    }

    h1 {
      font-weight: 700;
    }
  }
`;

const StyledLink = styled(Link)`
  background-color: #fff;
  color: red;
  border-radius: 3px;
  border: solid 1px red;
  padding-left: 5px;
  padding-right: 5px;
`;
