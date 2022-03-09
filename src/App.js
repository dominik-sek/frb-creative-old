import FullscreenSection from "Components/FullscreenSection";
import Navbar from "Components/Navbar";
import styled from "styled-components";
import React, { useEffect } from "react";

function App() {


  return (

    <Wrapper>
    <Navbar/>
    <SectionWrapper>
    
      <FullscreenSection id="home"> 
    1
      </FullscreenSection>

      <FullscreenSection  id="about"> 
    2
      </FullscreenSection>

      <FullscreenSection  id="gallery"> 
      3 
      </FullscreenSection>

      <FullscreenSection  id="offer">
       4 
       </FullscreenSection>

      <FullscreenSection id="contact"> 
      5 
      </FullscreenSection>

    </SectionWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-background);
  @media (min-width: 768px) {
    margin: 0 10% 0 10%;
  }
  `;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  > * {

    &:last-child {
        & .progress-bar {
        height:100vh;
    }
    }
  }

`;

export default App;
