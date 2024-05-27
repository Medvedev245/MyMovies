import styled from 'styled-components';

export const ImgComtainer = styled.div`
  width: 400px;
  height: 600px;
  @media screen and (max-width: 800px) {
    width: 288px;
    height: auto;
  }
`;

export const Img = styled.img`
  margin-bottom: 20px;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
    max-width: 100%;
    object-fit: cover;
  }
`;

export const Container = styled.div`
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
`;
