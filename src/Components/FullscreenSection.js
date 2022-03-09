import styled from 'styled-components';

export default function FullscreenSection(params) {


    return (
        <FullscreenSectionWrapper id={params.id} style={params.style}>
            <FullscreenSectionInner >
                {params.children}
                
            </FullscreenSectionInner>
        </FullscreenSectionWrapper>

    )
};
const FullscreenSectionWrapper = styled.section`
    
    width:100%;
    height:100vh;
    background-color:var(--secondary-background);
    display:flex;
    justify-content:center;
    align-items:center;
    scroll-snap-align:center;
    scroll-snap-stop:normal;
    

    @media(min-width:768px){
    }

`;
const FullscreenSectionInner = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
    color:var(--primary-color);
    font-family:var(--secondary-font);
    font-size:1.5rem;
    @media (min-width: 768px) {
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        padding:2rem 2rem;
    }
`;

