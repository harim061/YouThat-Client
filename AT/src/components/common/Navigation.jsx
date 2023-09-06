import { useNavigate } from 'react-router-dom';
import * as N from './NavStyle';

export default function Navigation() {
  const navigate = useNavigate();
  const MENU_LIST = ['Login', 'My Page', 'Search', 'How to'];

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
  return (
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
  );
}
