import { styled } from 'styled-components';
import Bg from '../../img/main/Bg.png';

export const Container = styled.div`
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-size: 100% 150%;

  /*layout*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 260px;
`;

export const Ment = styled.div`
  color: #5b586c;
  text-align: center;
  font-size: 35px;
  font-weight: 600;

  /*layout*/
  margin-bottom: 100px;
  margin-top: ${(props) => props.mt};
`;

export const Youtube = styled.div`
  width: 638px;
  height: 385px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;

  /*layout*/
  margin-top: 70px;
  margin-bottom: 70px;
`;

export const Btn1 = styled.button`
  width: 502px;
  height: 56px;
  background-color: #eb6b92;
  box-shadow: 0px 4px 10px rgba(235, 107, 146, 0.25);
  border-radius: 43px;

  /*layout*/
  margin-bottom: 40px;

  /*text*/
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const HowDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const How = styled.div`
  width: 400px;
  height: 530px;
  border-radius: 30px;
  background: #fff;
  box-sizing: border-box;
  /*layout*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 50px 0 50px;
  position: relative;
`;

/* step 부분 */

export const StepT = styled.div`
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(92deg, #f2a99e 2.16%, #ed6f96 15.99%, #deb6de 30.1%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 auto;
`;

export const StepD = styled.div`
  color: #5b586c;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 300px;
  word-break: keep-all;
  margin-bottom: 50px;
`;

export const SDetail = styled.div`
  color: #aaa;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  width: 300px;
  height: 114px;
  word-break: keep-all;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const STag = styled.img`
  margin-top: -10px;
  width: 250px;
  height: fit-content;
  position: absolute;
  left: 70px;
`;

export const Btn2 = styled.button`
  width: 300px;
  height: 56px;
  background-color: #eb6b92;
  box-shadow: 0px 4px 10px rgba(235, 107, 146, 0.25);
  border-radius: 43px;

  /*layout*/
  margin-bottom: 40px;
  /*positioning*/
  position: absolute;
  bottom: -15px;

  /*text*/
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SNext = styled.img`
  margin-left: 20px;
  width: 50px;
  height: 50px;
`;

export const SPrev = styled.img`
  margin-right: 20px;
  width: 50px;
  height: 50px;
`;
