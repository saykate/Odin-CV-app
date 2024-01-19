import styled from 'styled-components';
import { useContext, FC } from 'react';
import { ThemeContext } from '../context/Theme'
import { EducationData, ExperienceData } from '../App';
import pencil from '../assets/pencil.svg';

type ContentProps = {
    educationData: EducationData;
    experienceData: ExperienceData;
    handleContentEducationEditClick: (e: { preventDefault: () => void }) => void;
    handleContentExperienceEditClick: (e: { preventDefault: () => void }) => void;
}

const Content: FC<ContentProps> = ({ educationData, experienceData, handleContentEducationEditClick, handleContentExperienceEditClick }) => {
    const theme = useContext(ThemeContext)
    const hasEduContent = educationData.school || educationData.fieldOfStudy || educationData.startDate || educationData.endDate || educationData.location;
    const hasExpContent = experienceData.company || experienceData.position || experienceData.startDate || experienceData.endDate || experienceData.location || experienceData.description; 

    return (
        <ContentContainer color={theme.flavor.primaryLight}>
            <div>
                {hasEduContent && <a onClick={handleContentEducationEditClick}><img src={pencil} alt="edit"/></a>}
                <h2>Education</h2>
                <h3>{educationData.school}</h3>
                <p>{educationData.fieldOfStudy}</p>
                <p>{educationData.startDate}</p>
                <p>{educationData.endDate}</p>
                <p>{educationData.location}</p>
            </div>
            <div>
                {hasExpContent && <a onClick={handleContentExperienceEditClick}><img src={pencil} alt="edit"/></a>}
                <h2>Experience</h2>
                <h3>{experienceData.company}</h3>
                <p>{experienceData.position}</p>
                <p>{experienceData.startDate}</p>
                <p>{experienceData.endDate}</p>
                <p>{experienceData.location}</p>
                <p>{experienceData.description}</p>
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