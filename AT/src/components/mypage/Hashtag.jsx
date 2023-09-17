import * as A from '../common/analytics/AnalyticsStyle';
import cloud from '../../img/Cloud.svg';
import Button from '../common/Button';

export default function Hashtag() {
  return (
    <A.MasonryItem width={'126rem'} height={'auto-fit'}>
      <A.Title>해시태그 설정하기</A.Title>
      <A.GraphSub>
        유튜브의 방향성을 해시태그로 설정해보세요!<br></br>
        최대 5개까지 설정 가능합니다.
      </A.GraphSub>
      <A.ContentTag>#고퀄리티의</A.ContentTag>
      <A.ContentTag>#웃음을_주는</A.ContentTag>
      <A.ContentTag>#상상도_못한_콘텐츠</A.ContentTag>
      <Button text="더보기" />
    </A.MasonryItem>
  );
}
