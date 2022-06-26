import Button from './button';
import styled from "styled-components";

const Numpad = () => {
    return(
        <Wrapper>
          <Button>C</Button>
          <Button>MR</Button>
          <Button>MS</Button>
          <Button color='orange'>/</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button color='orange'>x</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button color='orange'>-</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button color='orange'>+</Button>
          <Button className='zero'>0</Button>
          <Button>.</Button>
          <Button color='green'>=</Button>
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