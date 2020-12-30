import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
    background: transparent;
    display: flex;
    justify-content: center;
    height: 80px;
    font-weight: 700;
`;


export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 2rem ;
    display: flex;
    align-items: center;
    cursor: pointer;

    @media screen and ( max-width: 400px){
        top: 10px;
        right: 20px;
    }

`;

export const NavIcon = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    cursor: pointer;

    p{
        font-weight: bold;
        margin: 30px 5px;
    }
`;

export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    margin-top: 1.7rem;
    margin-right: 1.4rem;
`;