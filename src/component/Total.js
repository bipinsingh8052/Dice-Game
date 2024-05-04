import React from 'react'
import '../style/total.css'
export default function Total(props) {
  return (
    <div className="score">
            <div className='h1'>
                <h1><span>{props.setscore}</span>
                <br />
                Total Score
                </h1>
                </div>
     </div>
  )
}
