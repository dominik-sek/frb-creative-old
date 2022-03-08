import styled from 'styled-components';
import {GiHamburgerMenu} from 'react-icons/gi';
import {HiArrowLeft} from 'react-icons/hi';
import React, { useState, useEffect } from 'react';
import { keyframes } from 'styled-components';

export default function Navbar(params) {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <NavWrapper>
                <StyledGiHamburgerMenu onClick={()=>{setIsOpen(true)}} />
            <Logo>
                <span>C</span>
                reati
                <span>V</span>
                e 
            </Logo>

            <Drawer open={isOpen}> 
                    <StyledHiArrowLeft onClick={()=>{setIsOpen(false)}}/>
                <DrawerItem>
                    <span>Strona główna</span>
                </DrawerItem>
                <DrawerItem>
                    <span>O nas</span>
                </DrawerItem>
                <DrawerItem>
                    <span>Galeria</span>
                </DrawerItem>
                <DrawerItem>
                    <span>Oferta</span>
                </DrawerItem>
                <DrawerItem>
                    <span>Kontakt</span>
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
            <li><a>Strona główna</a></li>
            <li><a>O nas</a></li>
            <li><a>Galeria</a></li>
            <li><a>Oferta</a></li>
            <li><a>Kontakt</a></li>
            </StyledUl>

        </StyledNav>
        </NavWrapper>
    )
};


const StyledHiArrowLeft = styled(HiArrowLeft)`
    cursor:pointer;
    width:100%;
    height:10%;
    margin:1rem 0;
`
const Drawer = styled.div`
    position:absolute; 

    width:100%;
    height:100%;
    background-color:var(--primary-background);
    display:flex;
    align-items:center;
    flex-direction:column;
    text-align:center;
    color:var(--primary-color);
    font-family:var(--secondary-font);
    font-size:1.5rem;
    z-index:1;
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
    height:7vh;
    width:100%;

    @media (min-width: 768px){
        height:10vh;
    }
`;
const StyledNav = styled.nav`
    display:none;
    @media (min-width: 768px) {
        width:80%;
        display:flex;
        align-items:center;

    }
`

const Logo = styled.div`
    display:none;
    font-family:var(--secondary-font);
    font-size:1.5rem;
    display:flex;
    width:20%;
    justify-content:center;
    align-items:center;
    position:relative;
    & > span {
        color:var(--primary-color);
        font-family:var(--secondary-font);
    }
    
`


const StyledGiHamburgerMenu = styled(GiHamburgerMenu)`
    color:var(--primary-color);
    font-size:2rem;
    margin:0 1rem;
    cursor:pointer;
    @media (min-width: 768px) {
        display:none;
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
                margin-bottom:-1px;
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
