import styled from 'styled-components';
const Text = (props) => {
    return ( 
        <Body>
            {props.children}
        </Body>
    );
}
const Body = styled.div`
    font-size:1em;
    margin-top:10px;
    margin-bottom:10px;
    justify-self: center;
    text-align:center;
    @media(min-width:768px){
        font-size:1.5vw;
        text-align:left;
    }
`;

export default Text;