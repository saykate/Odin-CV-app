import styled from 'styled-components';
import { useContext, FC } from 'react';
import { ThemeContext } from '../context/Theme'
import { EducationData } from '../App';
import { ExperienceData } from '../App';
import pencil from '../assets/pencil.svg';

type ContentProps = {
    educationData: EducationData;
    experienceData: ExperienceData;
    isFormSubmitted: boolean;
    handleEditClick: () => void;
}

const Content: FC<ContentProps> = ({ educationData, experienceData, isFormSubmitted, handleEditClick }) => {
    const theme = useContext(ThemeContext)
    return (
        <ContentContainer color={theme.flavor.primaryLight}>
            <div>
                <a onClick={handleEditClick}><img src={pencil} alt="edit"/></a>
                <h2>Education</h2>
                <h3>{isFormSubmitted ? educationData.school : 'school of Life'}</h3>
                <p>{isFormSubmitted ? educationData.fieldOfStudy : 'learned things'}</p>
                <p>{isFormSubmitted ? educationData.startDate : '10/1/1995'}</p>
                <p>{isFormSubmitted ? educationData.endDate : '10/1/2024'}</p>
                <p>{isFormSubmitted ? educationData.location : 'Earth'}</p>
            </div>
            <div>
                <a onClick={handleEditClick}><img src={pencil} alt="edit"/></a>
                <h2>Experience</h2>
                <h3>{isFormSubmitted ? experienceData.company : ''}</h3>
                <p>{isFormSubmitted ? experienceData.position : ''}</p>
                <p>{isFormSubmitted ? experienceData.startDate : ''}</p>
                <p>{isFormSubmitted ? experienceData.endDate : ''}</p>
                <p>{isFormSubmitted ? experienceData.location : ''}</p>
                <p>{isFormSubmitted ? experienceData.description : ''}</p>
            </div>
        </ContentContainer>
    )
}

export default Content

const ContentContainer = styled.div` 
    // position: relative;
    background-color: ${props => props.color};
    grid-area: body;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 1rem;
    gap: 2rem;
    div {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 1rem;
    }
    img {
        position: absolute;
        width: 25px;
        left: 0;
        top: 0;
    }
    h2 {
        font-size: 2rem;
        text-decoration: underline;
        padding-top: 2rem;
        padding-bottom: 1rem;
    }
    h3 {
        font-size: 1.5rem;
    }
`;