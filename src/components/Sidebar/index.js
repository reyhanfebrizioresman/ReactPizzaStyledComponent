import React from 'react'
import { 
    SidebarContainer,
    Icon,CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarBtn
 } from './Sidebar.elements';

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon toggle={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                    <SidebarLink to='/' >Pizzas</SidebarLink>
                    <SidebarLink to='/' >Desserts</SidebarLink>
                    <SidebarLink to='/' >Full Menu</SidebarLink>
            </SidebarMenu>
            <SidebarBtn>Order Now</SidebarBtn>
        </SidebarContainer>
    )
}

export default Sidebar
