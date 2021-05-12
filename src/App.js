import React from 'react';
import './App.css'
import TopicContextProvider from './contexts/TopicContext';
import Routes from './Routes';

const App = () => {
  return (
    <TopicContextProvider>
      <Routes/>

    </TopicContextProvider>
  );
};

export default App;