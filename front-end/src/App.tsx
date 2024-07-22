import React from 'react';
import TestText from '@/components/atoms/TestText';
import './App.css';
import NavBar from './components/Organisms/NavBar';
import MemoWrite from './components/atoms/Write';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="bg-primary">
        <p>여기는 공지사항 Header</p>
      </div>

      <TestText text={'Component Test'} />
      <MemoWrite />
      <NavBar />
    </div>
  );
};

export default App;
