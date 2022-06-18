import React from 'react'
import { useSelector } from 'react-redux'
import  styled  from "styled-components"

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
                    <p>Mohammad</p>
                </PostHeader>

                <div>
                    <img src={content.gifurl} alt="" />
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
    
    width:90%;
    height:100px;
    
`

const PostCard = styled.div`
    width:60%;
    height: 400px;
    border: 1px solid green

`