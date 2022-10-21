import React , {useState} from 'react'
import aid from '../../../images/aid.png'
import {TbAntennaBars1, TbCloudFog} from 'react-icons/tb'
import { fetchAll, deletePost} from '../../../redux/post/actionCreators'
import { likeDislikePost } from '../../../api'
import { useDispatch } from 'react-redux'
import {AiFillLike ,AiFillDelete} from 'react-icons/ai'
import moment from 'moment'
import './post.css'
const Post = ({post,setPostId}) => {
  const dispatch = useDispatch()
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  const [likesLength,setLikesLength]=useState(post.likeCount.length)
  const[isLiked,setIsLiked]= useState(post.likeCount.includes(user?.user?._id))
  

  const handleDelete = () =>{
    dispatch(deletePost(post._id))
    dispatch(fetchAll())

  }

  const handleLikeDislikePost = () => {
      likeDislikePost(post._id,user?.user?._id)
      isLiked ? setLikesLength(likesLength -1 ) : setLikesLength(likesLength +1 )
      setIsLiked(!isLiked)
      

  }
  return (
    <div className='post' >
      <div className='upper-post'>
        <div className='absolute-post-left'>
          <h3>{post.name}</h3>
          <p>{moment(post.createdAt).fromNow()}</p>
        </div>
        <div className='absolute-post-right'>
          {post.creator === user?.user?._id && (
            <TbAntennaBars1 className='icon' onClick={()=>setPostId(post._id)} />
          )}
        </div>
        <img src={post.selectedFile} alt="aid"/>
      </div>
      <div className='down-post'>
        <p>#{post.tags}</p>
        <h2>{post.title}</h2>
        <p className='p-gray' >{post.message}</p>
        <div className='flex' >
          <div className='like-div' onClick={handleLikeDislikePost}>
            <AiFillLike className='like-icon' />
            <p> {likesLength} Likes</p>
          </div>

         {post?.creator === user?.user?._id && (
            <div className='delete-div' onClick={handleDelete}>
                <AiFillDelete className='delete-icon' />
                <p>Delete</p>
            </div>
         )}
        </div>

      </div>

    </div>
  )
}

export default Post