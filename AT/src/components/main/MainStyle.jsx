import styled, { keyframes } from 'styled-components';

export const Gradient = keyframes`
    0% {
      background-position: 100% 0%;
    }
    50% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 100% 0%;
    
  }

`;
export const Container = styled.div`
  background: linear-gradient(
    117deg,
    #e4b49a 0%,
    #ee6d94 41.49%,
    #bc9be7 80.03%,
    #884def 100%,
    rgba(74, 81, 245, 0.8) 76.98%
  );
  background-size: 200% 200%;
  animation: ${Gradient} 6s ease infinite;

  /*layout*/
  :nth-child(1) {
    padding-top: 160px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Ment = styled.div`
  color: #fff;
  text-align: center;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Title = styled.div`
  color: #fff;
  text-align: center;
  font-size: 80px;
  font-style: normal;
  font-weight: 800;

  /*layout*/
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const Input = styled.input`
  width: ${(props) => props.width || '1003px'};
  height: ${(props) => props.height || '64px'};
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);

  /* layout */
  margin-top: 30px;
  padding: 14px 30px 14px 30px;
  ::placeholder {
    color: #5b586c;
    font-size: 30px;
    font-weight: 400;
  }
`;

export const MouseImg = styled.img`
  margin-top: 60px;
  margin-bottom: 40px;
  animation: floating infinite linear;
  animation-duration: 2.6s;

  @keyframes floating {
    0%,
    100% {
      transform: translateY(-10%);
    }
    50% {
      transform: translateY(10%);
    }
  }
`;
