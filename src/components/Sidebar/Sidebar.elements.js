import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    display: grid;
    background: #ffc500;
    top: 0;
    align-items: center;
    transition: 0.3s ease-out;
    right: ${({ isOpen  }) => (isOpen ? '0' : '-1000px')};
    @media screen and ( max-width: 400px){
        width: 100%;
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 2rem;
    background: transparent;
    outline: none;
    cursor: pointer
`;

export const CloseIcon = styled(FaTimes)`
    color: #000;
`;

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3,80px);
    text-align: center;

    @media screen and ( max-width: 480px ){
        grid-template-rows: repeat(3, 60px);
    }
`;

export const SidebarLink = styled(Link)`
    display: flex;
    justify-content: center;
    margin-top: 1.4rem;
    font-size: 24px;
    text-decoration: none;
    color: #000;
`;

export const SidebarBtn = styled.div`
    background: #e31837;
    white-space: nowrap;
    padding: 1rem;
    margin: 0 4.6rem;
    text-align: center;
    color: #fff;
    transition: 0.2s ease-in-out;

    &:hover {
        transition: 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

`;