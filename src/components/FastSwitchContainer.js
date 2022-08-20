import React,{useContext} from 'react';
import Switch from './Switch';
import {  BtnContext } from '../App';

const FastSwitchContainer = () => {
const btnContext = useContext(BtnContext);
const fastness=btnContext.fastness[0];
const setFast=()=>{
  const fastSetter=btnContext.fastness[1];
  fastSetter(!btnContext.fastness[0])
}
  return (
    <BtnContext.Consumer>
      {value=>(
        <div className='switch-container'>
          <Switch
          isOn={fastness}
          onColor="#4070bd"
          />
          <span className='switch-span'>Fast</span>
      </div>
      )}
    </BtnContext.Consumer>
  );
}

export default FastSwitchContainer;
