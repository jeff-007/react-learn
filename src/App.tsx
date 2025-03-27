import React from 'react';
import logo from './logo.svg';
import './App.css';
// import useUrlState from './hooks/useUrlState';
import SelectModal from './components/SelectModal'; // 添加: 导入 SelectModal 组件

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SelectModal buttonLabel="Open Modal" />
      </header>
    </div>
  );
}

export default App;