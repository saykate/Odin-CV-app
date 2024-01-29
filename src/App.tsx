import { useState } from 'react'
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

const PERSONAL_DATA_INITIAL_STATE = {
  fullName: "",
  email: "", 
  phone: "", 
  location: "",
}

const EDUCATION_DATA_INITIAL_STATE = {
  school: "",
  fieldOfStudy: "",
  startDate: "",
  endDate: "",
  location: ""
}

const EXPERIENCE_DATA_INITIAL_STATE = {
  company: "",
  position: "",
  startDate: "",
  endDate: "",
  location: "",
  description: "",
}

function App() {
  const [formPersonalData, setFormPersonalData] = useState<PersonalData>({...PERSONAL_DATA_INITIAL_STATE})

  const [headerPersonalData, setHeaderPersonalData] = useState<PersonalData>({...PERSONAL_DATA_INITIAL_STATE})

  const [formEducationData, setFormEducationData] = useState<EducationData>({...EDUCATION_DATA_INITIAL_STATE})

  const [contentEducationData, setContentEducationData] = useState<EducationData>({...EDUCATION_DATA_INITIAL_STATE})

  const [formExperienceData, setFormExperienceData] = useState<ExperienceData>({...EXPERIENCE_DATA_INITIAL_STATE})

  const [contentExperienceData, setContentExperienceData] = useState<ExperienceData>({...EXPERIENCE_DATA_INITIAL_STATE})

  function handlePersonalDataChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormPersonalData((prevData) => ({
      ...prevData, 
      [e.target.id]: e.target.value,
    }));

  }

  function handleEducationDataChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    
    setFormEducationData((prevData) => {
      const updatedData = {
        ...prevData,
        [id]: value,
    };

    if (id === 'startDate') {
        if (updatedData.endDate < value) {
            updatedData.endDate = value;
        }
    }

    if (id === 'endDate') {
        if (updatedData.startDate > value) {
            updatedData.startDate = value;
        }
    }

    return updatedData;
    });
  }

  function handleExperienceDataChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    
    setFormExperienceData((prevData) => {
      const updatedData = {
        ...prevData,
        [id]: value,
    };

    if (id === 'startDate') {
        if (updatedData.endDate < value) {
            updatedData.endDate = value;
        }
    }

    if (id === 'endDate') {
        if (updatedData.startDate > value) {
            updatedData.startDate = value;
        }
    }

    return updatedData;
    });
  }

  function handlePersonalDataSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setHeaderPersonalData({...formPersonalData})
    setFormPersonalData({...PERSONAL_DATA_INITIAL_STATE})
  }

  function handleEducationDataSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setContentEducationData({...formEducationData})
    setFormEducationData({...EDUCATION_DATA_INITIAL_STATE})
  }

  function handleExperienceDataSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setContentExperienceData({...formExperienceData})
    setFormExperienceData({...EXPERIENCE_DATA_INITIAL_STATE})
  }

  function handleHeaderEditClick(e: { preventDefault: () => void }) {
    e.preventDefault();
    setFormPersonalData({...headerPersonalData})
  }

  function handleContentEducationEditClick(e: { preventDefault: () => void }) {
    e.preventDefault();
    setFormEducationData({...contentEducationData})
  }

  function handleContentExperienceEditClick(e: { preventDefault: () => void }) {
    e.preventDefault();
    setFormExperienceData({...contentExperienceData})
  }

  function handlePersonalDataClear(e: { preventDefault: () => void }) {
    e.preventDefault();
    setFormPersonalData({...PERSONAL_DATA_INITIAL_STATE})
  }

  function handleEducationDataClear(e: { preventDefault: () => void }) {
    e.preventDefault();
    setFormEducationData({...EDUCATION_DATA_INITIAL_STATE})
  }

  function handleExperienceDataClear(e: { preventDefault: () => void }) {
    e.preventDefault();
    setFormExperienceData({...EXPERIENCE_DATA_INITIAL_STATE})
  }

  function handleDeleteClick(dataType: 'personal' | 'education' | 'experience', e: { preventDefault: () => void }) {
    e.preventDefault();
    
    switch (dataType) {
      case 'personal':
        setHeaderPersonalData({...PERSONAL_DATA_INITIAL_STATE});
        break;
      case 'education':
        setContentEducationData({...EDUCATION_DATA_INITIAL_STATE});
        break;
      case 'experience':
        setContentExperienceData({...EXPERIENCE_DATA_INITIAL_STATE});
        break;
      default:
        break;
    }
  }

  return (
    <MainBody>
      <Header 
        personalData={headerPersonalData} 
        handleHeaderEditClick={handleHeaderEditClick}
        handleDeleteClick={(e) => handleDeleteClick('personal', e)}
        />
      <Sidebar 
        personalData={formPersonalData} 
        educationData={formEducationData}
        experienceData={formExperienceData}
        handlePersonalDataChange={handlePersonalDataChange}
        handlePersonalDataSubmit={handlePersonalDataSubmit}
        handlePersonalDataClear={handlePersonalDataClear}
        handleEducationDataChange={handleEducationDataChange}
        handleEducationDataSubmit={handleEducationDataSubmit}
        handleEducationDataClear={handleEducationDataClear}
        handleExperienceDataChange={handleExperienceDataChange}
        handleExperienceDataSubmit={handleExperienceDataSubmit}
        handleExperienceDataClear={handleExperienceDataClear}
        />
      <Content 
        educationData={contentEducationData}
        experienceData={contentExperienceData}
        handleContentEducationEditClick={handleContentEducationEditClick}
        handleContentExperienceEditClick={handleContentExperienceEditClick}
        handleDeleteClick={(dataType, e) => handleDeleteClick(dataType, e)}
        />
    </MainBody>
  )
}

export default App
