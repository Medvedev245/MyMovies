import styled from 'styled-components';

export const ContainerContact = styled.div`
  gap: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 45px;
`;

export const TitleElement = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const TextElement = styled.p`
  text-align: center;
`;

export const ElementList = styled.ul`
  justify-content: space-around;
  gap: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Element = styled.li`
  background: var(--bg-elemeent);
  border-radius: 10px;
  padding: 10px;
  width: 280px;
  height: 170px;
  text-align: center;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;
