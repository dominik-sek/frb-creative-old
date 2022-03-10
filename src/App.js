import FullscreenSection from "Components/FullscreenSection";
import Navbar from "Components/Navbar";
import styled from "styled-components";
import React from "react";
import { Home, About, Gallery, Offers, Contact } from "./index.js";
function App() {

  return (

    <Wrapper>
      <Navbar />
      <SectionWrapper>

        <FullscreenSection  id="home">
          <Home />
        </FullscreenSection>

        <FullscreenSection  id="about">
          <About />
        </FullscreenSection>

        <FullscreenSection  id="gallery">
          <Gallery />
        </FullscreenSection>

        <FullscreenSection  id="offer">
          <Offers />
        </FullscreenSection>

        <FullscreenSection  id="contact">
          <Contact />
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
    ${'' /* margin: 0 10% 0 10%; */}
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
