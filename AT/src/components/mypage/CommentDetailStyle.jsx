import { styled } from 'styled-components';

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CommentTitle = styled.div`
  color: #5b586c;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;

  margin-top: 100px;
`;

export const CommentDetail = styled.div`
  width: 800px;
  height: 228px;

  color: #aaa;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  word-break: keep-all;
  line-height: normal;

  margin-top: 50px;
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 30px;

  :nth-child(1) {
    background: #92cce6;
  }

  :nth-child(2) {
    background-color: #ef919e;
  }

  :nth-child(3) {
    background-color: #8fdbb1;
  }
`;

export const Tag = styled.div`
  width: 150px;
  height: 55px;
  padding: 10px 30px 10px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 70px;

  color: #fff;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
`;

export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 150px;
`;

export const CommentEach = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const CommentImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 150px;
  margin-right: 50px;
`;

export const Content1 = styled.div``;

export const Content2 = styled.div`
  display: flex;
`;
export const CommentId = styled.div`
  color: #eb6b92;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-right: 20px;
`;
export const CommentPercent = styled.div`
  color: #93cce7;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;
export const CommentWrite = styled.div`
  color: #aaa;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-top: 15px;
  line-height: normal;
  width: 600px;
`;
