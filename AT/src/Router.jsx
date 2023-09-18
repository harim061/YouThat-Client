import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Search from './pages/UserAnalytics';
import Content from './pages/ContentAnalytics';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import CommentD from './pages/CommentD';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/content" element={<Content />} />
          <Route path="/commentDetail" element={<CommentD />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
