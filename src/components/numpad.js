import Button from './button';
import styled from "styled-components";

const Numpad = (props) => {
    return(
        <Wrapper>
          <Button onClick={props.clear}>C</Button>
          <Button onClick={props.clearMem}>MR</Button>
          <Button onClick={props.saveMem}>MS</Button>
          <Button onClick={props.divided} color='orange'>/</Button>
          <Button onClick={props.num}>7</Button>
          <Button onClick={props.num}>8</Button>
          <Button onClick={props.num}>9</Button>
          <Button onClick={props.multi} color='orange'>x</Button>
          <Button onClick={props.num}>4</Button>
          <Button onClick={props.num}>5</Button>
          <Button onClick={props.num}>6</Button>
          <Button onClick={props.sub} color='orange'>-</Button>
          <Button onClick={props.num}>1</Button>
          <Button onClick={props.num}>2</Button>
          <Button onClick={props.num}>3</Button>
          <Button onClick={props.sum} color='orange'>+</Button>
          <Button onClick={props.num} className='zero'>0</Button>
          <Button onClick={props.point}>.</Button>
          <Button onClick={props.result} color='green'>=</Button>
        </Wrapper>
    );
}

export default Numpad;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 80px 80px 80px 80px;
    grid-gap: 16px;
    .zero{
        grid-column: 1/3;
    }
`;