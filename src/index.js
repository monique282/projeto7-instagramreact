import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.querySelector('.body');

createRoot(rootElement).render(<App />);

