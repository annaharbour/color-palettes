import Palette from './Palette';
import { generatePalette } from './colorHelpers';
import seedColors from './seedColors';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useParams } from 'react-router';
import PaletteList from './PaletteList';

const findPalette = (id) => seedColors.find(palette => palette.id === id);

const PaletteWrapper = () => {
  const { id } = useParams();
  const palette = generatePalette(findPalette(id));
  return <Palette palette={palette} />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PaletteList palettes={seedColors} />} /> 
        <Route path='/palette/:id' element={<PaletteWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
