import * as A from './AnalyticsStyle';
import profile from './../../../img/Cong1.svg';
import { useLocation } from 'react-router';

export default function Analytics() {
  const location = useLocation();
  const goodComments = [
    {
      profile: 'https://yt3.ggpht.com/yti/AOXPAcWe4JuM7LWNIVAz-g-QafQzQICkG0b85c6Llw=s108-c-k-c0x00ffffff-no-rj',
      username: '@user-pp5dj9bx4u',
      comment: '요즈음 시각디자인에 대해 꿈이 생겼는데 덕분에 용기가 생겼어요! 유익한 영상 감사합니다!!❤',
      percent: '89% (기쁨)',
    },
    {
      profile: 'https://yt3.ggpht.com/yti/AOXPAcWe4JuM7LWNIVAz-g-QafQzQICkG0b85c6Llw=s108-c-k-c0x00ffffff-no-rj',
      username: '@user-pp5dj9bx4u',
      comment:
        '묘우님! 안녕하세요! 항상 잘보고 있는 구독자입니다. 좋은 영상 만들어주셔서 감사하고 앞으로도 쭈욱 응원합니다! 파이팅!!',
      percent: '90% (기쁨)',
    },

    {
      profile: 'https://yt3.ggpht.com/ytc/AOPolaQ387uB8KQYtTie3rh_bX_siH3X9PGrUqjn4Y5z_r1cVw=s88-c-k-c0x00ffffff-no-rj',
      username: '@rjlee918',
      comment:
        '직접 경험한 내용을 토대로 이야기 해주시니까 믿음이 가는 것 같아요! 저도 1학기 시험을 생각보다 못 친거 같은데 2학기에는 열심히 제리님이 이야기 해주신 것을 바탕으로 공부해서 잘 치겠습니다!!!',
      percent: '40% (기쁨)',
    },
    {
      profile: 'https://yt3.ggpht.com/ytc/AOPolaQkDpATQ5RuzBW21AA42Vd77kLMUoVO2XA_ZQ=s88-c-k-c0x00ffffff-no-rj',
      username: '@user-ig8ow2vz4g',
      comment:
        '정말 타고남+노력 대박적... 생글생글 웃으면서 얘기하시는데 시험기간에 얼마나 치열하고 열심히 하셨을까 ㅠㅅㅠ',
      percent: '70% (놀람)',
    },
  ];

  const goodCommentsContent = [
    {
      username: '@user-on5dg2nd6k',
      comment: '안녕하세요 묘우님! 프사 고양이 사진이 너무 귀여워요! 고양이 영상도 올려주세요!! 기다리고 있겠습니다❤🐈',
      percent: '50% (기쁨)',
    },
  ];
  return (
    <>
      <A.MasonryItem width={'70rem'}>
        <A.Title>선플들만 모아봤어요!</A.Title>
        <A.CommentWrapper>
          {goodComments.map((c) => (
            <A.Comment key={c.username}>
              <A.CommentProfile src={c.profile} />
              <div>
                <A.CommentName>{c.username}</A.CommentName>
                <A.CommentContent>{c.comment}</A.CommentContent>
              </div>
            </A.Comment>
          ))}
        </A.CommentWrapper>
      </A.MasonryItem>
    </>
  );
}
