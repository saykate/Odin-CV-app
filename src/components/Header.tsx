import styled from 'styled-components';
import { useContext, FC } from 'react';
import { ThemeContext } from '../context/Theme';
import { PersonalData } from '../App'
import Button from './Button'
import pencil from '../assets/pencil.svg';

type HeaderProps = {
    personalData: PersonalData;
    isFormSubmitted: boolean;
    handleEditClick: () => void;
}

const Header: FC<HeaderProps> = ({ personalData, isFormSubmitted, handleEditClick }) => {
    const theme = useContext(ThemeContext)
    return (
        <HeaderContainer color={theme.flavor.primaryMedium}>
            <a onClick={handleEditClick}><img src={pencil} alt="edit"/></a>
            <h1>{isFormSubmitted ? personalData.fullName : ''}</h1>
            <p>{isFormSubmitted ? personalData.email : ''}</p>
            <p>{isFormSubmitted ? personalData.phone : ''}</p>
            <p>{isFormSubmitted ? personalData.location : ''}</p>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    position: relative;
    background-color: ${props => props.color};
    grid-area: header;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    img {
        position: absolute;
        width: 25px;
        left: 1rem;
        top: 1rem;
    }
    h1 {
        font-size: 4rem
    }
    p {
        font-size: 1.5rem
    }
`;

export default Header