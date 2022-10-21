import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { LOGOUT } from '../../redux/auth/actionTypes'
import {Link} from 'react-router-dom'
import stories from '../../images/stories.png'
import './header.css'

const Header = () => {
  const dispatch = useDispatch()
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  const handleLogOut = () => {
    dispatch({type:LOGOUT})
    window.location.reload()
  }
  return (
    <div className='header' >
      <Link to='/' className='link' >
        <div className='logo'>
          <img src={stories} alt="stories" />
          <h1>Stories</h1>
        </div>
      </Link>
      {user && (
        <p>welcome {user?.user?.name}</p>
      )}
      {user ? (
        <button className='btn' onClick={handleLogOut }>Log Out</button>
      ):(
        <Link to='/auth' >
        <button className='btn' >Sign In</button>
      </Link>
      )}
    </div>
  )
}

export default Header