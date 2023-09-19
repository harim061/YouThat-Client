import * as A from './AnalyticsStyle';
import comment from './../../../img/ContentComment.png';
import comment2 from './../../../img/ContentComment2.png';
import usercomment from './../../../img/UserComment.png';
import graph from './../../../img/ContentGraph.svg';
import graph2 from './../../../img/ContentGraph2.svg';
import usergraph from './../../../img/UserGraph.svg';
import { useLocation } from 'react-router';

export default function Analytics() {
  const location = useLocation();

  return (
    <A.MasonryItem height={'82rem'} gridRow={'span 2'}>
      {location.pathname === '/user' ? (
        <A.Title>김묘우님의 댓글을 분석했어요!</A.Title>
      ) : (
        <A.Title>해당 영상의 댓글을 분석했어요!</A.Title>
      )}

      <A.DataImg
        src={location.pathname === '/user' ? usercomment : location.pathname === '/content' ? comment : comment2}
      />
      {location.pathname === '/user' ? (
        <>
          <A.ContentTag>#고퀄리티의</A.ContentTag>
          <A.ContentTag>#웃음을_주는</A.ContentTag>
          <A.ContentTag>#상상도_못한_콘텐츠</A.ContentTag>
        </>
      ) : location.pathnmae === '/content' ? (
        <>
          <A.ContentTag>#아이가_좋아하는</A.ContentTag>
          <A.ContentTag>#감동을_주는</A.ContentTag>
          <A.ContentTag>#상상도_못한_콘텐츠</A.ContentTag>
        </>
      ) : (
        <>
          <A.ContentTag>#고퀄리티의</A.ContentTag>
          <A.ContentTag>#감동을_주는</A.ContentTag>
        </>
      )}

      {location.pathname === '/user' ? (
        <A.ContentTagResult>
          김묘우님이 설정한 해시태그와<br></br> <A.ColoredText>85% 일치</A.ColoredText>합니다.
        </A.ContentTagResult>
      ) : (
        ''
      )}
      <A.DataImg src={location.pathname === '/user' ? usergraph : location.pathname === '/content' ? graph : graph2} />
      <A.GraphSub>차트를 클릭하면 해당 댓글을 분석해드려요!</A.GraphSub>
    </A.MasonryItem>
  );
}
