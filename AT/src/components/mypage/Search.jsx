import * as A from '../common/analytics/AnalyticsStyle';
import * as M from '../main/MainStyle';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

export default function Search() {
  return (
    <A.MasonryItem width={'126rem'} height={'auto-fit'}>
      <A.Title>영상 분석하기</A.Title>
      <M.Input placeholder="URL을 입력해주세요."></M.Input>
      <Link to={'/content'}>
        <Button text="분석하러 가기" />
      </Link>
    </A.MasonryItem>
  );
}
