import React from 'react'
//https://react-icons.github.io/react-icons/
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title: 'Users',
        path: '/users',
        icon: <FaIcons.FaUsers/>,
        cName:'nav-text'
    },
    {
        title: 'Menu',
        path: '/menu',
        icon: <MdIcons.MdMenuBook/>,
        cName:'nav-text'
    },
    {
        title: 'Orders',
        path: '/orders',
        icon: <GiIcons.GiCook/>,
        cName:'nav-text'
    },
    {
        title: 'Deliveries',
        path: '/deliveries',
        icon: <MdIcons.MdDeliveryDining/>,
        cName:'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <GiIcons.GiNotebook/>,
        cName:'nav-text'
    }
]