import styled from "@emotion/styled";

export const Button = styled.button`
  width: 80px;
  height: 50px;
  color: var(--main-button-text-color);
  background-color: var(--main-button-background-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: var(--main-button-hover-background-color);
  };
`;

