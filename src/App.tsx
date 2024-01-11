import { useState } from 'react'
import Nav from './components/Nav'
import Sidebar  from './components/Sidebar'
import Content from './components/Content'
import MainBody from './components/MainBody'

export type PersonalData = {
  fullName: string;
  email: string; 
  phone: string; 
  location: string;
}

function App() {
  const [personalData, setPersonalData] = useState<PersonalData>({
    fullName: "",
    email: "", 
    phone: "", 
    location: "",
  })

  function handlePersonalDataChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log({[e.target.id]: e.target.value})
    setPersonalData((prevData) => ({
      ...prevData, 
      [e.target.id]: e.target.value,
    }));
  }

  function handlePersonalDataSubmit() {
    
  }

  return (
    <MainBody>
      <Nav personalData={personalData} />
      <Sidebar 
        personalData={personalData} 
        handlePersonalDataChange={handlePersonalDataChange}
        handlePersonalDataSubmit={handlePersonalDataSubmit}
        />
      <Content />
    </MainBody>
  )
}

export default App
