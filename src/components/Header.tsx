import styled from 'styled-components';
import { useContext, FC } from 'react';
import { ThemeContext } from '../context/Theme';
import { PersonalData } from '../App'

type HeaderProps = {
    personalData: PersonalData;
}

const Header: FC<HeaderProps> = ({ personalData }) => {
    const theme = useContext(ThemeContext)
    return (
        <HeaderContainer color={theme.flavor.primaryMedium}>
            <h1>{personalData.fullName}</h1>
            <p className='email'>{personalData.email}</p>
            <p className='phone'>{personalData.phone}</p>
            <p className='location'>{personalData.location}</p>
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