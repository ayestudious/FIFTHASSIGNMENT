import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Custom Hook: useFetch</h1>
        <p>This component uses a custom hook to fetch and display product data</p>
      </header>
      <main>
        <ProductList />
      </main>
      <footer>
        <p>Assignment 5: React Custom Hooks - Data Fetching Example</p>
      </footer>
    </div>
  );
}

export default App;
