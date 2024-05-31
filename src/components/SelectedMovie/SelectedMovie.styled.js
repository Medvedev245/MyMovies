import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* justify-content: space-between; */
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ImgComtainer = styled.div`
  width: 400px;
  height: auto;
  @media screen and (max-width: 800px) {
    width: 288px;
    height: auto;
  }
`;

export const Description = styled.div`
  width: 400px;
  height: auto;
  @media screen and (max-width: 800px) {
    width: 288px;
    height: auto;
  }
`;

export const Img = styled.img`
  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
    max-width: 100%;
    object-fit: cover;
  }
`;
