import * as A from '../common/analytics/AnalyticsStyle';
import * as G from '../userAnalytics/UserAnalyticsStyle';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

export default function Grade() {
  return (
    <A.MasonryItem width={'40rem'} height={'auto-fit'}>
      <A.Title>총점</A.Title>
      <G.Grade>A+</G.Grade>
      <G.GradeComment>
        띱 Deep님이 설정한 희망 해시태그와<br></br> 실제 댓글의 해시태그가 유사하며<br></br> 긍정 비율이 높고 구독자
        수와 조회수가<br></br> 지속적으로 증가하고 있습니다.
      </G.GradeComment>
      <Link to="/search">
        <Button text="분석하러 가기" />
      </Link>
    </A.MasonryItem>
  );
}
