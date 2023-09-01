import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const HelloWorld = () => {
    const [isLit, setLit] = useState(0)
    const add = ()=>{
        setLit(isLit+1)
        console.log(isLit)
    }
    const sub = ()=>{
        setLit(isLit-1)
        console.log(isLit)
    }
    return (
        <div className='p-[1em] flex flex-col justify-center items-center w-[100vw] h-[100vh] gap-[1em]'>
      <h1 className='w-[100%] text-[#13B4B4] font-bold text-[36px] text-center'>React <span className='text-[#c5c6c7]'>Counter</span></h1>
      <div className='flex justify-center items-center w-[100vw] h-[fit-content] gap-[1em] p-[1em]'>
      <button onClick={sub} className='sub w-[4em] h-[4em] p-[1em] bg-[#1f2833] text-[#c5c6c7] flex justify-center items-center'>- Sub</button>
      <p>{isLit}</p>
      <button onClick={add} className='add w-[4em] h-[4em] p-[1em] bg-[#1f2833] text-[#c5c6c7] flex justify-center items-center'>+ Add</button>
    </div>
    </div>    
    )
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
)