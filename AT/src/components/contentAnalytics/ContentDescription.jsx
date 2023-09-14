import Analytics from '../common/analytics/Analytics';
import Comment from '../common/analytics/Comment';
import GoodComment from '../common/analytics/GoodComment';
import Mbti from '../common/analytics/Mbti';
import PopularComment from '../common/analytics/PopularComment';
import Want from '../common/analytics/Want';
import * as U from './../userAnalytics/UserAnalyticsStyle';
import { MasonryGrid } from '@egjs/react-grid';
import Profile from './../../img/UserProfile.svg';

export default function ContentDescription() {
  return (
    <>
      <U.UserDescriptionWrapper>
        <U.UserProfile>
          <U.DescriptonTitle>사유 부장개그 영상을 분석했습니다.</U.DescriptonTitle>
          <U.ProfileDescription>조회수 | 좋아요 | 댓글</U.ProfileDescription>
          <U.ProfileImg src={Profile} />
        </U.UserProfile>
      </U.UserDescriptionWrapper>
      <U.GridWrapper>
        <U.Flex>
          <Comment />
          <U.Flex direction={'column'}>
            <Analytics />
            <PopularComment />
          </U.Flex>
        </U.Flex>
      </U.GridWrapper>
    </>
  );
}
