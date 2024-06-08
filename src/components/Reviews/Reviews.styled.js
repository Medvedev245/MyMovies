import styled from 'styled-components';

export const Element = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 800px) {
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 800px) {
  }
`;

export const TextName = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
