import * as A from '../common/analytics/AnalyticsStyle';
import cloud from '../../img/Cloud.svg';
import Button from '../common/Button';

export default function Comment() {
  return (
    <A.MasonryItem width={'40rem'} height={'auto-fit'}>
      <A.Title>전체 댓글 보기</A.Title>
      <A.DataImg src={cloud} />
      <A.ContentTag>#고퀄리티의</A.ContentTag>
      <A.ContentTag>#웃음을_주는</A.ContentTag>
      <A.ContentTag>#상상도_못한_콘텐츠</A.ContentTag>
      <Button text="자세히 보기" />
    </A.MasonryItem>
  );
}
