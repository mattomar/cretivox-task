import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import './styles/App.css'
import './styles/loadFonts';

import React from 'react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;