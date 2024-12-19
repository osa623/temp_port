// Ensure these paths are correct relative to App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Home from './Pages/Home'; // Correct path
import Portfolio from './Pages/Portfolio';



function App() {
  return (
    <BrowserRouter>


          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
