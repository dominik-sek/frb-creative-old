import styled from 'styled-components';
import bathroom2 from '../assets/images/bathroom2.jpg';
import Text from '../Components/Text'
import Title from 'Components/Title';




const About = () => {
    return ( 
        <Wrapper>
        <Layer>

        <Title>Dlaczego my ?</Title>

            <Body>
                    <Text>
                    Nasza firma powstała w 2007 roku.
                    Dzięki 13 lat doświadczeń udało nam się wypracować takie standardy pracy, że nawet najbardziej skomplikowane zlecenie jesteśmy w stanie wykonać fachowo i terminowo.
                    </Text>

                <Text>
                Wychodzimy na wprost oczekiwaniom klienta, pomagamy w doborze materiałów, na życzenie zapewniamy transport materiałów na budowę.
                </Text>

                    <Text>
                    Jesteśmy małą firmą bez zbędnych stanowisk biurowych, dlatego też ceny naszych usług są bardzo konkurencyjne.
                    </Text>

                <Text>
                Zajmujemy się kompleksowymi wykończeniami i remontami wnętrz. Wykonujemy także prace wykończeniowe na zewnątrz budynków.               
                 </Text>
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
    flex-direction:column;
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
    display:grid;
    grid-template-rows:repeat(4, 1fr);
    grid-gap:2em;
    top:5%;
    position:relative;
    height:80%;
    justify-content:center;
    

    @media (min-width: 768px) {
        width:70%;
        top:10%;
        grid-template-columns:1fr 1fr;
        grid-template-rows:1fr 1fr;
    }

`;



export default About;