import styled from 'styled-components';

export default function MainBody(props) {
    return (
        <MainBodyContainer>
            {props.children}
        </MainBodyContainer>
    )
}

const MainBodyContainer = styled.div`
    height: 100vh;
    display: grid; 
    grid-template-columns: 1fr 3fr; 
    grid-template-rows: 1fr 3fr;
    grid-template-areas:
    "nav nav"
    "sidebar body"
`;