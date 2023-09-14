import Router from './Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import { GlobalStyle } from './style/globalStyle';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}
