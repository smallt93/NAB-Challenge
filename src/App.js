import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'stylesheets/defaultTheme.styles';

import Dashboard from 'pages/Dashboard';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Dashboard />
    </ThemeProvider>
  )
}

export default App;