import React , { useState }from 'react'
import Total from '../component/Total'
import Selected  from './Selected'
import '../style/second.css'
import GameOver from '../component/GameShow'
export default function Second() {
  const [selectednumber,setselectedNumber]=useState();
  const [rules,showrules]=useState(1);
  const [score,setscore]=useState(0);
  // const [detail,setdetails]=useState(false);

  const getRndInteger=(min, max)=> {
    return Math.floor(Math.floor(Math.random() * (max - min) ) + min);
  }
  const Roldice=()=>{
    if(!selectednumber){
      return alert("Please select the number then you play it continue.");
      
    }
    const randomnumber= getRndInteger(1,7);
    showrules(randomnumber);
   
    
    if(selectednumber === randomnumber)
    {
     setscore(score+1);
    }
    else{
      setscore(score-1);
    }
    setselectedNumber(undefined);
  }

  
  return (
    <div className='main'>
        <div className='Container'>
          <Total setscore={score} />
          <Selected selectednumber={selectednumber} setselectedNumber={setselectedNumber}/>
          
        </div>
    <GameOver  rules={rules} Roldice={Roldice} setscore={setscore} />
  </div>

  )
}
