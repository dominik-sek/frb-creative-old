import FullscreenSection from "Components/FullscreenSection";
import Navbar from "Components/Navbar";
import styled from "styled-components";
function App() {
  return (

    <Wrapper>
    <Navbar/>
      <FullscreenSection style={{background:'brown'}} id="home"> hello </FullscreenSection>
      <FullscreenSection style={{background:'gray'}} id="about"> World </FullscreenSection>
      <FullscreenSection style={{background:'crimson'}} id="gallery"> World </FullscreenSection>
      <FullscreenSection style={{background:'#555555'}} id="offer"> World </FullscreenSection>
      <FullscreenSection style={{background:'black'}} id="contact"> World </FullscreenSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-background);
  `;


export default App;
