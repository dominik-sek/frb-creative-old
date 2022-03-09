import { AiOutlineArrowDown } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';

const jumpUpDown = keyframes`
    from{
        transform:translateY(0);
    }
    to{
        transform:translateY(-10px);
    }
`;


const UpDownArrow = (props) => {
    return (
        <StyledLink href={props.href}>
            <StyledAiOutlineArrowDown orientation={props.orientation} size={70} />
        </StyledLink>
    );
}
const StyledAiOutlineArrowDown = styled(AiOutlineArrowDown)`
    cursor:pointer;
    & > path {
        fill:var(--primary-color);
    }
    position:absolute;
    bottom:0;
    transform:${props => props.orientation === "up" ? "rotate(180deg)" : ""};
    @media(min-width:768px){
        &:hover{
            animation:${props => props.orientation === 'down' ? jumpUpDown : ''} 0.3s infinite alternate;
        }

    }
`
const StyledLink = styled.a`
    position:absolute;
    bottom:0;
    width:fit-content;
    height:fit-content;
`;



export default UpDownArrow;