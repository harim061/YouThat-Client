import * as A from '../common/analytics/AnalyticsStyle';
import * as M from '../main/MainStyle';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RotateLoader } from 'react-spinners';
import * as AB from '../main/AboutStyle';

const SearchPage = () => {
  // url 넣으면 썸네일 나오게 하는 코드
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [showYoutube, setShowYoutube] = useState(false);

  // URL 입력값이 변경될 때 호출되는 함수
  const handleInputChange = (event) => {
    setUrl(event.target.value);
    console.log('검색');
  };

  // URL 입력 후 5초 후에 YouTube를 표시하는 함수
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setShowYoutube(true);
        setLoading(false);
      }, 5000);
    }
  }, [loading]);

  // URL 입력 후 Enter 키 입력 처리
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log('검색');
      handleSubmit();
    }
  };

  // URL을 제출하는 함수
  const handleSubmit = () => {
    setLoading(true);
    setShowYoutube(false);
  };
  return (
    <A.MasonryItem style={{ marginBottom: '300px' }}>
      <A.Title style={{ marginTop: '50px' }}>영상 분석하기</A.Title>
      <M.Input placeholder="URL을 입력해주세요." onChange={handleInputChange} onKeyPress={handleKeyPress} />
      {loading && (
        <RotateLoader color="#EB6B92" margin={10} cssOverride={{ marginTop: '90px', marginBottom: '50px' }} />
      )}
      {showYoutube && (
        <>
          <AB.Youtube src="https://i.ytimg.com/vi/EcZarzvkWuA/maxresdefault.jpg" />
          <AB.Ment2 href="https://www.youtube.com/watch?v=EcZarzvkWuA" target="blank">
            국제커플 해외 결혼식 브이로그👰🏻💍 폭풍 소나기 우여곡절 끝에 진행된 웨딩 1부🪄✨ 유네린 보바
          </AB.Ment2>
        </>
      )}
      <Link to={'/contents'}>
        <Button text="분석하러 가기" />
      </Link>
    </A.MasonryItem>
  );
};

export default SearchPage;
