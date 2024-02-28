import styled from 'styled-components';
import UkrPostPng from '../../assets/ukrPoshtaPng.png';

export const MethodList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const MethodItem = styled.li`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 20px;

  padding: 10px;

  box-shadow: var(--shadow);
  border: var(--border-base);
  margin-top: 10px;

  & > svg,
  & > div > svg {
    width: 100px;
    height: 70px;
    border: var(--border-base);
  }

  & > div {
    & > p {
      margin-top: 10px;
    }
  }
`;

export const UkrPostLogo = styled.div`
  width: 100px;
  height: 70px;
  border: var(--border-base);
  background-image: url(${UkrPostPng});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
