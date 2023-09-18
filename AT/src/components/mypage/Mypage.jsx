import Info from '../mypage/Info';
import Comment from '../mypage/Comment';
import Grade from '../mypage/Grade';
import * as U from '../userAnalytics/UserAnalyticsStyle';
import { MasonryGrid } from '@egjs/react-grid';
import Profile from './../../img/UserProfile.svg';
import Hashtag from './Hashtag';
import Search from './Search';

export default function Mypage() {
  return (
    <>
      <U.UserDescriptionWrapper>
        <U.DescriptonTitle>김묘우님! 안녕하세요!</U.DescriptonTitle>
      </U.UserDescriptionWrapper>

      <U.GridWrapper>
        <U.Flex>
          <Info />
          <Comment />
          <Grade />
          <Hashtag />
        </U.Flex>
      </U.GridWrapper>
    </>
  );
}
