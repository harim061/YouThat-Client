import Analytics from '../common/analytics/Analytics';
import Comment from '../common/analytics/Comment';
import GoodComment from '../common/analytics/GoodComment';
import Mbti from '../common/analytics/Mbti';
import PopularComment from '../common/analytics/PopularComment';
import Want from '../common/analytics/Want';
import * as U from '../userAnalytics/UserAnalyticsStyle';
import { MasonryGrid } from '@egjs/react-grid';
import Profile from './../../img/UserProfile.svg';
import Thum from '../../img/main/maxresdefault.jpg';

export default function ContentDescription() {
  return (
    <>
      <U.UserDescriptionWrapper>
        <U.UserProfile>
          <U.DescriptonTitle style={{ width: '800px', wordBreak: 'keep-all' }}>
            국제커플 해외 결혼식 브이로그👰🏻💍 폭풍 소나기 우여곡절 끝에 진행된 웨딩 1부🪄✨ 유네린 보바<br></br> 영상을
            분석했습니다.
          </U.DescriptonTitle>
          <U.ProfileDescription>조회수 66만회 | 좋아요 1.2만개 | 댓글 426개</U.ProfileDescription>
          <U.ContentImg src={'https://i.ytimg.com/vi/EcZarzvkWuA/maxresdefault.jpg'} />
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
