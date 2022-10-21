import React , {useState} from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signUp , signIn  } from '../../redux/auth/actionCreators'
import {Link} from 'react-router-dom'
import './auth.css'
const Auth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isSignUp,setIsSignUp] = useState(true)
  const [userInfo,setUserInfo] = useState ({
    firstName:"",lastName:"",email:"",password:"",confirmPassword:""
  })
  const [err,setErr] = useState('')

  const handleChange = (e) =>{
    setUserInfo({...userInfo,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(isSignUp){
      if(!userInfo.firstName || !userInfo.lastName || !userInfo.email || !userInfo.password || !userInfo.confirmPassword){
        return setErr('You have to fill all yor informations')
      }
      if(userInfo.password !== userInfo.confirmPassword){
        return setErr('Passwords are incorrect')
      }
      dispatch(signUp(userInfo))
    }else{
      if(!userInfo.email || !userInfo.password){
        return setErr('You have to fill all your informations')
      }
      dispatch(signIn(userInfo))
    }
    navigate('/')
    setTimeout(()=>{
      window.location.reload()
    },[1000])
  }
  return (
    <div className='auth'>
      <div className='auth-content' >
      <h1>{isSignUp ? 'Sign Up' :'Sign In'}</h1>
      <p style={{color:'red'}} >{err}</p>
      <form onSubmit={handleSubmit} >
        {isSignUp &&(
          <div>
            <input type="text" name="firstName" placeholder='firstName' onChange={handleChange} />
            <input type="text" name="lastName" placeholder='secondName' onChange={handleChange} />
          </div>
        )}
        <input type="email" name="email" placeholder='Email Adress' onChange={handleChange} />
        <input type="password" name="password" placeholder='Password' onChange={handleChange}/>
        {isSignUp &&(
          <input type="password" name="confirmPassword" placeholder='Confirm Password' onChange={handleChange} />
        )}
        <button> {isSignUp ? 'Sign Up' : 'Sign In'} </button>
      </form>
      <div className='flex-p'>
        <p> {isSignUp ? 'Already have Account ?' :'You didnt have Account ?'} </p>
        {isSignUp ? (
          <p className='sign-p' onClick={()=>setIsSignUp(false)} >Sign In</p>
        ):(
          <p className='sign-p' onClick={()=>setIsSignUp(true)} >Sign Up</p>
        )}
      </div>   
      </div>
    </div>
  )
}

export default Auth