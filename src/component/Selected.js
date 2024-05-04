import React from 'react'
import style from 'styled-components'
// import GameShow from './GameShow';
// import '../style/selected.css'
export default function Selected(props) {
    const array =[1,2,3,4,5,6];
    
  
 
  return (
    <>
    <Select >
        <Selection >
        {
            array.map((item,i) => (
                <Section isSelect={item === props.selectednumber}
                key={i} onClick={()=> props.setselectedNumber(item)}> {item} </Section>
            ))
        }
        </Selection>
        {/* <section>1</section> */}
        <P>Select Number</P>
    </Select>
    {/* <GameShow/> */}
    </>
  )
}

const Section =style.section`

    height: 70px;
    width: 70px;
    border: 2px solid rgb(130, 9, 9);
    display: flex;
    margin: 5px;
    font-size: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color:${(props)=> props.isSelect?"rgb(16, 5, 3)":"white"};
    color:${(props)=>props.isSelect?"white":"black"};
    font-size:${(props)=>props.isSelect?"55px":"30px"};
    border:${(props)=>props.isSelect?"2px solid transparent":"2px solid black"};
`
const P =style.p`
font-size: 20px;
font-weight:bolder;
`

const Select =style.div`
display: flex;
height:200px;
width:100%;
flex-direction: column;
justify-content: end;
align-items: end;
margin-right: 5px;
`

const Selection = style.div`
    display: flex;
    justify-content: start;
    align-items: start;
    cursor: pointer;
`

// const Wrapper =style.div`
// // height:500px;
// // width:100%;
// `