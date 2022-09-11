import React, { ReactElement, useState } from 'react';
interface Props{
    name?:string
}

const Welcome=({ name }: Props): ReactElement => {
    const renderHello = (myName?:string)=>{
       
if(myName !==undefined){

    return myName+"!";
}
else if(myName=== undefined) return "Stranger"
    }
  
    return (
        <>
    Hello, {renderHello(name)}
        </>
    );
   
}


export default Welcome;