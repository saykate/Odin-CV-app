import styled from 'styled-components';
import Form from './Form';
import Input from './Input';
import Button from './Button'
import { useContext, FC } from 'react';
import { ThemeContext } from '../context/Theme';
import { PersonalData, EducationData, ExperienceData } from '../App';

export type SideBarTypes = {
    personalData: PersonalData;
    educationData: EducationData;
    experienceData: ExperienceData;
    handlePersonalDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePersonalDataSubmit: (e: { preventDefault: () => void }) => void;
    handlePersonalDataClear: (e: { preventDefault: () => void }) => void;
    handleEducationDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleEducationDataSubmit: (e: { preventDefault: () => void }) => void;
    handleEducationDataClear: (e: { preventDefault: () => void }) => void;
    handleExperienceDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleExperienceDataSubmit: (e: { preventDefault: () => void }) => void;
    handleExperienceDataClear: (e: { preventDefault: () => void }) => void;
  }

const Sidebar: FC<SideBarTypes> = ({ personalData, educationData, experienceData, handlePersonalDataChange, handlePersonalDataSubmit, handlePersonalDataClear, handleEducationDataChange, handleEducationDataSubmit, handleEducationDataClear, handleExperienceDataChange, handleExperienceDataSubmit, handleExperienceDataClear }) => {
    const theme = useContext(ThemeContext)
    
    return (
        <SidebarContainer color={theme.flavor.primaryDark}>
            <Button className="toggleButt" title={theme.theme === 'light' ? 'Dark Display' : 'Light Display'} onClick={theme.toggleTheme} />
            <Form className='personalDetails' >
                <Input 
                    type="text" 
                    name="Full Name" 
                    id='fullName'
                    value={personalData.fullName}
                    placeholder="Full Name" 
                    onChange={handlePersonalDataChange} 
                />
                <Input 
                    type="email" 
                    name="Email" 
                    id='email'
                    value={personalData.email}
                    placeholder="you@email.com"
                    onChange={handlePersonalDataChange} />
                <Input 
                    type="tel" 
                    name="Phone" 
                    id='phone'
                    value={personalData.phone}
                    placeholder="888-000-0000"
                    onChange={handlePersonalDataChange} />
                <Input 
                    type="text" 
                    name="Location" 
                    id='location'
                    value={personalData.location}
                    placeholder="City, State"
                    onChange={handlePersonalDataChange} />
                <div className='buttons'>
                    {personalData.fullName && personalData.email && personalData.phone && personalData.location && <Button onClick={handlePersonalDataSubmit} title='Save'/>}
                    <Button onClick={handlePersonalDataClear} title='Clear'/>
                </div>
            </Form>
            <Form className='educationDetails' >
                <Input 
                    type="text" 
                    name="Name of School" 
                    id='school'
                    value={educationData.school}
                    placeholder="School" 
                    onChange={handleEducationDataChange} />
                <Input 
                    type="text" 
                    name="Field of Study" 
                    id='fieldOfStudy'
                    value={educationData.fieldOfStudy}
                    placeholder="field of study"
                    onChange={handleEducationDataChange} />
                <Input 
                    type="date" 
                    name="Start Date" 
                    id='startDate'
                    value={educationData.startDate}
                    placeholder="00/00/0000"
                    onChange={handleEducationDataChange} />
                <Input 
                    type="date" 
                    name="End Date" 
                    id='endDate'
                    value={educationData.endDate}
                    placeholder="00/00/0000"
                    onChange={handleEducationDataChange} />
                <Input 
                    type="text" 
                    name="Location" 
                    id='location'
                    value={educationData.location}
                    placeholder="City, State"
                    onChange={handleEducationDataChange} />
                <div className='buttons'>
                    {educationData.school && educationData.fieldOfStudy && educationData.startDate && educationData.endDate && educationData.location && <Button onClick={handleEducationDataSubmit} title='Save'/>}
                    <Button onClick={handleEducationDataClear} title='Clear'/>
                </div>
            </Form>
            <Form className='experienceDetails' >
                <Input 
                    type="text" 
                    name="Company Name" 
                    id='company'
                    value={experienceData.company}
                    placeholder="Company" 
                    onChange={handleExperienceDataChange} />
                <Input 
                    type="text" 
                    name="Position" 
                    id='position'
                    value={experienceData.position}
                    placeholder="position held"
                    onChange={handleExperienceDataChange} />
                <Input 
                    type="date" 
                    name="Start Date" 
                    id='startDate'
                    value={experienceData.startDate}
                    placeholder="00/00/0000"
                    onChange={handleExperienceDataChange} />
                <Input 
                    type="date" 
                    name="End Date" 
                    id='endDate'
                    value={experienceData.endDate}
                    placeholder="00/00/0000"
                    onChange={handleExperienceDataChange} />
                <Input 
                    type="text" 
                    name="Location" 
                    id='location'
                    value={experienceData.location}
                    placeholder="City, State"
                    onChange={handleExperienceDataChange} />
                <Input 
                    type="textbox" 
                    name="Description" 
                    id='description'
                    value={experienceData.description}
                    placeholder="about your postion"
                    onChange={handleExperienceDataChange} />
                <div className='buttons'>
                    {experienceData.position && experienceData.startDate && experienceData.endDate && experienceData.location && experienceData.description && <Button onClick={handleExperienceDataSubmit} title='Save'/>}
                    <Button onClick={handleExperienceDataClear} title='Clear'/>
                </div>
            </Form>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${props => props.color};
    grid-area: sidebar;
    padding: 2rem;
    .buttons {
        width: 100%;
        display: flex;
        gap: .5rem;
    }
    button {
        flex: 1;
    }
`;