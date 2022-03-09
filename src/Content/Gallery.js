import Logo from 'Components/Logo';
import styled from 'styled-components';
import bathroom2 from '../assets/images/bathroom2.jpg';
const HomeContent = () => {
    return ( 
        <Content>
            <img width={"100%"} src={bathroom2} alt="" />
            <Text>
            <Logo style={{height:"fit-content", fontSize:'10rem'}}/>
                <span>Firma Remontowo - Budowlana</span>
            </Text>
        </Content>

      );
}

const Text = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    position:absolute;
    color:white;
    width:100%;
    
    
    
    * {
        color:var(--primary-background);
        font-weight:bold;

    }

    & > span {
        font-size:3rem;
        font-family:var(--primary-font);
    }
    `
const Content = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
    font-family:var(--primary-font);
    font-size:1.5rem;
    
    & img{
            display:none;
        }

    @media (min-width: 768px) {
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        & img{
            display:block;
            width:100%;
            height:100%;
            
        }

    }
`;


 
export default HomeContent;