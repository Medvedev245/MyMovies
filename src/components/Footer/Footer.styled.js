import styled from 'styled-components';

export const FooterContainer = styled.div`
  height: 70px;
  width: 100%;
  padding: 0 40px;
  background-color: var(--header);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperComtainer = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
  }
`;

export const Path = styled.path`
  transform: translate(32%, 13%);
`;

// export const SpanFooter = styled.span
