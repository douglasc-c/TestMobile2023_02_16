import React from 'react';
import {Platform, StatusBar, useColorScheme} from 'react-native';

import {ThemeProvider} from 'styled-components';
import {AppProvider} from './hooks';
import KeyboardManager from 'react-native-keyboard-manager';

import themes from './global/styles/';

import StackRoutes from './routes/stack.routes';

function AppWrapper() {
  const themeMode = useColorScheme();
  const theme = themeMode === 'light' ? themes.light : themes.dark;
  

  return (
    <ThemeProvider theme={theme}>
      {themeMode === 'light' ? (
        <StatusBar barStyle="dark-content" backgroundColor="#000" />
      ) : (
        <StatusBar />
      )}
      <StatusBar />
      <StackRoutes />
    </ThemeProvider>
  );
}

export default function App() {
  if (Platform.OS === 'ios') {
    KeyboardManager.setEnable(true);
    KeyboardManager.setToolbarDoneBarButtonItemText('OK');
    KeyboardManager.setToolbarTintColor('#000000');
    KeyboardManager.setToolbarBarTintColor('#FFFFFF');
    KeyboardManager.isKeyboardShowing();
  }

  return (
    <AppProvider>
      <AppWrapper />
    </AppProvider>
  );
}