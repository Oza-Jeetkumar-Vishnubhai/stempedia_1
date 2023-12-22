import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';

export default function ComponentC() {
    const [txt,setTxt] = useState("Click on the button");
    const text = useSelector((states) => {
        return states.textData;
    });
  const clickHandler = ()=>{
    if(text)
    {
        setTxt(text);
    }
    else{
        setTxt("Empty Text found")
    }
  }
  return (
    <div className="componentC card" style={{
        justifyContent:"space-evenly",
        alignItems:"center",
        display:"flex",
        flexDirection:"column"
    }}>
      <div className="view" style={{
            padding:"0 20px"
      }}>
        <p style={{
            fontWeight:"bold",
            textWrap:"wrap",
            width:"100%",
        }}>{txt}</p>
      </div>
      <Button variant="contained" onClick={clickHandler}>
        Get Value
      </Button>
    </div>
  );
}
