"use client";

import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const theme = {
  // We can add theme properties here that match our tailwind config if needed
  // For now, it's a placeholder to satisfy the requirement
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  );
};
