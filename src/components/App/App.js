import React from 'react';
import './App.css';
import '../SearchBar/SearchBar';
import SearchBar from '../SearchBar/SearchBar';
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';

function App() {
  return (
    <div className="App">
      <Header />
      <MenuBar />
      <main>
        <SearchBar />
      </main>
    </div>
  );
}

export default App;
