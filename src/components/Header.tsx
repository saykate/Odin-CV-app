import styled from 'styled-components';
import { useContext, FC } from 'react';
import { ThemeContext } from '../context/Theme';
import { PersonalData } from '../App'

type HeaderProps = {
    personalData: PersonalData;
    isFormSubmitted: boolean;
}

const Header: FC<HeaderProps> = ({ personalData, isFormSubmitted }) => {
    const theme = useContext(ThemeContext)
    return (
        <HeaderContainer color={theme.flavor.primaryMedium}>
            <h1>{isFormSubmitted ? personalData.fullName : ''}</h1>
            <p>{isFormSubmitted ? personalData.email : ''}</p>
            <p>{isFormSubmitted ? personalData.phone : ''}</p>
            <p>{isFormSubmitted ? personalData.location : ''}</p>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    background-color: ${props => props.color};
    grid-area: header;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 4rem
    }
    p {
        font-size: 1.5rem
    }
`;

export default Header