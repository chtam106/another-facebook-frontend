import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <div className="app-container">
      <div className="card">
        <h1>Welcome to React TypeScript App</h1>
      </div>
    </div>
  </StrictMode>
);
