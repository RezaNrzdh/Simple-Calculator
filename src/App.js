import { Fragment, useEffect, useState } from 'react';
import {createGlobalStyle} from 'styled-components';

import Container from './hoc/container';

import Screen from './components/screen';
import Numpad from './components/numpad';

const App = () => {

    const [number, setNumber] = useState(0);
    const [result, setResult] = useState(0);
    const [memory, setMemory] = useState(0);

    const SumHandler = () => {

    }

    const SubHandler = () => {
      
    }

    const DividedHandler = () => {
      
    }

    const MultiHandler = () => {
      
    }

    const NumberHandler = (num) => {
      console.log(num);
      setNumber(num);
    }

    const PointHandler = () => {

    }

    const ClearHandler = () => {

    }

    const SaveMemoryHandler = () => {

    }

    const ClearMemoryHandler = () => {

    }

    const ResultHandler = () => {

    }

    return(
      <Fragment>
        <GlobalStyle />
        <Container>
          <Screen result={number} />
          <Numpad 
            point={PointHandler}
            clear={ClearHandler}
            saveMem={SaveMemoryHandler}
            clearMem={ClearMemoryHandler}
            num={NumberHandler}
            sum={SumHandler}
            sub={SubHandler}
            divided={DividedHandler}
            multi={MultiHandler}
            result={ResultHandler}/>
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
    src: url('fonts/Ubuntu-Regular.ttf');
  }
`;

export default App;