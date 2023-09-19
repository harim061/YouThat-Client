import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import User from './pages/UserAnalytics';
import Search from './pages/Search';
import Content from './pages/ContentAnalytics';
import Contents from './pages/ContentAnalyticss';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import CommentD from './pages/CommentD';

function AppNavigation() {
  const location = useLocation();

  // // 로그인 페이지에서만 네비게이션과 푸터를 숨깁니다.
  // if (location.pathname === '/login') {
  //   return (
  //     <>
  //       <Routes>
  //         <Route path="/login" element={<Login />} />
  //       </Routes>
  //     </>
  //   );
  // }

  // 다른 페이지에서는 네비게이션과 푸터를 표시합니다.
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/user" element={<User />} />
        <Route path="/search" element={<Search />} />
        <Route path="/content" element={<Content />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/commentDetail" element={<CommentD />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <AppNavigation />
    </BrowserRouter>
  );
}
