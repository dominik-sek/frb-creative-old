import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiArrowLeft } from 'react-icons/hi';
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar(params) {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState([false, false, false, false, false]);

    const toggleActive = (index) => {
        let newActive = [false, false, false, false, false];
        newActive[index] = true;
        setActive(newActive);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {

          const home = document.querySelector("#home");
          const about = document.querySelector("#about");
          const gallery = document.querySelector("#gallery");
          const offer = document.querySelector("#offer");
          const contact = document.querySelector("#contact");
        
          //this is just in case the user changes height
          const homeOffset = home.offsetTop;
          const aboutOffset = about.offsetTop;
          const galleryOffset = gallery.offsetTop;
          const offerOffset = offer.offsetTop;
          const contactOffset = contact.offsetTop;
            
          const currentScroll = window.scrollY;
    
          if (currentScroll >= homeOffset - 50 && currentScroll < aboutOffset - 50) {
            toggleActive(0);
          }
          if (currentScroll >= aboutOffset - 50 && currentScroll < galleryOffset - 50) {
            toggleActive(1);
          }
          if (currentScroll >= galleryOffset - 50 && currentScroll < offerOffset - 50) {
            toggleActive(2);
          }
          if (currentScroll >= offerOffset - 50 && currentScroll < contactOffset - 50) {
            toggleActive(3);
          }
          if (currentScroll >= contactOffset - 50) {
            toggleActive(4);
          }
          
        })}, []);
    


    return (
        <NavWrapper>
            <StyledGiHamburgerMenu onClick={() => setIsOpen(true)} />
            <Logo href="#home" style={{cursor:'pointer'}} onClick={() => toggleActive(0)} />
            {/* mobile drawer: */}
            <Drawer open={isOpen}>
            <DrawerItem onClick={() => setIsOpen(false)}>
            <StyledHiArrowLeft style={{width:'100%', height:'100%'}} />
            </DrawerItem>
            <hr style={{width:"100%", opacity:0.2}}/>

                <DrawerItem onClick={() => setIsOpen(false)}>
                    <a href="#home">Strona główna</a>
                </DrawerItem>
                <DrawerItem onClick={() => setIsOpen(false)}>
                    <a href="#about">O nas</a>
                </DrawerItem>
                <DrawerItem onClick={() => setIsOpen(false)}>
                    <a href="#gallery">Galeria</a>
                </DrawerItem>
                <DrawerItem onClick={() => setIsOpen(false)}>
                    <a href="#offer">Oferta</a>
                </DrawerItem>
                <DrawerItem onClick={() => setIsOpen(false)}>
                    <a href="#contact">Kontakt</a>
                </DrawerItem>
                <hr style={{width:"100%", opacity:0.2}}/>
                
                <Logo href="#home" style={{margin:0}} onClick={() => {toggleActive(0); setIsOpen(false)}} />


            </Drawer>

            <StyledNav>

                <StyledUl>

                    <li className={active[0] ? 'active' : 'inactive'}>
                        <a href='#home'>Strona główna</a>
                    </li>
                     
                    <li className={active[1] ? 'active' : 'inactive'} >
                    <a href='#about' >O nas</a>
                    </li>

                    <li className={active[2] ? 'active' : 'inactive'}>
                    <a href='#gallery' >Galeria</a>
                    </li>

                    <li className={active[3] ? 'active' : 'inactive'}>
                    <a href='#offer'>Oferta</a>
                    </li>

                    <li className={active[4] ? 'active' : 'inactive'}>
                    <a href='#contact'>Kontakt</a>
                    </li>
                </StyledUl>

            </StyledNav>
        </NavWrapper>
    )
};


const NavWrapper = styled.div`
    display: flex;
    height:10vh;
    width:100%;
    justify-content:space-between;
    z-index:999;
    top:0;
    position:sticky;
    background:var(--secondary-background);

    
`;
const StyledGiHamburgerMenu = styled(GiHamburgerMenu)`
    color:var(--primary-color);
    width:10%;
    height:100%;
    margin-left:1rem;
    cursor:pointer;
    @media (min-width: 768px) {
        display:none;
    }
   
`
const StyledHiArrowLeft = styled(HiArrowLeft)`
    cursor:pointer;
    width:100%;
    height:10%;
    margin:1rem 0;
    z-index:999;
`

const Drawer = styled.div`
    position:absolute; 
    width:100%;
    height:100vh;
    background-color:var(--secondary-background);
    display:flex;
    align-items:center;
    flex-direction:column;
    text-align:center;
    color:var(--primary-color);
    font-family:var(--secondary-font);
    font-size:1.5rem;
    z-index:999;
    transform:translateX(${props => props.open ? '0' : '-100%'});    
    transition:transform 0.3s ease-in-out;
    
    & a{
        text-decoration:none;        
        
    }
    @media (min-width: 768px) {
        display:none;
    }
`;
const DrawerItem = styled.div`
    height:10vh;
    width:100%;
    margin:1.2rem 0;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (min-width:768px){
        display:none;
    }
`;


const StyledNav = styled.nav`
    display:none;
    @media (min-width: 768px) {
        width:85%;
        height:100%;
        display:flex;
        align-items:center;

    }
`


const StyledUl = styled.ul`

    display:none;
    @media (min-width: 768px) {
        display:flex;
        width:100%;
        height:100%;
        align-items:center;
        list-style-type:none;
        padding:0;
        margin:3rem 0;
       
        & .active{
            box-shadow:0px 2px 0px var(--primary-color);
            & > a{
                color:var(--primary-color);
            }

        }

        & > li {
            height:100%;
            width:25%;
            display:inline-block;
            justify-content:center;
            align-items:center;
            position:relative;
            box-sizing: border-box;
            box-shadow:0px 2px 0px rgba(0,0,0,0.5);
            opacity:0.8;
            &:after{
                opacity:0;
                content:'';
                width:0%;
                height:2%;
                left:0;
                bottom:0;
                position:absolute;
                box-shadow:0px 2px 0px var(--primary-color);
                transition: all 0.3s ease-in-out;
            }

    

            &:hover {

                &:after{
                    opacity:1;
                    width:100%;
                }
                
                & > a {
                color:var(--primary-color);
                }

            }
            

        }
    }
`
