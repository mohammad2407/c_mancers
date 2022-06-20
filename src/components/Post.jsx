
import styled from 'styled-components'
import GifBoxIcon from '@mui/icons-material/GifBox';
import { useState } from 'react';
import { GifModal } from './GifModal';
import { useDispatch, useSelector } from "react-redux"
import { addGifs, deleteGif, eventPost, reset } from '../Redux/action/action';
import { style } from '@mui/system';
import {v4 as uuid} from 'uuid'

// character size 19 if lenth is < 85;
export const Post = ({ close, open }) => {

    const giphys = useSelector((state) => state.allPosts.gifs)
    const dispatch = useDispatch()

    const [opengif, setOpenGif] = useState(false)
    const [message, setMessage] = useState("")

    // Opening and closing of modal
    const handleGifModal = () => {
        setOpenGif(true)
    }

    const Textmessage = (event) => {
        event.preventDefault()
        setMessage(event.target.value)
    }

    const Posting = () =>{
  
        const payload = {
            postGif: [...giphys],
            title: message,
            id : uuid()
        }

        dispatch(eventPost(payload))

        setTimeout(() =>{
            close(!open)
            dispatch(reset())
        }, 500)
    }



    return (
        <>
            <Container id={opengif}>
                <Header >
                    <div style={{
                        width: "80%",
                        marginLeft: "30px",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "20px",

                    }}>Create post</div>
                    <Cancel  onClick={() => close(false)}>
                        <button >x</button>
                    </Cancel>
                </Header>
                <ProfileDiv>
                    <Profileimg>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6wfHdYsY-0aLx-XVhhtURCs65sGi78wHNg&usqp=CAU" style={{ width: "100%", height: "100%" }} alt="" />
                    </Profileimg>
                    <div>
                        <h3>Mohammad</h3>
                    </div>
                </ProfileDiv>

                <div style={{ width: "97%", overflow: "auto", height: "150px", marginTop: '30px' }}>

                    <DiscriptionDiv>

                        <textarea type="message" placeholder='What is on your mind' value={message} onChange={(e) => Textmessage(e)} />
                        {
                            giphys.map((giphy) => {
                                return (
                                    <div>
                                    <div style={{ width: "90%", marginBottom: "10px" }}>
                                        <Gifremove>
                                          <button onClick={() => { dispatch(deleteGif(giphy.gifid)) }}>x</button>
                                        </Gifremove>
                                        <img src={giphy.gifurl} style={{ width: "100%" }} alt="" />
                                    </div>
                                    </div>
                                )
                            })
                        }
                    </DiscriptionDiv>
                </div>


                <AddGif>
                    <div style={{ width: "60%" }}>
                        <p onClick={handleGifModal}>Add to you post</p>
                    </div>

                    <div style={{ width: "30%", borderRadius: '60%' }} onClick={handleGifModal} >
                        <GifBoxIcon style={{ width: "100%", color: "yellow", fontSize: "60px", cursor: "pointer", borderRadius: '60%' }} />
                    </div>
                </AddGif>

                <PostBtn onClick={Posting} disabled = {message.length == 0 && giphys.length == 0 ? true : false}>
                    Post
                </PostBtn>

            </Container>

            {

            opengif && <GifModal close={setOpenGif} />
            }
        </>
    )
}



const Container = styled.div`
    width: 40%;
    border: 1px solid #8a8989;
    background: #303338;
    position:fixed;
    border-radius: 5px;
    display: ${props => props.id ? "none" : "block"};
   
    @media screen and (max-width: 1024px) {
        width:50%;
    };

    @media (max-width: 768px){
        width: 60%;
    }
    @media (max-width: 425px){
        width:80%;
        margin-left:5%;
    }
`

const PostBtn = styled.button`
    width:95%;
    
    border-radius:5px;
    background:#2374e1;
    padding:2%;
    font-size:19px;
    color:#fff;
    outline:none;
    border:none;
    margin-bottom:20px;



 

`

const Gifremove = styled.div`
    width:7%;
    height:30px;
    border:1px solid yellow;
    float:right;
    & button{
        top:-40px;       
        border-radius:60%;
        width:100%;
        font-size:20px;
        border:none;
        height:100%;
    }

`

export const Header = styled.div`
    display:flex;
    border-bottom: 1px solid #8a8989;
    padding: 10px 0;
    justify-content: space-between ; 

`

export const Cancel = styled.div`
/* float:right; */
width: 7.4%;
height:37px;
border-radius:80%;
background:#696969;
margin-right:20px;

@media (max-width: 768px){
    height:27px;

};
& button{
            text-align: center;
            font-size:28px;
            color:#dbd8d8;
            background:transparent;
            border:none;
            cursor: pointer;
            transition: 0.2s all;

           @media (max-width: 768px){
            font-size:15px;
           } 

        };

        &:hover{
            background: #7e7d7d;
        }
        &:active{
            transform: scale(0.98);
        }

`
export const ProfileDiv = styled.div`
    width:100%;
    display:flex;
    float: left;
    flex-wrap:wrap;
    height:20%;
   
    
    & h3{
        color:#fff;
        font-size:16px;
        font-family:Arial, Helvetica, sans-serif;
        letter-spacing:1px;
        font-weight:500;
        @media (max-width:768px){
            font-size:14px;
        }
    }

`
export const Profileimg = styled.div`
    width: 8%;
    height:45px;
    padding:1%;
    
    @media (max-width:768px){
        height:30px;
    }
    & img{
        border-radius:70%;

    }
`

const DiscriptionDiv = styled.div`
    /* overflow:auto; */
    padding: 1% 2% 2% 2%;
    display:flex;
    flex-direction:column;
    width:100%;
    & textarea{
        font-size:30px;
        font-family:Arial, Helvetica, sans-serif;
        border: none;
        height:40%;
        outline:none;
        background: #303338;
        color:#fff;
        margin-top: 20px;

        @media ( max-width: 768px){
            font-size:20px;
        }

    };
    & ::placeholder{
        color: #d1cfcf;
        font-size:26px;
    }
`

const AddGif = styled.div`
    width:90%;
    margin:auto;
    margin-top:20px;
    height:60px;
    border:1px solid #dddada;
    border-radius: 10px;
    margin-bottom:10px;
    display:flex;
    

    & p{
        color:#fff;
        font-weight:600;
        cursor:pointer;
        @media (max-width:768px){
            font-size: 14px;
        }

    }
    
 `
