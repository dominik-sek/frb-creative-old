import Logo from 'Components/Logo';
import styled from 'styled-components';
import bathroom2 from '../assets/images/bathroom2.jpg';


const Home = () => {
    return ( 
        <Wrapper>
        <Layer>
            <Body>
                <Logo style={{fontSize:'7vmax', marginRight:0}}/>
                <div className="desc">
                    <span>Firma Remontowo-Budowlana</span>
                </div>
                <OrderButton href="#contact" >Zamów usługę</OrderButton>

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
    background-attachment: fixed;

    @media (min-width: 768px) {
    }

`;

const Body = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    & .desc{
        font-size:3vmax;
    }   
`;

const OrderButton = styled.a`

    background: var(--primary-color);
    color: var(--secondary-color);
    padding: 10px;
    border-radius: 5px;
    font-size: 2vmax;
    font-weight: bold;
    text-decoration: none;
    margin: 10px;
    cursor: pointer;
    width:100%;
    @media (min-width: 768px){
        width:50%;
        font-size: 1.5vmax;
    }
`

export default Home;