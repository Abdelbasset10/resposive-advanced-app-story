import React from 'react'
import { render } from "react-dom";
import {BrowserRouter,Routes, Route,} from "react-router-dom";
import Home from './pages/home/Home'
import Auth from './pages/auth/Auth'
import Header from './components/header/Header';
import Search from './components/search/Search';
import Posts from './components/posts/Posts';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/posts/search" exact element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
