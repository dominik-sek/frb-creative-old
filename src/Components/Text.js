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
    text-align:center;
    margin-top:10px;
    margin-bottom:10px;
    @media(min-width:768px){
        font-size:1.5em;
    }
`;

export default Text;