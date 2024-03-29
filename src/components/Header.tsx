import styled from 'styled-components';
import { useContext, FC } from 'react';
import { ThemeContext } from '../context/Theme';
import { PersonalData } from '../App'
import pencil from '../assets/pencil.svg';
import trashCan from '../assets/trashCan.svg';

type HeaderProps = {
    personalData: PersonalData;
    handleHeaderEditClick: (e: { preventDefault: () => void }) => void;
    handleDeleteClick: (e: { preventDefault: () => void }) => void;
}

const Header: FC<HeaderProps> = ({ personalData, handleHeaderEditClick, handleDeleteClick }) => {
    const theme = useContext(ThemeContext)
    const hasContenet = personalData.fullName || personalData.email || personalData.phone || personalData.location;
    
    return (
        <HeaderContainer color={theme.flavor.primaryMedium}>
            {hasContenet && <a onClick={handleHeaderEditClick}><img src={pencil} alt="edit" className='pencil'/></a>}
            {hasContenet && <a onClick={handleDeleteClick}><img src={trashCan} alt="delete" className='trashcan'/></a>}
            <h1>{personalData.fullName}</h1>
            <p>{personalData.email}</p>
            <p>{personalData.phone}</p>
            <p>{personalData.location}</p>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    position: relative;
    background-color: ${props => props.color};
    grid-area: header;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    .pencil {
        position: absolute;
        width: 20px;
        left: 1rem;
        top: 1rem;
    }
    .trashcan {
        position: absolute;
        width: 20px;
        left: 1rem;
        bottom: 1rem;
    }
    h1 {
        font-size: 3rem
    }
    p {
        font-size: 1.5rem
    }
`;

export default Header