import styled from 'styled-components';
import { useContext, FC } from 'react';
import { ThemeContext } from '../context/Theme';
import { PersonalData } from '../App'
import pencil from '../assets/pencil.svg';

type HeaderProps = {
    personalData: PersonalData;
    handleHeaderEditClick: (e: { preventDefault: () => void }) => void;
}

const Header: FC<HeaderProps> = ({ personalData, handleHeaderEditClick }) => {
    const theme = useContext(ThemeContext)
    return (
        <HeaderContainer color={theme.flavor.primaryMedium}>
            <a onClick={handleHeaderEditClick}><img src={pencil} alt="edit"/></a>
            <h1>{personalData.fullName}</h1>
            <p>{personalData.email}</p>
            <p>{personalData.phone}</p>
            <p>{personalData.location}</p>
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
        font-size: 3rem
    }
    p {
        font-size: 1.5rem
    }
`;

export default Header