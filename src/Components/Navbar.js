import styled from 'styled-components';
import {GiHamburgerMenu} from 'react-icons/gi';
import {HiArrowLeft} from 'react-icons/hi';
import React, { useState, useEffect } from 'react';
import { keyframes } from 'styled-components';

export default function Navbar(params) {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <NavWrapper>
                <StyledGiHamburgerMenu onClick={()=>setIsOpen(true)} />
            <Logo>
                <span>C</span>
                reati
                <span>V</span>
                e 
            </Logo>

            <Drawer open={isOpen}> 
                    <StyledHiArrowLeft onClick={()=>setIsOpen(false)}/>
                    
                <DrawerItem onClick={()=>setIsOpen(false)}>
                    <a href="#home">Strona główna</a>
                </DrawerItem>
                <DrawerItem onClick={()=>setIsOpen(false)}> 
                    <a href="#about">O nas</a>
                </DrawerItem>
                <DrawerItem onClick={()=>setIsOpen(false)}>
                    <a href="#gallery">Galeria</a>
                </DrawerItem>
                <DrawerItem onClick={()=>setIsOpen(false)}>
                    <a href="#offers">Oferta</a>
                </DrawerItem>
                <DrawerItem onClick={()=>setIsOpen(false)}>
                    <a href="#contact">Kontakt</a>
                </DrawerItem>

            <Logo>
                <span>C</span>
                reati
                <span>V</span>
                e 
            </Logo>


            </Drawer>

        <StyledNav>


            <StyledUl>
            <li><a href='#home'>Strona główna</a></li>
            <li><a href='#about'>O nas</a></li>
            <li><a href='#gallery'>Galeria</a></li>
            <li><a href='#offer'>Oferta</a></li>
            <li><a href='#contact'>Kontakt</a></li>
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
    background:var(--primary-background);
    
    @media (min-width: 768px){
        & > *{

        }
    }
`;
const StyledNav = styled.nav`
    display:none;
    @media (min-width: 768px) {
        width:80%;
        height:100%;
        display:flex;
        align-items:center;

    }
`

const Logo = styled.div`

    font-family:var(--secondary-font);
    font-size:1.5rem;
    display:flex;
    width:20%;
    margin:1rem;
    justify-content:center;
    align-items:center;
    position:relative;
    & > span {
        color:var(--primary-color);
        font-family:var(--secondary-font);
    }
    @media(min-width:768px){
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
        & > li {
            height:100%;
            width:25%;
            display:flex;
            justify-content:center;
            align-items:center;
            position:relative;
            border-bottom:1px solid black;
            box-sizing: border-box;
            &:after{
                content:'';
                width:0%;
                left:0;         
                bottom:0;
                position:absolute;
                transition:0.4s ease-in-out;
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
