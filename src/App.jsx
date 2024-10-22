
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);


  const handleAddToBookMarks = blog =>{
    const newBookMarks = [...bookmarks,blog];
    setBookmarks(newBookMarks)
  }

  const handleMarkAsRead = time =>{
       const newReadingTime = readingTime+time; 
       setReadingTime(newReadingTime)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
           <Blogs 
           handleMarkAsRead={handleMarkAsRead}
           handleAddToBookMarks={handleAddToBookMarks}></Blogs>  
           <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
