import styled from 'styled-components';

const Logo = (props) => {
    return (
        <Body style={props.style} href={props.href} onClick={props.onClick}>
            
            <span>C</span>
            reati
            <span>V</span>
            e

        </Body>
     );
}

const Body = styled.a`

    font-family:var(--secondary-font);
    font-size:5vmax;
    display:flex;
    width:15%;
    justify-content:center;
    align-items:center;
    position:relative;
    & > span {
        color:var(--primary-color);
        font-family:var(--secondary-font);
    }
    &:hover{
        cursor:default;
        color:var(--secondary-color);
    }
    @media(min-width:768px){
        font-size:4vmax;
        margin:0;
    }
`
 
export default Logo;