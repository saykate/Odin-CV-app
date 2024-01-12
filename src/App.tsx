import { useState, useEffect } from 'react'
import Header from './components/Header'
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
  const [formPersonalData, setFormPersonalData] = useState<PersonalData>({
    fullName: "",
    email: "", 
    phone: "", 
    location: "",
  })

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function handlePersonalDataChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log({[e.target.id]: e.target.value})
    setFormPersonalData((prevData) => ({
      ...prevData, 
      [e.target.id]: e.target.value,
    }));
  }

  function handlePersonalDataSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setIsFormSubmitted(true);
  }

  function handleEditClick(e) {
    e.preventDefault();
    // setFormPersonalData()
  }

  return (
    <MainBody>
      <Header 
        personalData={formPersonalData} 
        isFormSubmitted={isFormSubmitted} 
        handleEditClick={handleEditClick}/>
      <Sidebar 
        personalData={formPersonalData} 
        handlePersonalDataChange={handlePersonalDataChange}
        handlePersonalDataSubmit={handlePersonalDataSubmit}
        />
      <Content />
    </MainBody>
  )
}

export default App
