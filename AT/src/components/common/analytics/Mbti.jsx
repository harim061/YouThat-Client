import * as A from './AnalyticsStyle';
import logo from './../../../img/TextLogo.svg';

export default function Want() {
  return (
    <A.MasonryItem>
      <A.Title>
        오직 <img src={logo} width={'50rem'} style={{ margin: ' 0 0.5rem' }} />
        에서만!<br></br>구독자들의 MBTI는?
      </A.Title>

      <A.GraphSub>
        ESTJ의 취향을 저격하는 콘텐츠를<br></br>
        만들어보는 건 어떨까요?
      </A.GraphSub>
    </A.MasonryItem>
  );
}
