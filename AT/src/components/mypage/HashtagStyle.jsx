import styled from 'styled-components';

export const TagList = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
`;
export const SelectedContentTag = styled.p`
  background: linear-gradient(92deg, #f2a99e 2.11%, #ed6f96 50.54%, #deb6de 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: Inter;
  font-size: 2.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  cursor: pointer;
  width: 23rem;
  text-align: center;
`;
export const InitialContentTag = styled.p`
  background: #aaa;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: Inter;
  font-size: 2.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  cursor: pointer;
  width: 23rem;
  text-align: center;
`;
