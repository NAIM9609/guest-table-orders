"use client";

import MenuBottomNavigation from '../../components/MenuBottomNavigation';
import { useState } from 'react';
import Cart from '@/app/components/Cart';
import MenuComponent from '@/app/components/MenuComponent';
import Orders from '@/app/components/Orders';
import { Box, CssBaseline, Paper } from '@mui/material';
import React from 'react';

// Application Features
export enum MenuNavigation {
    Menu = 0,
    Orders = 1,
    Cart = 2
}

function renderNavigationItem(value: number) {
    switch (value) {
        case MenuNavigation.Menu:
            return <MenuComponent />
        case MenuNavigation.Orders:
            return <Orders />
        case MenuNavigation.Cart:
            return <Cart />
    }
}

const Menu = () => {
    const [menuNavigationSelected, setMenuNavigation] = useState(0);
    const menuNavigationItem = (value: number) => {
        setMenuNavigation(value);
    }

    return (
        <Box sx={{ width: '100%' }}>
            <CssBaseline />
            <Paper elevation={0}>
                <Box sx={{ p: 2 }}>
                    {renderNavigationItem(menuNavigationSelected)}
                </Box>
                <MenuBottomNavigation menuNavigationItem={menuNavigationItem} />
            </Paper>
        </Box>
    )
}

export default Menu