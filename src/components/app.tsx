import '@styles/main.scss';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="card">
        <h1>Welcome to React TypeScript App</h1>
        <div className="button-group">
          <button className="primary-button">Primary Button</button>
          <button className="secondary-button">Secondary Button</button>
        </div>
      </div>
    </div>
  );
};

export default App; 