import { Fragment, useEffect, useState } from 'react';
import {createGlobalStyle} from 'styled-components';

import Container from './hoc/container';

import Screen from './components/screen';
import Numpad from './components/numpad';

const App = () => {

    const [result, setResult] = useState();
    const [memory, setMemory] = useState();

    return(
      <Fragment>
        <GlobalStyle />
        <Container>
          <Screen />
          <Numpad />
        </Container>
      </Fragment>
    );
}

const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: myFont;
    background-color: #1380A7;
  }

  #root{
    display: flex;
    height: 100%;
  }

  @font-face {
    font-family: myFont;
    src: url('../public/fonts/Ubuntu-Regular.ttf');
  }
`;

export default App;