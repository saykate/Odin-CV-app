import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../context/Theme'

export default function Content() {
    const theme = useContext(ThemeContext)
    return (
        <ContentContainer color={theme.flavor.primaryLight}>
            
        </ContentContainer>
    )
}

const ContentContainer = styled.div` 
    background-color: ${props => props.color};
    grid-area: body;
`;