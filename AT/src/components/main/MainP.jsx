import React, { useEffect, useRef, useState } from 'react';
import * as M from './MainStyle';
import Mouse from '../../img/main/Mouse.svg';
import { useRecoilState } from 'recoil';
import { visibilityState } from '../../atom/visibilityState/visibilityState';

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

  return (
    <M.Container ref={containerRef}>
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
