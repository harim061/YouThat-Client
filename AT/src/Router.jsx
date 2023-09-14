import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import Main from './pages/Main';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Search from './pages/UserAnalytics';
import Content from './pages/ContentAnalytics';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <GlobalWrapper>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/content" element={<Content />} />
            <Route path="/howto" element={<Main />} />
          </Routes>
        </GlobalWrapper>
        <Footer />
      </BrowserRouter>
    </>
  );
}

const GlobalWrapper = styled.main`
  padding: 8rem;
`;
