import React,{useEffect,useState,useContext} from 'react';
import {BtnContext} from '../App';
import "./Switch.css"
const Switch = ({ isOn ,onColor,setGood}) => {

  const btnContext=useContext(BtnContext);
  const handleToggle=()=>{
    const cheapSetter=btnContext.cheapness[1];
    cheapSetter(!btnContext.cheapness[0])    

    if(onColor==='#4070bd' && isOn===true){
      console.log('handling toggle')
    }
  }

  useEffect(() => {
    const goodSetter=btnContext.goodness[1];
    const fastSetter=btnContext.fastness[1];
    const cheapSetter=btnContext.cheapness[1];

    const goodness=btnContext.goodness[0];
    const fastness=btnContext.fastness[0];
    const cheapness=btnContext.cheapness[0];

    console.log(goodness,' ',fastness,' ',cheapness)
    if(onColor=='#0fbd44'){
      //good
      if(isOn==true) {
        console.log('GOOD triggered')
        if(fastness && cheapness) {
          cheapSetter(!btnContext.cheapness[0])
        }
      }
      else console.log('GOOD released')
    }
    if(onColor==='#4070bd'){
      //fast
      if(isOn==true) {
        console.log('FAST triggered')
        if(goodness && cheapness) {
          goodSetter(!btnContext.goodness[0])
        }
      }      else console.log('FAST released')
    }
    if(onColor=='#d85656'){
      //cheap
      if(isOn==true) {
        console.log('CHEAP triggered')
        if(goodness && fastness) {
          fastSetter(!btnContext.fastness[0])
        }
    }
      else console.log('CHEAP released')
    }
  }, [isOn]);
  return (
    <>
      <input
        checked={isOn}
        // onChange={handleToggle}
        // onChange={}
        className={`react-switch-checkbox`}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        onClick={setGood}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
