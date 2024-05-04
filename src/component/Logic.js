import React,{useState} from 'react'
import Firstpage from './Firstpage'
import Secondpage from './Second'
export default function Logic() {
    const [stop ,play]=useState(false);
    const Handlegame=()=>{
        play(true);
    }
  return (
    <>
      {
    //  ternery operter in the useing
        stop ? <Secondpage/>:<Firstpage title={Handlegame}/>
      }
    </>
  )
}
