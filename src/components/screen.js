import styled from "styled-components";

const Screen = (props) => {
    return(
        <Wrapper>
            {props.result}
        </Wrapper>
    );
}

export default Screen;

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 164px;
    margin-bottom: 24px;
    font-family: myFont;
    font-size: 48px;
    color: #17181A;
`;