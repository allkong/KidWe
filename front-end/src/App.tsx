import React from 'react';
import TestText from '@/components/atoms/TestText';
import './App.css';
import NavBar from './components/Organisms/NavBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="Header">
        <p>여기는 공지사항 Header</p>
      </div>
      <div className="Body">
        <p>여기는 제목 List들</p>
      </div>
      <div>
        <h1>My Image</h1>
      </div>
      <TestText text={'Component Test'} />
      <NavBar />
    </div>
  );
};

export default App;
