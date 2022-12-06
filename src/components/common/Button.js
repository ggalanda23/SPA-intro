import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Button = styled.button`
  
  width: 80px;
  height: 40px;
  color: var(--main-button-text-color);
  background-color: var(--main-button-background-color);
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: var(--main-button-hover-background-color);
  };
`;

export const LinkButton = styled(props => <Link {...props} />)`
padding: 20px;

top: 50%;
left: 50%
color: var(--main-button-text-color);
background-color: var(--main-button-background-color);
border: none;
border-radius: 4px;
cursor: pointer;
&:hover {
  background-color: var(--main-button-hover-background-color);
};
display: flex;
justify-content: center;

`;

