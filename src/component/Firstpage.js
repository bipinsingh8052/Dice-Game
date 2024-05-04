import React from 'react'
import '../style/firstpage.css'
// import Second from './Second'

export default function Firstpage(props) {
  return (
    <div className='container'>
       <div className="img">
       <img src="https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/1858/27464/gener6__20589.1708009056.jpg?c=2?imbypass=on" alt="" />
       </div>
       <div className='paragraph'>
        <h1>DICE GAME</h1>
        <button type='submit'onClick={props.title} >Play Now</button>
       </div>
    </div>
  )
}
