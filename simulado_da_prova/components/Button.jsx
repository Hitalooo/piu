import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin-bottom: 20px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Button = ({ onClick }) => {
  return <StyledButton onClick={onClick}>Alternar Tema</StyledButton>;
};

export default Button;