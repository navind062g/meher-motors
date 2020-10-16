import React from 'react';
import './App.css';
import '../SearchBar/SearchBar';
import SearchBar from '../SearchBar/SearchBar';
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';
import SlideShowContainer from '../SlideShow/SlideShowContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <MenuBar />
      <main>
        <SlideShowContainer />
        <SearchBar />
      </main>
    </div>
  );
}

export default App;
