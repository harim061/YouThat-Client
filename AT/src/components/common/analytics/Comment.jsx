import * as A from './AnalyticsStyle';
import cloud from './../../../img/Cloud.svg';
import graph from './../../../img/ContentGraph.svg';
export default function Analytics() {
  return (
    <A.MasonryItem height={'82rem'} gridRow={'span 2'}>
      <A.Title>띱 Deep님의 댓글을 분석했어요!</A.Title>
      <A.DataImg src={cloud} />
      <A.ContentTag>#고퀄리티의</A.ContentTag>
      <A.ContentTag>#웃음을_주는</A.ContentTag>
      <A.ContentTag>#상상도_못한_콘텐츠</A.ContentTag>
      <A.ContentTagResult>
        띱 Deep 님이 설정한 해시태그와<br></br> <A.ColoredText>85% 일치</A.ColoredText>합니다.
      </A.ContentTagResult>
      <A.DataImg src={graph} />
      <A.GraphSub>차트를 클릭하면 해당 댓글을 분석해드려요!</A.GraphSub>
    </A.MasonryItem>
  );
}
