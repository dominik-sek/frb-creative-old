import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiArrowLeft } from 'react-icons/hi';
import React, { useState, useEffect } from 'react';

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
    
          if (currentScroll >= homeOffset - 100 && currentScroll < aboutOffset - 100) {
            toggleActive(0);
          }
          if (currentScroll >= aboutOffset - 100 && currentScroll < galleryOffset - 100) {
            toggleActive(1);
          }
          if (currentScroll >= galleryOffset - 100 && currentScroll < offerOffset - 100) {
            toggleActive(2);
          }
          if (currentScroll >= offerOffset - 100 && currentScroll < contactOffset - 100) {
            toggleActive(3);
          }
          if (currentScroll >= contactOffset - 100) {
            toggleActive(4);
          }
          
        })}, []);
    


    return (
        <NavWrapper>
            <StyledGiHamburgerMenu onClick={() => setIsOpen(true)} />
            <Logo href="#home" onClick={() => toggleActive(0)}>
                <span>C</span>
                reati
                <span>V</span>
                e
            </Logo>
            {/* mobile drawer: */}
            <Drawer open={isOpen}>
                <StyledHiArrowLeft onClick={() => setIsOpen(false)} />

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

                <Logo href="#home" onClick={() => toggleActive(0)}>

                    <span>C</span>
                    reati
                    <span>V</span>
                    e
                </Logo>


            </Drawer>

            <StyledNav>

                <StyledUl>

                    <li className={active[0] ? 'active' : 'inactive'} onClick={() => toggleActive(0)}>
                        <a href='#home'>Strona główna</a>
                    </li>
                     
                    <li className={active[1] ? 'active' : 'inactive'} onClick={() => toggleActive(1)}>
                    <a href='#about' >O nas</a>
                    </li>

                    <li className={active[2] ? 'active' : 'inactive'} onClick={() => toggleActive(2)}>
                    <a href='#gallery' >Galeria</a>
                    </li>

                    <li className={active[3] ? 'active' : 'inactive'} onClick={() => toggleActive(3)}>
                    <a href='#offer'>Oferta</a>
                    </li>

                    <li className={active[4] ? 'active' : 'inactive'} onClick={() => toggleActive(4)}>
                    <a href='#contact'>Kontakt</a>
                    </li>
                </StyledUl>

            </StyledNav>
        </NavWrapper>
    )
};

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
    background-color:black;
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
    
    @media (min-width: 768px) {
        display:none;
    }
`;
const DrawerItem = styled.div`
    background-color:var(--primary-color);
    width:100%;
    height:100px;
    margin:1rem 0;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (min-width:768px){
        display:none;
    }
`;

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
const StyledNav = styled.nav`
    display:none;
    @media (min-width: 768px) {
        width:85%;
        height:100%;
        display:flex;
        align-items:center;

    }
`

const Logo = styled.a`

    font-family:var(--secondary-font);
    font-size:1.5rem;
    display:flex;
    width:15%;
    margin-right:1.25rem;
    justify-content:center;
    align-items:center;
    position:relative;
    & > span {
        color:var(--primary-color);
        font-family:var(--secondary-font);
    }
    @media(min-width:768px){
        font-size:2rem;
        margin:0;
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
            box-shadow:0px 1px 0px var(--primary-color);
            opacity:0.8;
        }

        & > li {
            height:100%;
            width:25%;
            display:flex;
            justify-content:center;
            align-items:center;
            position:relative;
            box-shadow:0px 1px 0px black;
            box-sizing: border-box;
            

            &:after{
                content:'';
                width:0%;
                left:0;
                bottom:0;
                position:absolute;
                transition:0.2s ease-in-out;
                border-bottom:2px solid var(--primary-color);
            }

            &:hover {
                & > a {
                color:var(--primary-color);
                }
                :after{
                width:100%;
                }
            }
        }
    }
`
