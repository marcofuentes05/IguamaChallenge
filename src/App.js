import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import SubModal from './Components/SubModal'
import CarouselCenter from './Components/CarouselCenter'
import BelowCarousel from './Components/BelowCarousel'
import Collections from './Components/Collections'
import Featured from './Components/Featured'
import Buttom from './Components/Buttom'
import End from './Components/End'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SubModal/>
      <CarouselCenter />
      <BelowCarousel/>
      <Collections/>
      <Featured />
      <Buttom />
      <End />
    </div>
  );
}

export default App;
