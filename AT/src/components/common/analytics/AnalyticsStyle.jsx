import { styled } from 'styled-components';

export const MasonryItem = styled.div`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || '40rem'};
  grid-column: ${(props) => props.gridColumn || 'auto'};
  grid-row: ${(props) => props.gridRow || 'auto'};
  border-radius: 30px;
  background: #fff;
  padding: 3rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  color: #5b586c;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.5;
`;
export const DataImg = styled.img`
  width: ${(props) => props.width || '23rem'};
  margin: 1.5rem;
`;
export const ContentTag = styled.p`
  background: linear-gradient(92deg, #f2a99e 2.11%, #ed6f96 50.54%, #deb6de 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: Inter;
  font-size: 2.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
`;
export const ContentTagResult = styled.p`
  color: #5b586c;
  text-align: center;
  font-family: Inter;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.5;

  margin: 4rem;
`;
export const ColoredText = styled.span`
  color: #ef7a96;
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
`;
export const GraphSub = styled.p`
  color: #aaa;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const CommentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 두께 지정 */
    border-radius: 5px; /* 스크롤바 모서리를 둥글게 만듭니다. */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ef7a96;
    border-radius: 5px;
    backdrop-filter: blur(50px);
  }

  &::-webkit-scrollbar-track {
    background-color: #f4f4f4; /* 스크롤바 트랙 색상 지정 */
    border-radius: 5px; /* 스크롤바 모서리를 둥글게 만듭니다. */
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2) inset;
  }
`;
export const CommentProfile = styled.img`
  width: 5rem;
  border-radius: 50%;
`;
export const Comment = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 1rem;

  width: 80%;
`;
export const CommentName = styled.p`
  color: #eb6b92;
  font-family: Inter;
  font-size: 2rem;
  font-weight: 700;
  line-height: normal;
`;
export const CommentContent = styled.p`
  color: #aaa;
  font-family: Inter;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: normal;
`;
