import React,{useContext} from 'react';
import Switch from './Switch';
import {  BtnContext } from '../App';

const GoodSwitchContainer = () => {
const btnContext = useContext(BtnContext);
const goodness=btnContext.goodness[0];
  return (
    <BtnContext.Consumer>
      {value=>(
        <div className='switch-container'>
          <Switch
            isOn={goodness}
            onColor="#0fbd44"
          />
          <span className='switch-span'>Good</span>
      </div>
      )}
    </BtnContext.Consumer>
  );
}

export default GoodSwitchContainer;
