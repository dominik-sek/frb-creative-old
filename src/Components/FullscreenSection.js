import styled from 'styled-components';
import UpDownArrow from './UpDownArrow';
import React from 'react';

export default function FullscreenSection(params) {


    return (
        <FullscreenSectionWrapper id={params.id} style={params.style}>
                {params.children}
                
                {params.id === 'home' ? <UpDownArrow href={'#about'} orientation={"down"} /> : null}
                {params.id === 'contact' ? <UpDownArrow href={'#home'} orientation={"up"}/> : null}
                

        </FullscreenSectionWrapper>

    )
};
const FullscreenSectionWrapper = styled.section`
    
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    scroll-snap-align:center;
    scroll-snap-stop:normal;
    position:relative;

    @media(min-width:768px){
    }

`;