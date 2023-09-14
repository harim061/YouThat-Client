import { styled } from 'styled-components';

export const UserDescriptionWrapper = styled.section`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 13rem;
`;
export const UserProfile = styled.div`
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
export const DescriptonTitle = styled.h2`
  color: #5b586c;
  font-size: 2.5rem;
  font-weight: 600;
`;
export const ProfileDescription = styled.p`
  color: #aaa;
  font-size: 2rem;
  font-weight: 600;
`;
export const ProfileImg = styled.img`
  width: 20rem;
  height: 20rem;
`;
export const UserGrade = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
`;
export const DescriptionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  color: #ef7a96;
  text-align: center;
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Grade = styled.p`
  font-size: 3rem;
`;
export const GradeComment = styled.p`
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridWrapper = styled.div`
  margin: 5rem 3rem;
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
