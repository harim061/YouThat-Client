import * as A from './AnalyticsStyle';
import graph from './../../../img/AnalyticsGraph.svg';
export default function Analytics() {
  return (
    <A.MasonryItem gridColumn={'span 2'}>
      <A.Title>시청 중인 사람들을 분석했어요!</A.Title>
      <A.DataImg src={graph} width={'60rem'} style={{ marginTop: '7rem' }} />
    </A.MasonryItem>
  );
}
