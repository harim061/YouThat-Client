import * as A from './AboutStyle';
import * as M from './MainStyle';
import Anext from '../../img/main/Anext.svg';
import Apre from '../../img/main/Apre.svg';
import Hash from '../../img/main/Hash.svg';
import { useState, useEffect } from 'react';
import { RotateLoader } from 'react-spinners';
import Thum from '../../img/main/maxresdefault.jpg';
const AboutP = () => {
  // Step 넘어가는 코드

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < Object.keys(Step).length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    } else if (activeStep === 4) {
      setActiveStep(0);
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    } else if (activeStep === 0) {
      setActiveStep(4);
    }
  };

  const Step = {
    '회원가입을 하세요': '로그인을 하시면 당신을 위한 맞춤 기능을 사용하실 수 있어요!',
    '마이페이지를 활용하세요': '이곳에서 맞춤 기능을 확인하실 수 있어요!',
    '나만의 해시태그를 설정하세요': '유튜브의 방향성을 미리 설정하고 실제 업로드 영상과 비교할 수 있어요!',
    '당신을 위한 선플을 모아봤어요': '많은 시청자들이 작성한 선플들을 보기 쉽게 모아봤어요!',
    '유튜브에 대한 총점을 확인하세요': '유튜브 댓글을 분석하여 총점을 남겨드려요!',
  };

  // url 넣으면 썸네일 나오게 하는 코드
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [showYoutube, setShowYoutube] = useState(false);

  // URL 입력값이 변경될 때 호출되는 함수
  const handleInputChange = (event) => {
    setUrl(event.target.value);
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
      handleSubmit();
    }
  };

  // URL을 제출하는 함수
  const handleSubmit = () => {
    setLoading(true);
    setShowYoutube(false);
  };

  return (
    <A.Container>
      <A.Ment>댓글 분석하고 싶은 영상을 입력해주세요</A.Ment>
      <M.Input placeholder="URL을 입력해주세요." onChange={handleInputChange} onKeyPress={handleKeyPress} />

      {loading && (
        <RotateLoader color="#EB6B92" margin={10} cssOverride={{ marginTop: '90px', marginBottom: '20px' }} />
      )}
      {showYoutube && (
        <>
          <A.Youtube src={Thum} />
          <A.Ment2 href="https://www.youtube.com/watch?v=LxX-x4hfHS8" target="blank">
            (SUB) 푸바오가 선택한 쌍둥이 동생들의 이름은?? 지금 바로 쌍둥이 이름 투표하러 가자!!🐼│Panda World
          </A.Ment2>
        </>
      )}
      <A.Btn1
        onClick={() => {
          window.location = '/content';
        }}>
        분석하러 가기
      </A.Btn1>
      <A.Btn1
        onClick={() => {
          window.location = '/search';
        }}>
        내 유튜브 분석하러 가기
      </A.Btn1>
      <A.Ment mt="410px">AT을 똑똑하게 사용하는 방법</A.Ment>
      <A.HowDiv>
        <A.SPrev src={Apre} onClick={handlePrev} />
        {Object.entries(Step).map(([key, value], index) => (
          <A.How key={index} style={{ display: activeStep === index ? 'block' : 'none' }}>
            <A.StepT>STEP {index + 1}</A.StepT>
            <A.StepD>{key}</A.StepD>

            <A.SDetail>{value}</A.SDetail>
            {index === 0 ? <A.STag src={Hash} /> : <></>}
            <A.Btn2
              onClick={() => {
                window.location = '/login';
              }}>
              로그인 하러 가기
            </A.Btn2>
          </A.How>
        ))}

        <A.SNext src={Anext} onClick={handleNext} />
      </A.HowDiv>
    </A.Container>
  );
};

export default AboutP;
