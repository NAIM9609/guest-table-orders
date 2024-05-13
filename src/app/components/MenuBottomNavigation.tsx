'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import { useTranslations } from 'next-intl';

export default function MenuBottomNavigation({ menuNavigationItem }) {

    const Translator = useTranslations();
    const ref = React.useRef<HTMLDivElement>(null);
    const [menuNavigationSelected, setMenuNavigation] = React.useState(0);

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={menuNavigationSelected}
                    onChange={(event, newValue) => {
                        setMenuNavigation(newValue);
                        menuNavigationItem(newValue);
                    }}
                >
                    <BottomNavigationAction label={Translator('menu')} icon={<RestoreIcon />} />
                    <BottomNavigationAction label={Translator('orders')} icon={<FavoriteIcon />} />
                    <BottomNavigationAction label={Translator('cart')} icon={<ArchiveIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}