import React, {ReactChild, ReactFragment} from 'react';
import {Container, CssBaseline, ThemeProvider} from '@material-ui/core';
import {theme} from './theme';
import './assets/style/main.scss';

import {Header} from './components/Header';
import {Footer} from './components/Footer';

interface IProps {
  children: ReactChild | ReactFragment;
}

const App: React.FC<IProps> = ({children}) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <Container maxWidth="xl" style={{padding: 40}}>
      {children}
    </Container>
    <Footer />
  </ThemeProvider>
);

export default App;
