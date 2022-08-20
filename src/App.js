import React, { createContext, useState,useContext } from 'react';
import './App.css';
import CheapSwitchContainer from './components/CheapSwitchContainer';
import FastSwitchContainer from './components/FastSwitchContainer';
import GoodSwitchContainer from './components/GoodSwitchContainer';

export const BtnContext=React.createContext()
function App() {

  const [good,setGood] = useState(false);
  const [fast,setFast] = useState(false);
  const [cheap,setCheap] = useState(false);

  return (
    <div className="app">
      <BtnContext.Provider value={{goodness:[good,setGood],fastness:[fast,setFast],cheapness:[cheap,setCheap]}}>
        <GoodSwitchContainer></GoodSwitchContainer>
        <FastSwitchContainer></FastSwitchContainer>
        <CheapSwitchContainer></CheapSwitchContainer>
      </BtnContext.Provider>
    </div>
  );
}

export default App;
