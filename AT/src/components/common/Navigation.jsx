import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Element } from 'react-scroll';
import * as N from './NavStyle';
import throttle from 'lodash/throttle'; // lodash에서 throttle 함수를 가져옴

export default function Navigation() {
  const navigate = useNavigate();
  const MENU_LIST = ['Login', 'My Page', 'Search', 'How to'];

  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = throttle(() => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos < prevScrollPos) {
      setIsNavVisible(true);
    } else {
      setIsNavVisible(false);
    }

    setPrevScrollPos(currentScrollPos);
  }, 100); // 100밀리초마다 한 번씩 호출되도록 스로틀링

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

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
      case 'How to':
        navigate('/howto');
        break;
      default:
        navigate('/');
    }
  }

  const navStyle = {
    display: isNavVisible ? 'block' : 'none',
  };

  return (
    <Element name="nav">
      <N.NavContainer style={navStyle}>
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
    </Element>
  );
}
