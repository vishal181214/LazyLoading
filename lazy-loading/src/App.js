import React from 'react';
import './App.css';
import { Counter } from './app/Counter';
// import Home from './Home';

const  Home = React.lazy(() => import('./Home'));
function App() {
  return (
    <div className="App">
      <h1>On App Page </h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Home />
      </React.Suspense>
      <Counter/>
    </div>
  );
}

export default App;
