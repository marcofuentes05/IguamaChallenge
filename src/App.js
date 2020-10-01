import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import SubModal from './Components/SubModal'
import CarouselCenter from './Components/CarouselCenter'
import BelowCarousel from './Components/BelowCarousel'
import Collections from './Components/Collections'
import Featured from './Components/Featured'
import Buttom from './Components/Buttom'

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
      <h1/>
      <h1 />
      <h1 />
      <h1 />
    </div>
  );
}

export default App;
