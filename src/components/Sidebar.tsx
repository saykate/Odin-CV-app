import styled from 'styled-components';
import Form from './Form';
import Input from './Input';
import Button from './Button'
import { useContext } from 'react';
import { ThemeContext } from '../context/Theme';

const Sidebar = () => {
    const theme = useContext(ThemeContext)
    console.log(theme)
    return (
        <SidebarContainer color={theme.flavor.primary}>
            <Form className='personalDetails'>
                <Input type="text" name="Full Name" placeholder="Full Name" />
                <Input type="email" name="Email" placeholder="you@email.com"/>
                <Input type="tel" name="Phone" placeholder="888-000-0000"/>
                <Input type="text" name="Location" placeholder="City, State"/>
            </Form>
            <Button className="toggleButt" title="Dark" onClick={theme.toggleTheme} />
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    background-color: ${props => props.color};
    grid-area: sidebar;
    padding: 2rem;
`;