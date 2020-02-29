import React from "react";
import styled from 'styled-components';

const Button = (props) => {
    return (
        <PortfolioButton  {...props} onClick={props.onClick}>
            {props.text}
        </PortfolioButton>
    )
}

export default Button;

const PortfolioButton = styled.button `
  background-color: #1A202D;
  padding: .25rem 1rem;  
  margin: 2px;
  border-radius: 4px;
  color: white;
  &:hover {
    background-color:transparent;
    color: black;
    border: 2px solid black
  }
`