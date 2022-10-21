import React , {useEffect , useState} from 'react'
import {useSelector , useDispatch} from 'react-redux'

import {fetchAll} from '../../redux/post/actionCreators'

import Form from '../../components/form/Form'
import Posts from '../../components/posts/Posts'
import Search from '../../components/search/Search'
import './home.css'

const Home = () => {
  const [postId,setPostId] = useState(null)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAll())
  },[postId,dispatch])

  return (
    <div>
      <div className='content' >
        <Posts  setPostId ={setPostId} />
        <div>
          <Search />
          <Form postId={postId} setPostId ={setPostId} />
        </div>
        
      </div>
      

    </div>
  )
}

export default Home