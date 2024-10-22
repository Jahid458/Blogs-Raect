
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks,setBookmarks] = useState([]);


  const handleAddToBookMarks = blog =>{
    const newBookMarks = [...bookmarks,blog];
    setBookmarks(newBookMarks)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
           <Blogs handleAddToBookMarks={handleAddToBookMarks}></Blogs>  
           <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
