import React,{useContext} from 'react';
import Switch from './Switch';
import {  BtnContext } from '../App';

const GoodSwitchContainer = () => {
const btnContext = useContext(BtnContext);
const goodness=btnContext.goodness[0];
const setGood=()=>{
  const goodSetter=btnContext.goodness[1];
  goodSetter(!btnContext.goodness[0])
}
// const fastness=fast.fastness[0];
  return (
    <BtnContext.Consumer>
      {value=>(
        <div className='switch-container'>
          <Switch
            isOn={goodness}
            onColor="#0fbd44"
            // onClick={setGood}
          />
          <span className='switch-span'>Good</span>
          <button onClick={setGood}>
          Click me </button>
      </div>
      )}
    </BtnContext.Consumer>
  );
}

export default GoodSwitchContainer;
