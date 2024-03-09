import styled from 'styled-components';

export const LogoContaoneer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  @media screen and (max-width: 1439px) {
    gap: 15px;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export const LogoText = styled.span`
  color: var(--iq-title-text);
  font-weight: 700;
  font-size: 24px;
  @media screen and (max-width: 1439px) {
    font-size: 17px;
  }
`;
