import * as A from '../common/analytics/AnalyticsStyle';
import * as H from './HashtagStyle';
import cloud from '../../img/Cloud.svg';
import Button from '../common/Button';
import { useState } from 'react';

export default function Hashtag() {
  const [selectedHashtags, setSelectedHashtags] = useState(['#고퀄리티의', '#웃음을_주는', '#상상도_못한_콘텐츠']);
  const hashtags = [
    '#고퀄리티의',
    '#선곡_맛집',
    '#아이가_좋아하는',
    '#생각없이_보는',
    '#웃음을_주는',
    '#호강하는',
    '#폰으로_세계여행',
    '#밈_총집합의',
    '#드영배_분석하는',
    '#리뷰_맛집',
    '#배꼽이_빠지는',
    '#감동을_주는',
    '#만화_애니메이션',
    '#충격적인',
    '#상상도_못한_콘텐츠',
    '#정보를_주는',
  ];

  const toggleHashtag = (hashtag) => {
    const index = selectedHashtags.indexOf(hashtag);

    if (index === -1) {
      if (selectedHashtags.length < 5) {
        // 최대 5개까지 선택 가능
        setSelectedHashtags([...selectedHashtags, hashtag]);
      }
    } else {
      // 선택 해제
      const updatedHashtags = [...selectedHashtags];
      updatedHashtags.splice(index, 1);
      setSelectedHashtags(updatedHashtags);
    }
  };

  return (
    <A.MasonryItem width={'126rem'} height={'auto-fit'}>
      <A.Title>해시태그 설정하기</A.Title>
      <A.GraphSub>
        유튜브의 방향성을 해시태그로 설정해보세요!<br></br>
        최대 5개까지 설정 가능합니다.
      </A.GraphSub>
      <H.TagList>
        {hashtags.map((hashtag) =>
          selectedHashtags.includes(hashtag) ? (
            <H.SelectedContentTag key={hashtag} onClick={() => toggleHashtag(hashtag)}>
              {hashtag}
            </H.SelectedContentTag>
          ) : (
            <H.InitialContentTag key={hashtag} onClick={() => toggleHashtag(hashtag)}>
              {hashtag}
            </H.InitialContentTag>
          ),
        )}
      </H.TagList>
    </A.MasonryItem>
  );
}
