import styled from 'styled-components';
import Form from './Form';
import Input from './Input';
import Button from './Button'
import { useContext, FC } from 'react';
import { ThemeContext } from '../context/Theme';
import { PersonalData } from '../App';


export type SideBarTypes = {
    personalData: PersonalData;
    handlePersonalDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePersonalDataSubmit: () => void;
  }

const Sidebar: FC<SideBarTypes> = ({ handlePersonalDataChange, personalData, handlePersonalDataSubmit }) => {
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
                    onChange={handlePersonalDataChange} />
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
                <Button onClick={handlePersonalDataSubmit} title='Save'/>
            </Form>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${props => props.color};
    grid-area: sidebar;
    padding: 2rem;
`;