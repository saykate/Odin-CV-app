import { useContext, useState } from 'react'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import MainBody from './components/MainBody'

function App() {
  return (
    <MainBody>
      <Nav />
      <Sidebar />
      <Content />
    </MainBody>
  )
}

export default App
