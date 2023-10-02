import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GameStatesProvider } from './Provider/GameStates';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameStatesProvider>
      <App />
    </GameStatesProvider>
  </React.StrictMode>
);
