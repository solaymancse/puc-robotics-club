import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav `
    margin-left: 150px;
    margin-right: 150px;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw-1000px) / 2);
    z-index:10;

    @media screen and (max-width: 768px) {
        margin-left: 0;
    }

`;

export const NavLink = styled(Link)`
    color: #333;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #1287AB;
    }
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;

`;

export const H1 = styled.h1`
    font-size: 30px;
    font-weight: bold;


    @media screen and (max-width: 768px) {
        font-size: 16px;

    }

`;
export const SPAN = styled.span`
    letter-spacing: 5.2px;
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #333;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
       
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 1px;
    padding: 10px 22px;
    color: #333;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &.hover{
        transition: all 0.2s ease-in-out;
        background: red;
        color: #fff;
    }
`;