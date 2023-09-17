import { Link } from 'react';
import Button from '../common/Button';
import * as A from '../common/analytics/AnalyticsStyle';
import * as I from '../mypage/InfoStyle';
export default function Info() {
  return (
    <A.MasonryItem width={'40rem'} height={'auto-fit'}>
      <A.Title>내 정보</A.Title>
      <I.UserSub>
        <I.UserSubRow>
          <I.UserSubRowTitle></I.UserSubRowTitle>
        </I.UserSubRow>
      </I.UserSub>
      <a href="https://www.youtube.com/@_deep" target="_blank">
        <Button text="내 유튜브로 이동하기" />
      </a>
    </A.MasonryItem>
  );
}
