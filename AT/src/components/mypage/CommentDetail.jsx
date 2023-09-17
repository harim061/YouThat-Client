import * as C from './CommentDetailStyle';
import Profile from '../../img/Cong1.svg';
import { useEffect, useState } from 'react';

const CommentDetail = () => {
  const goodComments = [
    {
      username: '@minseokim513',
      comment: '대박 고등학교부터 다시 다녀서 홍대미대 가고싶어요~',
      percent: '55% (놀람)',
    },
    {
      username: '@user-pp5dj9bx4u',
      comment: '요즈음 시각디자인에 대해 꿈이 생겼는데 덕분에 용기가 생겼어요! 유익한 영상 감사합니다!!❤',
      percent: '89% (기쁨)',
    },
    {
      username: '@user-xw3jk8kg3h',
      comment: '너무 유익한 정보 감사합니당~~~!!',
      percent: '90% (기쁨)',
    },
    {
      username: '@rjlee918',
      comment:
        '직접 경험한 내용을 토대로 이야기 해주시니까 믿음이 가는 것 같아요! 저도 1학기 시험을 생각보다 못 친거 같은데 2학기에는 열심히 제리님이 이야기 해주신 것을 바탕으로 공부해서 잘 치겠습니다!!!',
      percent: '40% (기쁨)',
    },
    {
      username: '@user-ig8ow2vz4g',
      comment:
        '정말 타고남+노력 대박적... 생글생글 웃으면서 얘기하시는데 시험기간에 얼마나 치열하고 열심히 하셨을까 ㅠㅅㅠ',
      percent: '70% (놀람)',
    },
    {
      username: '@user-on5dg2nd6k',
      comment: '안녕하세요 묘우님! 프사 고양이 사진이 너무 귀여워요! 고양이 영상도 올려주세요!! 기다리고 있겠습니다❤🐈',
      percent: '50% (기쁨)',
    },
  ];

  const badComments = [
    {
      username: '@user-4dzdg2nd6k',
      comment: '현타온다.. . ',
      percent: '84% (슬픔)',
    },
    {
      username: '@user-rc8gm1te3i',
      comment: '암기만하는 공부는 실질적인 공부의 목표가 아닌데,, 참... 현실이 안타깝다... ',
      percent: '50% (슬픔)',
    },
  ];

  const [selectedTag, setSelectedTag] = useState('전체');
  const [comments, setComments] = useState([]);
  const [commentColors, setCommentColors] = useState({});

  useEffect(() => {
    handleTagClick('긍정');
  }, []);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    if (tag === '전체') {
      const combinedComments = [...goodComments, ...badComments];
      setComments(shuffleArray(combinedComments));
      setCommentColors((prevColors) =>
        Object.fromEntries(
          combinedComments.map(({ comment }) => [
            comment,
            goodComments.some(({ comment: gc }) => comment === gc)
              ? '#92cce6'
              : badComments.some(({ comment: bc }) => comment === bc)
              ? '#ef919e'
              : '',
          ]),
        ),
      );
    } else if (tag === '긍정') {
      setComments(goodComments);
      setCommentColors((prevColors) => Object.fromEntries(goodComments.map(({ comment }) => [comment, '#92cce6'])));
    } else if (tag === '부정') {
      setComments(badComments);
      setCommentColors((prevColors) => Object.fromEntries(badComments.map(({ comment }) => [comment, '#ef919e'])));
    }
  };

  function shuffleArray(arr) {
    const shuffledArr = [...arr];
    for (let i = shuffledArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return shuffledArr;
  }

  return (
    <C.CommentWrapper>
      <C.DetailContent>
        <C.CommentTitle>김묘우님의 전체 댓글입니다</C.CommentTitle>
        <C.CommentDetail>
          카테고리를 클릭하면 해당 댓글을 보여드려요!
          <br /> 비속어 필터링을 한 댓글들 입니다.
          <br /> 부정 댓글은 악플을 포함하지 않으며,
          <br /> 전체 댓글에는 악플이 포함되는 점 유의 부탁드립니다.
        </C.CommentDetail>
        <C.TagWrapper>
          <C.Tag onClick={() => handleTagClick('긍정')}>긍정</C.Tag>
          <C.Tag onClick={() => handleTagClick('부정')}>부정</C.Tag>
          <C.Tag onClick={() => handleTagClick('전체')}>전체</C.Tag>
        </C.TagWrapper>
      </C.DetailContent>

      <C.CommentContent>
        {comments.map(({ username, comment, percent }) => (
          <C.CommentEach key={comment}>
            <C.CommentImg src={Profile} />
            <C.Content1>
              <C.Content2>
                <C.CommentId>{username}</C.CommentId>
                <C.CommentPercent style={{ color: commentColors[comment] }}>{percent}</C.CommentPercent>
              </C.Content2>
              <C.CommentWrite>{comment}</C.CommentWrite>
            </C.Content1>
          </C.CommentEach>
        ))}
      </C.CommentContent>
    </C.CommentWrapper>
  );
};

export default CommentDetail;
