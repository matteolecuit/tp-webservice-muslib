import React from "react";
import styled from "styled-components";
import HeaderSection from "./HeaderSection";

export default () => {
  return (
    <Container>
      <HeaderSection />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;
