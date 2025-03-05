import React from 'react'
import Dashboard from './page/Dashboard';
import { ThemeProvider } from './components/theme-provider';

const App = () => {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  )
}

export default App;