/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { Container } from '../Container';
import { Suspense } from 'react';
import { HashLoader } from 'react-spinners';
import { Outlet } from 'react-router-dom';

const MainEl = styled.main`
  padding: 2rem 0;
  @media (min-with: 767px) {
    padding: 4rem 0;
  }
`;

const Main = ({ children }) => {
  return (
    <MainEl>
      <Container>{children}</Container>
    </MainEl>
  );
};

export default Main;
