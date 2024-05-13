import { Box, CssBaseline, Paper } from '@mui/material'
import React from 'react'
import StepperComponent from './StepperComponent';

export default function MenuComponent() {

    return (
        <Box>
            <CssBaseline />
            <Paper elevation={5} sx={{ p: 2 }}>
                <StepperComponent />
            </Paper>
        </Box>

    )
}