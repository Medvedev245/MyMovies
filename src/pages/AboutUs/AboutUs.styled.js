import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: 150px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export const Text = styled.h2`
  text-align: center;
  margin: 0 0 20px 0;

  @media screen and (max-width: 800px) {
  }
`;

export const Section = styled.section`
  width: 600px;
  height: 400px;
  /* width: 1200;
  height: 65px; */
  /* padding: 0 40px;
  background-color: var(--header); */

  @media screen and (max-width: 800px) {
  }
`;

export const SectionContainer = styled.div`
  width: 1440px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media screen and (max-width: 800px) {
  }
`;
