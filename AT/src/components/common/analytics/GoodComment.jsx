import * as A from './AnalyticsStyle';
import profile from './../../../img/Cong1.svg';
export default function Analytics() {
  return (
    <>
      <A.MasonryItem width={'70rem'}>
        <A.Title>선플들만 모아봤어요!</A.Title>
        <A.CommentWrapper>
          <A.Comment>
            <A.CommentProfile src={profile} />
            <div>
              <A.CommentName>콩돌이</A.CommentName>
              <A.CommentContent>
                항상 열심히 올려주셔서 감사해요!!<br></br>다음 영상도 기대하고 있겠습니다! 띱 화이팅~!
              </A.CommentContent>
            </div>
          </A.Comment>
          <A.Comment>
            <A.CommentProfile src={profile} />
            <div>
              <A.CommentName>콩돌이</A.CommentName>
              <A.CommentContent>
                항상 열심히 올려주셔서 감사해요!!<br></br>다음 영상도 기대하고 있겠습니다! 띱 화이팅~!
              </A.CommentContent>
            </div>
          </A.Comment>
          <A.Comment>
            <A.CommentProfile src={profile} />
            <div>
              <A.CommentName>콩돌이</A.CommentName>
              <A.CommentContent>
                항상 열심히 올려주셔서 감사해요!!<br></br>다음 영상도 기대하고 있겠습니다! 띱 화이팅~!
              </A.CommentContent>
            </div>
          </A.Comment>
          <A.Comment>
            <A.CommentProfile src={profile} />
            <div>
              <A.CommentName>콩돌이</A.CommentName>
              <A.CommentContent>
                항상 열심히 올려주셔서 감사해요!!<br></br>다음 영상도 기대하고 있겠습니다! 띱 화이팅~!
              </A.CommentContent>
            </div>
          </A.Comment>
        </A.CommentWrapper>
      </A.MasonryItem>
    </>
  );
}
