import * as A from './AnalyticsStyle';
import profile from './../../../img/Cong1.svg';
import { useLocation } from 'react-router';

export default function Analytics() {
  const location = useLocation();
  const Comments = [
    {
      profile: 'https://yt3.ggpht.com/yti/AOXPAcWe4JuM7LWNIVAz-g-QafQzQICkG0b85c6Llw=s108-c-k-c0x00ffffff-no-rj',
      username: '@user-pp5dj9bx4u',
      comment:
        '너무 웃겨요!!ㅋㅋㅋ 저는 S인데 이렇게 대화가 되는게 신기해요!!ㅋㅋㅋㅋ 앞으로도 이런 수다 영상(?) 자주 올려주세요!!',
      percent: '85% (기쁨)',
    },

    {
      profile: 'https://yt3.ggpht.com/ytc/AOPolaQ387uB8KQYtTie3rh_bX_siH3X9PGrUqjn4Y5z_r1cVw=s88-c-k-c0x00ffffff-no-rj',
      username: '@rjlee918',
      comment:
        '직접 경험한 내용을 토대로 이야기 해주시니까 믿음이 가는 것 같아요! 저도 1학기 시험을 생각보다 못 친거 같은데 2학기에는 열심히 제리님이 이야기 해주신 것을 바탕으로 공부해서 잘 치겠습니다!!!',
      percent: '40% (기쁨)',
    },
    {
      profile: 'https://yt3.ggpht.com/ytc/AOPolaQ387uB8KQYtTie3rh_bX_siH3X9PGrUqjn4Y5z_r1cVw=s88-c-k-c0x00ffffff-no-rj',
      username: '@user-hyoni464',
      comment: '프사 너무 귀여워요!! 고양이 브이로그도 올려주세요!!',
      percent: '55% (놀람)',
    },
  ];

  const CommentsContent = [
    {
      profile: 'https://yt3.ggpht.com/ytc/AOPolaS8tY3mN7A-RWJsRDCcHe1Vbpi4SclIx0NjaKXT6Q=s88-c-k-c0x00ffffff-no-rj',
      username: '@patpeng0808',
      comment:
        '둥이들 이름이고 뭐고 할부지 손길이 좋은 우리 푸꾸🧡 푸바오는 정말 이름 잘지었어 아무데나 갖다붙여도 찰떡이야 푸룽지 푸린이 푸린세스',
      percent: '',
    },
    {
      profile: 'https://yt3.ggpht.com/ytc/AOPolaQtHhRT2Dthip6TVJIeRkUy3hE_0eAxjzykgA=s88-c-k-c0x00ffffff-no-rj',
      username: '@user-iq9zt4xh5r',
      comment:
        '푸바오는 오랜만에 낮에 할부지 봤다고 계속 할부지 보면서 동작 크게하고 러바오는 오랜만에 나무 아래서 아부지 봤다고 활짝 웃으면서 아부지 빤히 보네요 ㅋㅋㅋㅋ 사랑이 가득한 바오가족',
      percent: '',
    },
    {
      profile: 'https://yt3.ggpht.com/ytc/AOPolaSzAPUzhf_SRIU2nGKozLb75lDdnFRHAuOdq5PniA=s88-c-k-c0x00ffffff-no-rj',
      username: '@user-wf3gq9dh2k',
      comment:
        '낙엽 밟는게 무서웠던 아가판다가 이제는 가을의 낙엽을 즐기는 어른 판다가 되어 가네요 😢❤❤❤ 대견해 우리 푸바오오오오😂',
      percent: '',
    },
  ];
  const CommentsContents = [
    {
      profile:
        'https://yt3.ggpht.com/QeL6DCvq6RAYw5YVCazST9rKa3onSLyvqxbEOz8Wn_ZjLXrkQV3grv3B4fGuE4iwqicWg_Vy=s88-c-k-c0x00ffffff-no-rj',
      username: '@KYO_ismylife',
      comment:
        '아 이게 진짜 결혼식이구나 싶어요,,,항상 경직되고 딱딱한 뭔가 관례같은 결혼식만 봤었는데 혜린님 결혼식보니까 친한친구들과 결혼식에 오신 사람들이 모두 진심으로 축하해주시고 즐기는거같아서 너무 좋아보이네여ㅜㅜㅜㅠㅠ 넘 따숩🥹 저도 외국에서 하고픈 마음이들어요ㅋㅋㅋㅋ아직 아무도 없지만^^ 혹시 아버지랑 입장하는게 아닌 들러리친구분들?이랑 들어가는게 외국문화인가요? 넘 더 즐거워보여서 여쭤봅니당!!!',
      percent: '',
    },
    {
      profile:
        'https://yt3.ggpht.com/o2Sl-U5_brwxurRZ1Z9srL6C6MG-fvjpNFCq53mnbq-GgvygTpO-ADQUMYUemTsRcNcwOVEOjIs=s88-c-k-c0x00ffffff-no-rj',
      username: '@user-xr9ki1pd1m',
      comment:
        '진짜 누군가의 결혼식을, 그것도 (유튜브로 만난 것 외에는) 연고없는 분의 결혼을 이렇게 마음을 다해 축하하고 응원하게 된 건 처음인 것 같아요! 결혼 너무너무 축하드리고 앞으로 두분 함께 행복한 결혼생활 보내시길 바라요! 💍👰🏻‍♀️🤵🏻‍♂️🌷',
      percent: '',
    },
    {
      profile:
        'https://yt3.ggpht.com/8l4WGMnQGvzr9aTds29AbCbQQTvONltBhNGVw0eOETvqXmUL-QonyLiMV2jMgM_bsgh9qCPyNw=s88-c-k-c0x00ffffff-no-rj',
      username: '@aeroneith',
      comment:
        'Сначала случайно попалось ваше видео об отношениях на расстоянии, а теперь также случайно уже пришло видео со свадьбой Ура, счастья вам, случайные лапушки ❤',
      percent: '',
    },
  ];
  return (
    <A.MasonryItem width={'70rem'}>
      <A.Title>가장 인기있는 댓글이에요!</A.Title>
      <A.CommentWrapper>
        {location.pathname === '/user'
          ? Comments.map((c) => (
              <A.Comment key={c.username}>
                <A.CommentProfile src={c.profile} />
                <div>
                  <A.CommentName>{c.username}</A.CommentName>
                  <A.CommentContent>{c.comment}</A.CommentContent>
                </div>
              </A.Comment>
            ))
          : location.pathname === '/content'
          ? Comments.map((c) => (
              <A.Comment key={c.username}>
                <A.CommentProfile src={c.profile} />
                <div>
                  <A.CommentName>{c.username}</A.CommentName>
                  <A.CommentContent>{c.comment}</A.CommentContent>
                </div>
              </A.Comment>
            ))
          : CommentsContents.map((c) => (
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
  );
}
