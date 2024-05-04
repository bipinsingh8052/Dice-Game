import React, { useState } from 'react'
import style from 'styled-components'
// import '../style/gameshow.css'
export default function GameShow(props) {
  const [detail,setdetails]=useState(false);
   const Handlescore=()=>{
    props.setscore(0);
   }
   const handlesRules=()=>{ 
    if(detail===false){
      setdetails(true);
    }
    else{
      setdetails(false);
    }
   
   }
  return (
    <Show className='Show'>
      <div className="dice" onClick={props.Roldice}>
      <img src={`/Images/dices/dice_${props.rules}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
      <button className='resetbutton' onClick={Handlescore}>Reset Score</button>
      <button className='showrules' onClick={handlesRules}> {detail?"Hidde":"Show"} Rules</button>
      {
        detail?<Box>
          <h2>How to play dice game</h2>
          <p>Select any number</p>
          <p>Click on the dice Image</p>
          <p>After click on the dice if selected number is equal to dice number you will get some point as dice </p>
          <p>If you get worng guess then <mark>2</mark>point will be dedcuted</p>
          </Box>:<p></p>
      }
    </Show>
  )
}

const Show=style.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img{
  height: 200px;
  width: 200px;
  border-radius: 10px;
  cursor:pointer;
};
button{
  height: 30px;
  width: 100px;
  // margin: 4px;
  // margin-top:13px;
}
.resetbutton{
  color:black;
  font-weight:200;
  background-color:white;
  outline:none;
  margin-top:20px;

}
.resetbutton:hover{
  background-color:red;
  font-weight:bold;
  border:1px solid transparent;
  border-radius: 2px;
  padding:3px;
  cursor: pointer;
}
p{
  font-size:20px;
  font-family:cursur;
}
.showrules{
  color:white;
  font-weight:200;
  background-color:black;
  border:none;
  outline:none;
  margin-top:13px;
}
.showrules:hover{
  cursor: pointer;
  border:1px solid black;
  border-radius: 2px;
  padding:3px;
}
`

const Box =style.div`
height:200px;
width:auto;
margin:5px;
border:2px solid black;
border-radius: 10px;
margin-top:20px;
display: flex;
flex-direction: column;
justify-content: center;
justify-content :space-around;
padding-left:20px;
paddling:80px;
background-color: rgb(222, 215, 216);
`