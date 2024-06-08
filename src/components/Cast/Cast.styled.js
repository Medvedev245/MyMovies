import styled from 'styled-components';

export const CastsContainer = styled.div`
  width: 850px;
  @media screen and (max-width: 800px) {
  }
`;

export const CastsList = styled.ul`
  justify-content: space-around;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const CastsElement = styled.li`
  list-style: none;
  @media screen and (max-width: 800px) {
  }
`;
