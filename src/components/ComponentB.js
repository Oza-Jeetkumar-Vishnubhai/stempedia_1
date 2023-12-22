import React from 'react'
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import {changeText} from '../actions';

export default function ComponentB() {
    const dispatch = useDispatch();
    const changeHandler = (e)=>{
        console.log("jeet",e.target.value);
        dispatch(changeText(e.target.value))
    }
  return (
    <div className='componentB card' style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
    }}>
        <h3 style={{padding:"0px 20px",textWrap:"wrap"}}>Enter some text below</h3>
      <TextField fullWidth label="Input" id="fullWidth" onChange={changeHandler} style={{
        width:"90%"
      }}/>
    </div>
  )
}
