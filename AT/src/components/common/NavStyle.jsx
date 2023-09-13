import { styled } from 'styled-components';

export const NavContainer = styled.header`
  z-index: 1;
  width: 80rem;
  height: 60px;
  margin: 0 auto;

  position: relative;
  top: 3rem;
`;
export const NavFixed = styled.header`
  width: 80rem;
  height: 60px;
  position: fixed;
`;

export const NavWrapper = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const MenuUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;

  font-size: 2rem;
  color: white;
`;

export const MenuLi = styled.li``;

export const NavBackground = styled.header`
  position: absolute;

  width: 100%;
  height: 100%;
  border-radius: 100px;
  background: linear-gradient(117deg, #f3ae9f 0%, #ee6d94 41.49%, #e1b5d4 80.03%, #deb7e1 100%);
  filter: blur(0.2rem);
  z-index: 1;
`;
