import Analytics from '../common/analytics/Analytics';
import Comment from '../common/analytics/Comment';
import GoodComment from '../common/analytics/GoodComment';
import Mbti from '../common/analytics/Mbti';
import PopularComment from '../common/analytics/PopularComment';
import Want from '../common/analytics/Want';
import * as U from './../userAnalytics/UserAnalyticsStyle';
import { MasonryGrid } from '@egjs/react-grid';
import Profile from './../../img/UserProfile.svg';
import Thum from '../../img/main/maxresdefault.jpg';

export default function ContentDescription() {
  return (
    <>
      <U.UserDescriptionWrapper>
        <U.UserProfile>
          <U.DescriptonTitle style={{ width: '900px', wordBreak: 'keep-all' }}>
            (SUB) 푸바오가 선택한 쌍둥이 동생들의 이름은?? 지금 바로 쌍둥이 이름 투표하러 가자!!🐼│Panda World<br></br>{' '}
            영상을 분석했습니다.
          </U.DescriptonTitle>
          <U.ProfileDescription>조회수 121만회 | 좋아요 3.8만개 | 댓글 1,995개</U.ProfileDescription>
          <U.ContentImg src={Thum} />
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
