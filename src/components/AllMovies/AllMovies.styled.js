import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Image = styled.img`
  width: 100%;
  margin-bottom: 20px;
  @media screen and (max-width: 800px) {
    width: 70%;
  }
`;

export const LinkFilm = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
  margin-bottom: 40px;
`;

export const Item = styled.li`
  width: 300px;
  background-color: var(--bg-elemeent);
  list-style: none;
  border-radius: 10px;
  border: 3px solid #fff;
  overflow: hidden;
`;

export const ElementText = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;
