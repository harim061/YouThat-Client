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
          <I.UserSubRowTitle>전체 구독자 수</I.UserSubRowTitle>
          <I.UserSubRowContent> 15명</I.UserSubRowContent>
        </I.UserSubRow>
        <I.UserSubRow>
          <I.UserSubRowTitle>총 조회수</I.UserSubRowTitle>
          <I.UserSubRowContent> 649회</I.UserSubRowContent>
        </I.UserSubRow>
        <I.UserSubRowTitle>인기 동영상</I.UserSubRowTitle>
        <img src="https://i.ytimg.com/vi/yo1-AohsG-w/mqdefault.jpg" />
      </I.UserSub>
      <a href="https://www.youtube.com/@user-dj2mf5zm4w/" target="_blank">
        <Button text="내 유튜브로 이동하기" />
      </a>
    </A.MasonryItem>
  );
}
