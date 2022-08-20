import React,{useContext} from 'react';
import Switch from './Switch';
import {  BtnContext } from '../App';

const CheapSwitchContainer = () => {
const btnContext = useContext(BtnContext);
const cheapness=btnContext.cheapness[0];
  return (
    <BtnContext.Consumer>
      {value=>(
        <div className='switch-container'>
          <Switch
          isOn={cheapness}
          onColor="#d85656"
          />
          <span className='switch-span'>Cheap</span>
      </div>
      )}
    </BtnContext.Consumer>
  );
}

export default CheapSwitchContainer;
