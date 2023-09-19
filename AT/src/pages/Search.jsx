import React from 'react';
import * as A from './../components/common/analytics/AnalyticsStyle';
import * as M from './../components/main/MainStyle';
import Button from './../components/common/Button';
import { Link } from 'react-router-dom';

export default function Search() {
  return (
    <div
      style={{ margin: '0 auto', marginTop: '10rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <A.Title>영상 분석하기</A.Title>
      <M.Input placeholder="URL을 입력해주세요."></M.Input>
      <Link to={'/contents'}>
        <Button text="분석하러 가기" />
      </Link>
    </div>
  );
}
