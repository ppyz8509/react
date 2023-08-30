import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostClassComponent from './components/PostClassComponent'
import PostFunctionComponent from './components/PostFunctionComponent'
import Comment from './components/Comment'
import './Post.css'
import Card from './components/Card'
import StateInClass from './components/StateInClass'
import StateInFunction from './components/StateInFunction'
function App() {
  const [count, setCount] = useState(0);

  return (
      <div className="card">
      <h1>Reat Demo</h1>
        {/* <h1>Reat Demo</h1>
        <PostClassComponent userId="Naphat" message="หิวข้าว" />
        <Comment userId="F"
          message="ผมอยากเล่นApex" />
        <Comment userId="H"
          message="ผมจะกลับไปหาแฟนครับ" /> */}
        <StateInClass /> 
     <StateInFunction/>
     <Card/>
      </div>

  )
}



export default App
