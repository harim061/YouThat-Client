import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Div = styled.div`
  width: 700px;
  height: 384px;
  /*layout*/
  margin-top: 100px;
  margin-bottom: -180px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const Title = styled.div`
  color: #5b586c;
  text-align: center;
  font-size: 30px;
  font-weight: 600;

  margin-bottom: 50px;
`;
export const Detail = styled.div`
  color: #aaa;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 30px;
  line-height: 30px;
`;
export const Btn = styled.button`
  width: 300px;
  height: 56px;
  background-color: #eb6b92;
  box-shadow: 0px 4px 10px rgba(235, 107, 146, 0.25);
  border-radius: 43px;

  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;
