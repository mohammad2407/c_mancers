import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components"
import axios from "axios"
import { useDispatch } from "react-redux";
import { addGifs } from "../Redux/action/action";
import { Header } from "./Post";
export const GifModal = ({close}) => {

    const url = "https://api.giphy.com/v1/gifs/search?api_key=BGCxUtmq3SeGWJKhI98UpQqcTxebrpQY&limit=20&offset=0&q="
    const [results,setResults] = useState([])
    const [search, setSearch] = useState("")

    console.log(results)
    const handleChange = (event) => {
        event.preventDefault()
        setSearch(event.target.value)

    }

    const dispatch = useDispatch()

    const searchgif = async() =>{

            const response = await axios(url+search)
            console.log(response.data)
        
         if(response.data.meta.status == 200 || response.data.meta.status == 304 ){
            setResults(response.data.data.map((gif) =>{
                return gif
            }))
         }
        
    }

    const addGif = (e) =>{
        let gifid = (e.id)
        let gifurl = (e.images.fixed_height.url)
        const payload = {
            gifid,
            gifurl
        }
        close(false)
            dispatch(addGifs(payload))
       
    }

  

    return (
        <div>
            

            <GifContainer>
            <GifHeader >
                    <div style={{
                        width: "98%",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "20px",
                        padding:"2% 1%",
                        borderBottom:"1px solid #8a8989"
                    }}>Create post
                    
                    <button style={{float:"left", padding:'1% 3%'}} onClick={() => close(false)}>close</button>
                    </div>

            <SearchDiv style={{border:"none"}}>
            <input type="text" value={search} placeholder = "Search" onChange={(e) => { handleChange(e) }} />
            <button onClick={searchgif}>search</button>
            </SearchDiv>
                </GifHeader>

            <div style={{marginTop:"100px"}}>
            {
                results.map((gifs) => {
                    // console.log(gifs)
                    return(
                        <div key={gifs.id}  onClick = {()=> { addGif(gifs)}} >
                            <img src={gifs.images.fixed_height.url} style = {{width:"100%"}} alt="" />
                        </div>
                    )
                })
            }
            </div>
            </GifContainer>

        </div>
    )
}

const GifContainer = styled.div`
    
   
    width:100%;
    height:400px;
    overflow:auto;
    border: 1px solid #8a8989;
    border-radius: 10px;
    background: #303338;

`

const SearchDiv = styled.div`
    
    padding: 4% 1%;
    & input {
        padding:10px 20px;
        border-radius:25px 0px 0px 25px;
        width:70%;
        border:none;
        outline:none;
        background:#4a4b4d;
        color:#e6e0e0;
        font-size:17px;
        font-weight:400;
    };

    & button {
        padding:10px 19px;
        border-radius:0px 25px 25px 0px;
        border:none;
        font-size:16px;
        /* outline:none; */
    }
`

const GifHeader = styled.div`
    position:fixed;
    width:37%;
    position:absolute;
    display:flex;
    border-bottom: 1px solid #8a8989;
    padding: 10px 0;

    display:flex;
    flex-direction:column;
    background: #303338;
    border:none;

`