import * as L from './LoginPStyle';

const LoginP = () => {
  return (
    <L.Container>
      <L.Div>
        <L.Title>로그인</L.Title>
        <L.Detail>
          유튜브 연동을 위해 <br />
          구글 계정으로 로그인만 가능합니다
        </L.Detail>
        <L.Detail>
          로그인하여 맞춤 기능을 <br /> 사용하세요!
        </L.Detail>
        <L.Btn>구글 계정으로 로그인</L.Btn>
      </L.Div>
    </L.Container>
  );
};

export default LoginP;
