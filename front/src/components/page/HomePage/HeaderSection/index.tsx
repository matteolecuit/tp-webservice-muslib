import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import logo from "./logo.svg";
import { DefaultButton } from "../../../common/Buttons";
import Test from "./Test";

export default () => {
  return (
    <StyledHeader>
      <AnimatedLogo src={logo} />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Link
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
        <DefaultButton text="Hello, I'm a button" />
      </Link>
      <Test />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Link = styled.a`
  color: #61dafb;
`;

const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    & {
      animation: spinAnimation infinite 20s linear;
    }
  }

  @keyframes spinAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
