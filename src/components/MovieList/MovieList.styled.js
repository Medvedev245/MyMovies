import styled from 'styled-components';

export const ListMovie = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
  margin-bottom: 40px;
`;

export const ListElement = styled.li`
  width: 300px;
  background-color: var(--bg-elemeent);
  list-style: none;
  border-radius: 10px;
  border: 3px solid #fff;
  overflow: hidden;
`;

export const TextElement = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;
