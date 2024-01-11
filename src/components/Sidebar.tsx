import styled from 'styled-components';
import Form from './Form';
import Input from './Input';
import Button from './Button'
import { useContext } from 'react';
import { ThemeContext } from '../context/Theme';

const Sidebar = () => {
    const theme = useContext(ThemeContext)
    console.log(theme.theme)
    return (
        <SidebarContainer color={theme.flavor.primaryDark}>
            <Button className="toggleButt" title={theme.theme === 'light' ? 'Dark Display' : 'Light Display'} onClick={theme.toggleTheme} />
            <Form className='personalDetails'>
                <Input type="text" name="Full Name" placeholder="Full Name" />
                <Input type="email" name="Email" placeholder="you@email.com"/>
                <Input type="tel" name="Phone" placeholder="888-000-0000"/>
                <Input type="text" name="Location" placeholder="City, State"/>
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