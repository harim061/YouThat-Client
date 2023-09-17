import styled, { keyframes } from 'styled-components';

export const moveForever = keyframes`
  0% {
    transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
`;

export const Waves = styled.svg`
  position: absolute;

  margin-top: 130px;
  & .parallax > use {
    animation: ${moveForever} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }

  & .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }

  & .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }

  & .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }

  & .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }

  @media (max-width: 768px) {
    height: 40px;
    min-height: 40px;
  }
`;

export const FTitle = styled.div`
  color: #ffffff;
  text-align: center;
  font-size: 80px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 10px;

  position: relative;
  top: 370px;
  left: 50%;
  transform: translateX(-50%); // 가운데 정렬을 위한 코드
  z-index: 2;
`;

export const FName = styled.div`
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  position: relative;
  top: 380px;
  left: 50%;
  transform: translateX(-50%); // 가운데 정렬을 위한 코드
  z-index: 2;
`;
