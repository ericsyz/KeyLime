import React from 'react';
import LoginForm from './Account/Form';
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset
} from '@chakra-ui/core';
export function Application() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <LoginForm />
      </ColorModeProvider>
    </ThemeProvider>
  );
}
