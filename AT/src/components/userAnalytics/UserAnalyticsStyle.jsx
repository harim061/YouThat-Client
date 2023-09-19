import { styled } from 'styled-components';

export const UserDescriptionWrapper = styled.section`
  margin-top: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 13rem;
`;
export const UserProfile = styled.div`
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: auto-fit;
  margin-bottom: 3rem;
`;
export const DescriptonTitle = styled.h2`
  color: #5b586c;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
`;
export const ProfileDescription = styled.p`
  color: #aaa;
  font-size: 2rem;
  font-weight: 600;
`;
export const ProfileImg = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
`;
export const ContentImg = styled.img`
  width: 40rem;
`;
export const UserGrade = styled.div`
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
export const DescriptionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;
export const Grade = styled.p`
  font-size: 3rem;
  color: #ef7a96;
  text-align: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const GradeComment = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ef7a96;
  text-align: center;
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const GridWrapper = styled.div`
  margin: 5rem 12rem;
`;
export const Grid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  justify-content: center;
  gap: 2rem;
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: center;
  margin: 0;
  gap: 3rem;
  flex-wrap: wrap;
`;
