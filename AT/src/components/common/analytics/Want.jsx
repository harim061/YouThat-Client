import * as A from './AnalyticsStyle';
import graph from './../../../img/WantGraph.svg';

export default function Want() {
  return (
    <A.MasonryItem>
      <A.Title>
        띱 Deep님의<br></br> 구독자들은 원해요!
      </A.Title>
      <A.DataImg src={graph} />
      <A.GraphSub>
        최근 댓글에서 위 요청이 들어왔어요<br></br> 이러한 콘텐츠를 제작해보는 것은 어떨까요?
      </A.GraphSub>
    </A.MasonryItem>
  );
}
