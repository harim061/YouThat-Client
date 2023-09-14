import Analytics from '../common/analytics/Analytics';
import Comment from '../common/analytics/Comment';
import GoodComment from '../common/analytics/GoodComment';
import Mbti from '../common/analytics/Mbti';
import PopularComment from '../common/analytics/PopularComment';
import Want from '../common/analytics/Want';
import * as U from './UserAnalyticsStyle';
import { MasonryGrid } from '@egjs/react-grid';
import Profile from './../../img/UserProfile.svg';

export default function UserDescription() {
  return (
    <>
      <U.UserDescriptionWrapper>
        <U.UserProfile>
          <U.DescriptonTitle>띱 Deep님을 분석했습니다.</U.DescriptonTitle>
          <U.ProfileDescription>조회수 | 좋아요 | 댓글</U.ProfileDescription>
          <U.ProfileImg src={Profile} />
        </U.UserProfile>
        <U.UserGrade>
          <U.DescriptonTitle>띱 Deep님의 총점</U.DescriptonTitle>
          <U.DescriptionContent>
            <U.Grade>A+</U.Grade>
            <U.GradeComment>
              띱 Deep님이 설정한 희망 해시태그와<br></br> 실제 댓글의 해시태그가 유사하며<br></br> 긍정 비율이 높고
              구독자 수와 조회수가<br></br> 지속적으로 증가하고 있습니다.
            </U.GradeComment>
          </U.DescriptionContent>
        </U.UserGrade>
      </U.UserDescriptionWrapper>
      <U.GridWrapper>
        <U.Grid>
          <Comment />
          <Want />
          <Mbti />
          <Analytics />
        </U.Grid>
      </U.GridWrapper>
      <U.Flex>
        <GoodComment />
        <PopularComment />
      </U.Flex>
    </>
  );
}
