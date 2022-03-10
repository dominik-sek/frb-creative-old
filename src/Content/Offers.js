import styled from 'styled-components';
import bathroom2 from '../assets/images/bathroom2.jpg';
import Title from 'Components/Title';





const Offers = () => {
    return (
        <Wrapper>
            <Layer>

                <Title>Nasza Oferta</Title>

                <Body>

                    <div className="desc">
                        <div className="services">
                            <span>Świadczymy usługi remontowo - budowlane ze szczególnym uwzględnieniem prac związanych z wykończeniem wnętrz.</span>
                            <span>Zakres świadczonych usług:</span>
                        </div>
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

                    <div className="photo">
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
    position:relative;
    height:70%;
    width:70%;
    
    
    margin:0 10% 0 10%;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-gap: 2em;
        grid-template-areas: 
            ". ."
            "desc desc"
            ". .";


    @media (min-width: 768px) {
        grid-template-columns: 0.7fr 0.8fr 2fr;
        grid-template-rows: 0.2fr 0.5fr 0.5fr 0.5fr;
        grid-gap: 2em;
        grid-template-areas: 
            ". . ."
            "desc desc photo"
            "desc desc photo"
            ". . photo";
    }

    & .services{
        display:flex;
        flex-direction: column;
        top:10%;
         & span {
            margin:5% 0 5% 0;
            @media (min-width: 768px) {
                margin-top:10%;
            }
         }
    }

    & .photo{
        grid-area: photo;
        display:none;
        @media (min-width: 768px) {
            display:flex;
            width:100%;
            
            > img{
                width:100%;
                min-height: 100%;
                height:auto;
            }
        }
    }
    & .desc{
        grid-area: desc;
        @media (min-width: 768px){
            font-size: 1.75vh;
        }
        & ul{
                margin-top:10%;
            }
    }

`;



export default Offers;