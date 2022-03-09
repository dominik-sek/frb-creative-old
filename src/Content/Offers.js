import styled,{keyframes} from 'styled-components';
import bathroom2 from '../assets/images/bathroom2.jpg';
import bathroom from '../assets/images/bathroom.jpg';
import Text from '../Components/Text'
import Title from 'Components/Title';

const curtain = keyframes `
    0% {
        grid-gap: 100vw;
        opacity:0;
    }
    100% {
        grid-gap: 0; 
        opacity:1;
    }
`



const Offers = () => {
    return ( 
        <Wrapper>
        <Layer>

        <Title>Nasza Oferta</Title>

            <Body>
                    
                    <div class="desc">
                    Świadczymy usługi remontowo - budowlane ze szczególnym uwzględnieniem prac związanych z wykończeniem wnętrz.<br/><br/>
                    Zakres świadczonych usług:
                    <ul>

                        <li>Kompleksowe wykończenia wnętrz</li>
                        <li>Łazienki z projektów</li>
                        <li>glazura i terakota</li>
                        <li>adaptacja poddaszy</li>
                        <li>Sufity, ściany i zabudowy z g-k</li>
                        <li>Gładzie</li>
                        <li>Malowanie, tapetowanie</li>
                        <li>Montaż okien, drzwi, parapetów itp.</li>
                    </ul>

                    </div>

                    <div class="photo">
                        <img src={bathroom2} alt=""/>
                    </div>
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


display: grid; 

    top:5%;
    position:relative;
    height:80%;
    width:70%;
    margin:0 10% 0 10%;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-gap: 2em;
        grid-template-areas: 
            "desc . photo"
            "desc . photo"
            ". . .";


    @media (min-width: 768px) {
        
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-gap: 2em;
        grid-template-areas: 
            "desc . photo"
            "desc . photo"
            ". . .";

    }



    & .photo{
        grid-area: photo;
        > img{
            object-fit: cover;
            object-position: center;
            max-height: 100%;
            height:80%;
            margin:0 auto;

        }
    }
    & .desc{
        grid-area: desc;
        display:flex;
        flex-direction:column;
        justify-content:center;
    }

`;



export default Offers;