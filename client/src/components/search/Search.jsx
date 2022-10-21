import React , {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {fetchPostBySearch} from '../../redux/post/actionCreators'
import './search.css'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const [searchTitle,setSearchTitle] = useState('')

  const handleSearch = () =>{
    if(searchTitle.trim()){ 
      dispatch(fetchPostBySearch(searchTitle))
      navigate(`/posts/search?searchQuery=${searchTitle}`)
    }else{
      navigate('/')
    }

  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    handleSearch()
  }
  return (
    <form className='search' onSubmit={handleSubmit}  >
        <input type="text" placeholder='search by title' value={searchTitle} onChange={(e)=>setSearchTitle(e.target.value)} />
        <button>Search</button>
    </form>
  )
}

export default Search