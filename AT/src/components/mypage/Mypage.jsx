import Analytics from '../common/analytics/Analytics';
import Comment from '../common/analytics/Comment';
import GoodComment from '../common/analytics/GoodComment';
import Mbti from '../common/analytics/Mbti';
import PopularComment from '../common/analytics/PopularComment';
import Want from '../common/analytics/Want';
import * as U from '../userAnalytics/UserAnalyticsStyle';
import { MasonryGrid } from '@egjs/react-grid';
import Profile from './../../img/UserProfile.svg';

export default function Mypage() {
  return (
    <>
      <U.UserDescriptionWrapper>
        <U.UserProfile>
          <U.DescriptonTitle>띱 Deep님! 안녕하세요!</U.DescriptonTitle>
        </U.UserProfile>
      </U.UserDescriptionWrapper>
      <U.GridWrapper>
        <U.Flex>
          <Comment />
          <Analytics />
          <PopularComment />
        </U.Flex>
      </U.GridWrapper>
    </>
  );
}
