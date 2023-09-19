import * as L from './LoginPStyle';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

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
        <GoogleOAuthProvider clientId="371787591796-g3ald977m3iuat18k7a4imbqvpn9bh5h.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              window.location.href = '/mypage';
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            useOneTap
          />
        </GoogleOAuthProvider>
      </L.Div>
    </L.Container>
  );
};

export default LoginP;
