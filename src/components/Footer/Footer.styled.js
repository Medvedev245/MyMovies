import styled from 'styled-components';

export const FooterContainer = styled.div`
  height: 65px;
  padding: 0 40px;
  background-color: var(--header);
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: 170px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export const WrapperComtainer = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    padding-bottom: 20px;
    flex-wrap: wrap;
    width: 320px;
    justify-content: center;
  }
`;

export const SvgIcons = styled.svg`
  display: flex;
  border-radius: 15px;
  width: 100px;
  height: 45px;
  border: 1px solid;
  border-color: black;

  &:hover,
  &:focus {
    transition: all 0.4s ease;
    fill: #182363;
    background-color: #6b9caa;
    cursor: pointer;
  }
`;

export const Path = styled.path`
  transform: translate(32%, 13%);
`;

export const SpanFooter = styled.span`
  margin-top: 15px;
  margin-bottom: 15px;
`;
