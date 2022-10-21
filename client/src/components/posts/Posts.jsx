import React , {useState} from 'react'
import Post from './post/Post'
import { useSelector } from 'react-redux'
import './posts.css'

const Posts = ({setPostId}) => {
  const posts = useSelector((state)=>state.posts)
  

  return (
    <div className='posts'>
      {posts.map((post)=>{
        return(
          <div   key={Math.random()} >
            <Post post={post} setPostId ={setPostId} />
          </div>
        )
      })}
    </div>
  )
}

export default Posts