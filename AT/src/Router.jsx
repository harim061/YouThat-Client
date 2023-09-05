import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <GlobalWrapper>
          <Routes>
            <Route path="/" />
          </Routes>
        </GlobalWrapper>
      </BrowserRouter>
    </>
  );
}

const GlobalWrapper = styled.main`
  padding-top: 8rem;
  padding-left: 24rem;
`;
