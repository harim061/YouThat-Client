import * as A from './AnalyticsStyle';
import comment from './../../../img/ContentComment.png';
import usercomment from './../../../img/UserComment.png';
import graph from './../../../img/ContentGraph.svg';
import usergraph from './../../../img/UserGraph.svg';
import { useLocation } from 'react-router';

export default function Analytics() {
  const location = useLocation();

  return (
    <A.MasonryItem height={'82rem'} gridRow={'span 2'}>
      <A.Title>김묘우님의 댓글을 분석했어요!</A.Title>
      <A.DataImg src={location.pathname === '/search' ? usercomment : comment} />
      <A.ContentTag>#고퀄리티의</A.ContentTag>
      <A.ContentTag>#웃음을_주는</A.ContentTag>
      <A.ContentTag>#상상도_못한_콘텐츠</A.ContentTag>
      <A.ContentTagResult>
        김묘우님이 설정한 해시태그와<br></br> <A.ColoredText>85% 일치</A.ColoredText>합니다.
      </A.ContentTagResult>
      <A.DataImg src={location.pathname === '/search' ? usergraph : graph} />
      <A.GraphSub>차트를 클릭하면 해당 댓글을 분석해드려요!</A.GraphSub>
    </A.MasonryItem>
  );
}
