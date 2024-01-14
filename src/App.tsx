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

export type EducationData = {
  school: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  location: string;
}

export type ExperienceData = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

function App() {
  const [formPersonalData, setFormPersonalData] = useState<PersonalData>({
    fullName: "",
    email: "", 
    phone: "", 
    location: "",
  })

  const [formEducationData, setFormEducationData] = useState<EducationData>({
    school: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    location: ""
  })

  const [formExperienceData, setFormExperienceData] = useState<ExperienceData>({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  })

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function handlePersonalDataChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log({[e.target.id]: e.target.value})
    setFormPersonalData((prevData) => ({
      ...prevData, 
      [e.target.id]: e.target.value,
    }));
  }

  function handleEducationDataChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log({[e.target.id]: e.target.value})
    setFormEducationData((prevData) => ({
      ...prevData, 
      [e.target.id]: e.target.value,
    }));
  }

  function handleExperienceDataChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log({[e.target.id]: e.target.value})
    setFormExperienceData((prevData) => ({
      ...prevData, 
      [e.target.id]: e.target.value,
    }));
  }

  function handlePersonalDataSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setIsFormSubmitted(true);
    setFormPersonalData({
      fullName: "",
      email: "", 
      phone: "", 
      location: "",
    })
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
        handleEditClick={handleEditClick}
        />
      <Sidebar 
        personalData={formPersonalData} 
        educationData={formEducationData}
        experienceData={formExperienceData}
        handlePersonalDataChange={handlePersonalDataChange}
        handlePersonalDataSubmit={handlePersonalDataSubmit}
        handleEducationDataChange={handleEducationDataChange}
        handleExperienceDataChange={handleEducationDataChange}
        />
      <Content 
        educationData={formEducationData}
        experienceData={formExperienceData}
        isFormSubmitted={isFormSubmitted} 
        handleEditClick={handleEditClick}
        />
    </MainBody>
  )
}

export default App
