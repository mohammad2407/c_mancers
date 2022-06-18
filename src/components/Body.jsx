import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Post } from './Post'
import { SinglePost } from './Posts/SinglePost'

const Postcontainer = styled.div`
width:37%;
margin:auto;

`
const Addapost = styled.div`
    width:100%;
    padding: 10px 20px;
    position:relative;
    height:150px;
    border:1px solid yellow;
    
    & button{
        width:80%;
        border-radius:25px;
        background: #525151;
        color: #dfdede;
        padding: 10px 20px;
        border:none;
        text-align:left;
        font-size:15px;
    };
    & :hover{
            background:#646464;
            cursor: pointer;
            transition: ease-in 0.1s
        };


`


export const Body = () => {

    const [open, setOpen] = useState (false)
  return (
    <>
    <Postcontainer>
       <Addapost>
        <img src="https://scontent.fhyd5-1.fna.fbcdn.net/v/t39.30808…baGBgwAS53z1cb8R0rfoQU9r2n4fA8Eflj_gA&oe=62B2259E" alt="" />
        <button onClick={() => setOpen(true)}>
            What's on your mind, MOhammad
        </button>

        
       </Addapost>
        {
            open && <Post close = {setOpen} open = {open}/> 
        }
    </Postcontainer>

    <SinglePost />
        </>
 
  )
}
