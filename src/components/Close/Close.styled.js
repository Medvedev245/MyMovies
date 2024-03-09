import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px;
  background-color: transparent;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  &:active {
    background-color: #456770;
    transition: all 0.4s ease;
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
