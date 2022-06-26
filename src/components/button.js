import styled from 'styled-components';
import { Color } from '../help/color';

const Button = ({
    width = '100%',
    size = 'normal',
    color = 'gray',
    disable = false,
    className = null,
    ...props
}) => {
    return(
        <Wrapper width={width} size={size} color={color} disabled={disable} className={className}>
            {props.children}
        </Wrapper>
    );
}

export default Button;

const Wrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${ props => props.width };
    border: transparent;
    height: ${ props => props.size === 'normal' ? '80px' : '40px'};
    background-color: ${ props => Color[props.color].main };
    transition: all ease-in-out 0.3s;
    border-radius: 32px;
    cursor: pointer;
    color: ${ props => Color[props.color].text };
    &:hover{
        background-color: ${ props => Color[props.color].hover };
    }
`;