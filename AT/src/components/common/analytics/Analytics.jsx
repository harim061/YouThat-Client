import * as A from './AnalyticsStyle';
import graph from './../../../img/AnalyticsGraph.svg';
import graph2 from './../../../img/AnalyticsGraph2.svg';
import usergraph from './../../../img/UserAnalyticsGraph.svg';
import { useLocation } from 'react-router';

export default function Analytics() {
  const location = useLocation();

  return (
    <A.MasonryItem gridColumn={'span 2'}>
      <A.Title>시청 중인 사람들을 분석했어요!</A.Title>
      <A.DataImg
        src={location.pathname === '/search' ? usergraph : location.pathname === '/content' ? graph : graph2}
        width={'60rem'}
        style={{ marginTop: '7rem' }}
      />
    </A.MasonryItem>
  );
}
