import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles/styles.css'


const container = document.getElementById('root');
const root = createRoot(container!)
root.render(<App />);
