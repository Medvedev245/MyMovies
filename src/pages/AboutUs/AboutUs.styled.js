import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export const Text = styled.h2`
  text-align: center;
  margin: 0 0 50px 0;

  @media screen and (max-width: 800px) {
  }
`;

export const SectionContainer = styled.div`
  /* width: 1440px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 60px;

  margin-bottom: 40px;
  @media screen and (max-width: 800px) {
  }
`;

export const Section = styled.section`
  width: 600px;
  max-height: 435px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  gap: 15px;
  @media screen and (max-width: 800px) {
  }
`;

export const SpanText = styled.span`
  font-weight: 500;
  font-size: 24px;
`;

export const Image = styled.img`
  width: 600px;
  height: 350px;

  @media screen and (max-width: 800px) {
    width: 300px;
    height: 200px;
  }
`;
