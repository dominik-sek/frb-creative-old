import styled from 'styled-components';
const Title = (props) => {
    return ( 

        <Body>

        {props.children}
        </Body>
    );
}

const Body = styled.div`
    top:5%;
    position:relative;
    width:70%;
    font-size:2em;
    text-align:center;
    @media( min-width: 768px){
        font-size:4vmax;
        text-align:left;

    }
`;
export default Title;