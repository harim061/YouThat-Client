import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import * as N from './NavStyle';
import { useRecoilValue } from 'recoil';
import { visibilityState } from '../../atom/visibilityState/visibilityState';

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const isVisible = useRecoilValue(visibilityState);

  const MENU_LIST = ['Main', 'Login', 'Search', 'My Page'];

  function handleMovePage(menu) {
    switch (menu) {
      case 'Login':
        navigate('/login');
        break;
      case 'My Page':
        navigate('/mypage');
        break;
      case 'Search':
        navigate('/search');
        break;
      case 'Main':
        navigate('/');
        break;
      default:
        navigate('/');
    }
  }

  return (
    <>
      {(location.pathname === '/' && !isVisible) || location.pathname !== '/' ? (
        <N.NavContainer>
          <N.NavFixed>
            <N.NavWrapper>
              <N.MenuUl>
                {MENU_LIST.map((menu, idx) => (
                  <N.MenuLi key={idx} onClick={() => handleMovePage(menu)}>
                    {menu}
                  </N.MenuLi>
                ))}
              </N.MenuUl>
            </N.NavWrapper>
            <N.NavBackground></N.NavBackground>
          </N.NavFixed>
        </N.NavContainer>
      ) : null}
    </>
  );
}
