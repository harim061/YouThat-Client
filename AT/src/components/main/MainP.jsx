import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as M from './MainStyle';
import Mouse from '../../img/main/Mouse.svg';
import { useRecoilState } from 'recoil';
import { visibilityState } from '../../atom/visibilityState/visibilityState';
import * as N from '../common/NavStyle';

const MainP = () => {
  {
    /* Main 페이지 넘어가면 나브바 생기는 코드 */
  }
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useRecoilState(visibilityState);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },

      {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [setIsVisible]);

  const navigate = useNavigate();
  const location = useLocation();
  const MENU_LIST = ['Login', 'My Page', 'Search', 'How to'];

  function handleMovePage(menu) {
    switch (menu) {
      case 'Login':
        navigate('/login');
        break;
      case 'My Page':
        navigate('/mypage');
        break;
      case 'Search':
        navigate('/search');
        break;
      case 'How to':
        navigate('/howto');
        break;
      default:
        navigate('/');
    }
  }

  return (
    <M.Container ref={containerRef}>
      <N.MainNav>
        {MENU_LIST.map((menu, idx) => (
          <N.MainMenuUl key={idx} onClick={() => handleMovePage(menu)}>
            {menu}
          </N.MainMenuUl>
        ))}
      </N.MainNav>
      <M.Ment>
        당신의 Youtube의 길잡이
        <br />
        유튜브 댓글 분석기
      </M.Ment>
      <M.Title>Advise Tuber</M.Title>
      <M.Ment>Find your road AT here</M.Ment>
      <M.Input placeholder="URL을 입력해주세요."></M.Input>
      <M.MouseImg src={Mouse} />
    </M.Container>
  );
};

export default MainP;
