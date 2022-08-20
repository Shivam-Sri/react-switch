import React,{useContext} from 'react';
import Switch from './Switch';
import {  BtnContext } from '../App';

const CheapSwitchContainer = () => {
const btnContext = useContext(BtnContext);
const cheapness=btnContext.cheapness[0];
const setCheap=()=>{
  const cheapSetter=btnContext.cheapness[1];
  cheapSetter(!btnContext.cheapness[0])
}
  return (
    <BtnContext.Consumer>
      {value=>(
        <div className='switch-container'>
          <Switch
          isOn={cheapness}
          onColor="#d85656"
          />
          <span className='switch-span'>Cheap</span>
        <button onClick={setCheap}>
        Click me </button>

      </div>
      )}
    </BtnContext.Consumer>
  );
}

export default CheapSwitchContainer;
