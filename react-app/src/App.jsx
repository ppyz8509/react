import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostClassComponent from './components/PostClassComponent'
import PostFunctionComponent from './components/PostFunctionComponent'
import Comment from './components/Comment'
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Reat Demo</h1>
        <PostClassComponent userId="Naphat" message="หิวข้าว" />
        <Comment userId="F"
          message="ผมอยากเล่นApex" />
        <Comment userId="H"
          message="ผมจะกลับไปหาแฟนครับ" />
      </div>
      <PostFunctionComponent />
    </>
  )
}



export default App
