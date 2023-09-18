import styled from 'styled-components';

export const UserSub = styled.section`
  width: 30em;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const UserSubRow = styled.div`
  font-size: 2rem;
  font-family: Inter;

  font-style: normal;
  font-weight: 700;
  line-height: normal;

  display: flex;
  justify-content: space-between;
`;
export const UserSubRowTitle = styled.p`
  color: #aaa;
  font-size: 2rem;
  font-family: Inter;

  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const UserSubRowContent = styled.p`
  background: linear-gradient(91deg, #f2a99e 1.94%, #ed6f96 48.06%, #deb6de 95.16%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
