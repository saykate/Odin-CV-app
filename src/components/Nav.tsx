import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../context/Theme';

export default function Nav() {
    const theme = useContext(ThemeContext)
    return (
        <NavContainer color={theme.flavor.primaryMedium}>

        </NavContainer>
    )
}

const NavContainer = styled.div`
    background-color: ${props => props.color};
    grid-area: nav;
`;