import styled from 'styled-components';

const Container = (props) => {
    return(
        <Wrapper>
            {props.children}
        </Wrapper>
    );
}

export default Container;

const Wrapper = styled.section`
    margin: auto;
    display: flex;
    width: 414px;
    padding: 24px;
    border-radius: 40px;
    flex-direction: column;
    background-color: white;
    box-sizing: border-box;
`;