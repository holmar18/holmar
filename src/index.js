import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.querySelector('#root');

// Create root
const root = ReactDOM.createRoot(container);

// initial render
root.render(<App />);
