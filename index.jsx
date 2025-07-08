import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx'; // <-- NO curly braces here

ReactDOM.createRoot(
  document.querySelector('#root')
).render(<App />);
