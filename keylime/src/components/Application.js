import React from 'react';
import Form from './Account/Form';
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset
} from '@chakra-ui/react';
export function Application() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Form />
      </ColorModeProvider>
    </ThemeProvider>
  );
}
