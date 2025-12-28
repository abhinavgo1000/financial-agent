'use client';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import theme from '@/context/theme';

export default function ThemeToggleProvider({ children }: { children: React.ReactNode }) {

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}
