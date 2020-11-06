import React from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  text: string;
}

export default (props: IProps) => {
  return <StyledButton>{props.text}</StyledButton>;
};

const StyledButton = styled.button`
  background: blue;
  color: white;
`;
