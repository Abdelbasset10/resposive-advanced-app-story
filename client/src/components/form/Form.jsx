import React , {useState, useEffect} from 'react'
import FileBase from 'react-file-base64';

import { useDispatch , useSelector } from 'react-redux';
import {createPost, updatePost} from '../../redux/post/actionCreators'

import './form.css'

const Form = ({postId,setPostId}) => {
  const dispatch = useDispatch()
  const post = useSelector((state)=>(postId ? state.posts.find((p)=>p._id===postId):null))
  const[postData,setPostData] = useState({
    title:"",message:"",tags:"",selectedFile:""
  })
  const user = JSON.parse(localStorage.getItem('profile'));


  useEffect(()=>{
    if(post) setPostData(post)
  },[post])

  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(postId){
        dispatch(updatePost(postId,{...postData,name:user?.user?.name}))
    }else{
      dispatch(createPost({...postData,name:user?.user?.name}))
    }
    handleClear()
  }

  const handleChange = (e) =>{
    setPostData({...postData,[e.target.name]:e.target.value})
  }

  const handleClear = () =>{
    setPostId(null)
    setPostData({
      title:"",message:"",tags:"",selectedFile:""
    })
  }

  if(!user?.user?._id){
    return (
      <div className='no-form' >
        <p>You have to sign in to create tour stories</p>
      </div>
    )
    
  }

  return (
    <div className='form' >
      <h2>{postId ?'Updating' : 'Creating'} Stories</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder='title' value={postData.title} name="title" onChange={handleChange}/>
        <input type="text" placeholder='message' value={postData.message} name="message" onChange={handleChange}/>
        <input type="text" placeholder='tags' value={postData.tags} name="tags"  onChange={handleChange}/>
        <FileBase type="file" multiple={false} value={postData.selectedFile}  onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        <button>Submit</button>
      </form>
    <button className='clear-btn' onClick={handleClear} >Clear</button>
    </div>
  )
}

export default Form