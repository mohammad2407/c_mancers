import React from 'react'
import { useSelector } from 'react-redux'
import  styled  from "styled-components"
import { ProfileDiv,Profileimg } from '../Post'

export const SinglePost = () => {
   const allposts =   useSelector((state) => state.allPosts.posts) 
    console.log(allposts)
  return (
    <div>
        {
         allposts.map((item) => {
            const [content] = item.postGif
            
            return (
                <>
                <PostCard key={content.gifid}>
                <PostHeader>
                <ProfileDiv>
                    <Profileimg>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6wfHdYsY-0aLx-XVhhtURCs65sGi78wHNg&usqp=CAU" style={{ width: "100%", height: "100%" }} alt="" />
                    </Profileimg>
                    <div>
                        <h3>Mohammad</h3>
                    </div>
                </ProfileDiv>
                </PostHeader>

                <div>
                    <p style={{textAlign:"left", marginLeft:"5%"}}>{item.title}</p>
                    <img src={content.gifurl} style = {{width:"100%"}} alt="" />
                </div>
                </PostCard>
                
                </>
            )
         })   
        }
    </div>
  )
}


const PostHeader = styled.div`
    
    width:100%;
    height:50px;
    & p{
        font-weight : 600;
        font-size:17px;
        text-align:left;
    }
    
`

const PostCard = styled.div`
    width:100%;
    height: 400px;
    border-radius:10px;
    background: #303338;
    color:#fff;
    margin-bottom: 20px

`