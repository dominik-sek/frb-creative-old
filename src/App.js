import FullscreenSection from "Components/FullscreenSection";
import Navbar from "Components/Navbar";
import styled from "styled-components";
function App() {
  return (

    <Wrapper>
    <Navbar/>

    <FullscreenSection>
      hello
    </FullscreenSection>

    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--primary-background);
  `;

export default App;
