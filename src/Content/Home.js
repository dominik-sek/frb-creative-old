import Logo from 'Components/Logo';
import styled,{keyframes} from 'styled-components';
import bathroom2 from '../assets/images/bathroom2.jpg';

const enlargeBackground = keyframes`
    from{
        background-size:100% 100%;
    }
    to{
        background-size:150% 150%;
    }
`;

const Home = () => {
    return ( 
        <Wrapper>
        <Layer>
            <Body>
                <Logo style={{fontSize:'3em'}}/>
                <span style={{fontSize:'1.5em'}}>Firma Remontowo-Budowlana</span>
            </Body>
            </Layer>
        </Wrapper>

      );
}

const Layer = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background:rgba(0,0,0,0.5);
`
const Wrapper = styled.div`
    background:purple;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
    background:url(${bathroom2});
    background-color: #cccccc; 
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover; 

    

    @media (min-width: 768px) {
        background-attachment: fixed;
    }

`;

const Body = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;



export default Home;